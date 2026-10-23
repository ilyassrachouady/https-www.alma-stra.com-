import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import { localePath, translate, type Locale } from './i18n';

/** Translate explicit copy keys while retaining the approved component/layout tree.
 * Only visible copy, accessible names and navigation destinations are changed.
 * DOM identifiers, CSS, event handlers, media sources and component data stay intact.
 */
export function localize(node: ReactNode, locale: Locale): ReactNode {
  if (locale === 'fr') return node;
  return Children.map(node, child => {
    if (typeof child === 'string') return translate(child, locale);
    if (!isValidElement<Record<string, unknown>>(child)) return child;
    const props: Record<string, unknown> = {};
    for (const name of ['alt', 'title', 'aria-label', 'placeholder']) {
      if (typeof child.props[name] === 'string') props[name] = translate(child.props[name], locale);
    }
    if (typeof child.props.href === 'string' && !child.props.hrefLang) props.href = localePath(child.props.href, locale);
    if ('children' in child.props) props.children = localize(child.props.children as ReactNode, locale);
    return cloneElement(child, props);
  });
}
