# Client brand alignment — 21 October 2026

Scope: typography, brand color tokens, and client-supplied versions of existing
portfolio images. The approved page structure, sections, copy, interactions,
and service visual concepts remain unchanged.

Reference: client-supplied “ALMA STRA brand guideline visual identity fr.pdf”.

- Page 19 explicitly specifies digital chartreuse `#80FF00`. Used for primary
  calls to action with charcoal text to retain readable contrast.
- Page 20 supporting palette: `#93C83C`, `#59A032`, `#3D6A2A`, `#BAE37F`,
  `#FFFEED`, `#393536`, `#656263`, `#A7A5A6`. These values were sampled from
  the rendered swatches; they are not printed as hex values in the guide.
  The page 19 hex and the printed green swatch differ, so they are separate
  named tokens rather than an undocumented substitution.
- Pages 22–24: Mad Hacker for uppercase display headings; Avenir for supporting
  text, controls, and body copy. Both supplied TTF files are self-hosted through
  next/font/local; the previous Google Manrope font is removed.
- The supplied Mad Hacker font lacks French accented characters. French spelling
  is preserved and the supplied Avenir font supplies the fallback glyphs. The
  supplied Avenir face is Light (300); heavier UI weights use browser synthesis.
- Print headline sizes are adapted responsively for the approved web layout.
- The existing official logo lockup remains unchanged. Partner logos remain in
  their original colors; no decorative recoloring is applied to imagery.
- Seven existing project images now use the matching original files from the
  client’s WEB SITE folder. Names and project assignments are unchanged.
- Other supplied photos, the cultural-center brochure and unrelated partner mark
  remain references; they do not introduce new sections or unsupported claims.

Implementation: app/brand.css, app/fonts/, app/layout.tsx.

## Client typography revision — 22 October 2026

At the client’s request, Mad Hacker is no longer used in website headings.
The approved Manrope heading family and original responsive type scale and
sentence casing are restored. Avenir body copy and the brand colors remain.
The supplied Mad Hacker file is retained as a reference, not loaded by the site.
