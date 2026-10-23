# Website imagery

## Active client originals

`portfolio/` contains 44 WebP images prepared from the client-supplied WEB SITE
folder, organized into seven project collections plus viabilisation. Source
mapping, captions and photo/study/document classifications are recorded in
`scripts/client-media-manifest.json`. The import script honors orientation,
retains the full frame, avoids enlargement and leaves originals untouched.

Project gallery metadata and blur placeholders are in `lib/client-media.ts`;
editorial details are in `lib/project-details.ts`. Service and homepage image
assignments are centralized in `lib/media.ts`.

Amssernat's facade image is a photomontage and is labeled as an architectural
study. Construction photographs, renderings and project boards are distinguished.
No new generated image is used as evidence of a completed project.

Partner marks remain unchanged. Older root-level photographs and the generated
`expertise/` visuals are retained as previous assets but no longer rendered.

See `docs/client-assets-audit.md` for the complete review and exclusions.

## Retour client — 22 octobre 2026

L’accueil utilise désormais la photographie réelle `portfolio/province/facade.webp` et l’aménagement utilise `portfolio/caserne/pavage.webp`. Leurs légendes correspondent aux scènes photographiées. Les perspectives Amssernat sont conservées dans la référence concernée et restent identifiées comme études. Le visuel `social-share.jpg` est composé à partir de la photographie de la Province ; aucun chantier n’a été généré ou retouché par IA. Les variantes Next/Image sont plafonnées à 1920 px.
