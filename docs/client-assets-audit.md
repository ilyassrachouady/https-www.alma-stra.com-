# Supplied project assets — reviewed 22 October 2026

## Published use

44 full-frame images in eight collections: college (5), Al Omrane (6), Province
Laâyoune (4), sports ground (4), Atlas Sahara (10), fire station (3), Provincial
Council (4), viabilisation (8).

The reviewed source-to-output mapping, image classification and captions are in
`scripts/client-media-manifest.json`. Rebuild the optimized copies with:

```
node scripts/import-client-media.mjs '/path/to/WEB SITE'
```

Originals are untouched. The importer honors EXIF orientation, resizes to a
maximum of 2400 pixels without enlargement and creates WebP files and blur
placeholders. It does not invent texture, alter structures or change scenes.
The website does not need AI-generated replacements for these assets.

## Evidence for project facts

- The Amssernat board (`AL OMARANE SOUSS MASSA/AMSERNAT.png`) identifies the
  project as TCE construction of a social activities complex in the Amssernat
  district of Agadir. Al Omrane Souss Massa is the delegated owner; ALMA-STRA
  is the named contractor. The 2020–2024 reference is a city programme, not a
  verified completion date. No completion date or budget is published.
- `PROVINCE LAAYOUNE/PANNEAU.jpg` identifies construction of the 6th district
  and names ALMASTRA SARL as contractor. Its eight-month duration is a planned
  period on a board, not proof of actual delivery time, and is not published.
- The other project descriptions concern visible features in the correctly
  named supplied folders. They do not claim undocumented contractual scope,
  performance guarantees, client identities, dates, budgets or dimensions.
- The fire-station water image is described generically as an ouvrage en eau;
  its exact technical function is not documented.
- VUE-1.jpg is an architectural photomontage (a rendered building inserted
  into a street photograph). It is labeled as a study throughout the site,
  including the homepage badge, archive, gallery and related-project cards.
  The other Amssernat perspectives are also labeled as architectural studies.

## Reviewed, retained as references and not published

- `23-vue-int.jpg`: annotated near-duplicate of the cleaner VUE-8-NO interior.
- `VIABILISATION LOTISSEMENT/2.JPG`: redundant close-up of an excavation.
- IN011/IN022 in the Al Omrane folder: a different purple-fronted cultural
  complex, not the Amssernat building. Folder membership alone is insufficient
  to merge these into the Amssernat project gallery.
- `PHOTOS PR DEFILEMENT`: architectural renderings without reliable named
  project associations; not randomly assigned to the seven cases.
- The 36-page Tikiouine cultural-centre brochure was read and its cover and
  site plan rendered. It presents an architectural proposal by Ateliers
  Elmeknassi, with exhibition hall, library and performance spaces. It does
  not establish ALMA-STRA's contractual role or completion. It is a separate
  design from Amssernat and the purple-fronted complex. No new completed
  project or public brochure download is asserted from it.
- The photo archive is retained; the extracted image folder was inspected.
- Logos, including logo pna.png, are intentionally excluded from this change.

## Website changes

Seven existing URLs retain the approved site identity and now have individual
summaries, verified facts, two reading sections, captioned galleries, appropriate
photo/study/document labels, related cases and contact links. Galleries support
full-frame viewing, arrow keys, Escape, native dialog focus containment and
returning focus to the originating image. The land-development service has an
eight-photo technical gallery. Service previews now use authentic supplied
construction photography or an explicitly labeled supplied architectural study.

## Verification

- Production build and TypeScript compilation pass for all existing routes.
- All 15 content pages respond successfully; seven project titles are distinct.
- All 44 image sources decode and return valid optimized image responses through
  Next/Image (5.9 MB combined for the 1200px variants).
- Browser verified: gallery opening, next/previous buttons, arrow keys, Escape,
  focus restoration, forward/backward focus cycling and root/body scroll locking.
- Study/document filters show the correct counts and classifications.
- Mobile layouts checked at 320px and 390px; no horizontal overflow found in
  the inspected project and service templates. Desktop gallery checked at 1280px.
- Existing logos and partner marks are untouched; no public deployment performed.

## Follow-up from the client letter

The 22 October follow-up now uses real photography for every service preview and
the homepage hero. Both languages are implemented (38 content pages). All 36
brochure pages were additionally rendered as a contact sheet; no classification
certificate, company inventory or verified project completion year was found.
See `client-feedback-status.md` for the current implementation and outstanding
source information; the verification section above records the earlier
French-only portfolio delivery.
