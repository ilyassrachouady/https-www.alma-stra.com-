# ALMA-STRA — Premium Next.js rebuild

A French-first redesign of alma-stra.com focused on architectural editorial layouts, strong project presentation, responsive UX, restrained motion and verified company content.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind/PostCSS available; custom architectural design system in `app/globals.css`
- Next/Image
- Lucide icons

## Development
```bash
npm install
npm run dev
```

## Content notes
The previous WordPress site contains real ALMA-STRA service descriptions, contact details, partner logos and project names, but several legacy project-detail pages still expose demo-template metadata. The rebuild intentionally omits unverified dates, budgets, surfaces and clients instead of inventing facts.

## Client feedback — October 2026

French URLs are preserved. Arabic counterparts live at `/ar`, with server-rendered
translated content and RTL layouts. Pages and the root layout are in
`app/[locale]`; `proxy.ts` internally rewrites French paths to `/fr` without
changing their public URL. Explicit `/fr` URLs redirect to the canonical French
URL. Navigation and accessible copy share `lib/i18n.ts` and its reviewed Arabic
dictionary. `lib/localize.tsx` translates visible React children/accessible labels
and internal links while preserving the existing layout and component data.

The `/societe` page publishes only sourced company information. The three legal
pages are local drafts for client validation. Missing project dates,
qualifications, attestations and resource inventories are recorded in
`docs/client-feedback-status.md`.

### Contact delivery

Set server-only `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `SITE_URL` using
`.env.example`. The sender must belong to a domain verified in the client's Resend
account. Until configured, submission returns an honest unavailable message and
retains the fields. Successful acceptance sends to both client inboxes, with the
visitor's address as reply-to. No database or analytics service is added.

See `docs/launch-and-handover.md` for delivery verification, global rate protection,
account ownership and the maintenance/quotation scope.

### Verification

```bash
npm run build
npm run lint
npm test
npm run start -- --port 3020
node scripts/verify-launch.mjs
```

The HTTP check requires the production server and checks all 38 pages, metadata,
language alternates, redirects, sitemap and the 1920px image cap. An optional
`VERIFY_UNCONFIGURED_CONTACT=1` check posts a synthetic enquiry and expects 503;
use it only while Resend is unconfigured. Email unit tests use an injected mock
transport and never send mail. The existing BrandLogo `<img>` lint warning is
retained because logo changes were explicitly excluded.
