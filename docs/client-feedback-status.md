# Retour client du 21 octobre 2026 — suivi de mise en œuvre

Mise à jour : 22 octobre 2026. Changements locaux, non déployés.

## Fonctionnement

| Demande | Réalisation | Reste avant livraison |
| --- | --- | --- |
| Envoi du formulaire aux deux adresses | Route serveur `/api/contact`, validation, consentement, piège antispam, limitation par instance, gestion des erreurs et des doublons, confirmation après acceptation par Resend | Créer le compte Resend au nom d’ALMA-STRA, vérifier le domaine, configurer les secrets, tester la réception dans les deux boîtes |
| Français / arabe | Contenu localisé, routes `/ar`, direction RTL, police Noto Sans Arabic, navigation équivalente et liens de langue | Relecture éditoriale arabe par le client |
| WhatsApp | Lien direct vers `+212661347602` sur toutes les pages, sans chargement d’un module externe | Vérifier le numéro sur un téléphone lors de la recette |

## Contenu et sources

- Sept fiches distinctes, descriptions et galeries issues des dossiers fournis ; 44 images locales.
- Images de service et image d’accueil : vraies photographies. Les perspectives fournies par le client restent explicitement identifiées comme études dans la référence Amssernat.
- Noms des projets harmonisés en casse de phrase. Aucun logo modifié.
- Rubrique Société : identité, RC, ICE, IF, deux références documentées et contact pour préparer un dossier de consultation.
- Formulations décrivant la mise en page remplacées par des informations sur l’entreprise et ses interventions.

### Éléments vérifiés dans les documents

| Information | Source | Publication |
| --- | --- | --- |
| RC 18271 ; ICE 001718740000081 ; IF 18735661 | Pied de page du courrier signé du 21 octobre 2026 | Rubrique Société et identification légale |
| Amssernat, Agadir ; construction TCE ; entreprise ALMA-STRA ; maîtrise d’ouvrage déléguée Société Al Omrane Souss Massa | `WEB SITE/AL OMARANE SOUSS MASSA/AMSERNAT.png` | Fiche Al Omrane et Société |
| Construction de la 6e circonscription urbaine ; propriétaire du projet Wilaya de la région Laâyoune-Sakia El Hamra ; entreprise ALMASTRA SARL | `WEB SITE/PROVINCE LAAYOUNE/PANNEAU.jpg` | Fiche Province et Société |
| Brochure Centre culturel Tikiouine : plans et perspectives ; auteur Ateliers Elmeknassi | Les 36 pages de la plaquette fournie | Non attribuée à une réalisation livrée par ALMA-STRA, faute de preuve du rôle contractuel |
| Archive PHOTOS PR DEFILEMENT | Inventaire du RAR | Cinq fichiers, déjà présents dans le dossier homonyme ; aucun certificat supplémentaire |

### Informations non établies par les fichiers fournis

- Années de réalisation et de réception des sept projets.
- Maître d’ouvrage contractuel exact des cinq autres projets : le nom d’un dossier ne prouve pas à lui seul une qualité contractuelle.
- Certificat de qualification et classification en cours de validité, références et attestations signées.
- Effectifs, fonctions, inventaire du matériel et statut de propriété/location.

La période 2020–2024 sur le panneau d’Amssernat désigne le programme urbain d’Agadir ; elle n’est pas présentée comme une année de livraison. Le délai de huit mois du panneau de Laâyoune est prévisionnel et n’est pas transformé en délai réellement réalisé. Les dates EXIF et de création du PDF ne sont pas utilisées comme dates de réalisation.

## Référencement, migration et confidentialité

- Canonical propre à chaque page et à chaque langue ; liens `hreflang` réciproques dans les métadonnées et le sitemap.
- Descriptions et titres localisés ; cartes Open Graph / Twitter avec image de projet ou visuel de partage fondé sur une vraie photographie.
- Trois pages légales internes, rédigées pour les fonctionnalités de cette version. Textes de travail à valider par ALMA-STRA avant publication ; les descriptions WordPress, Gravatar, comptes et commentaires de l’ancien site ne correspondent pas à cette version et ne sont pas recopiées.
- Anciennes adresses légales conservées ; suppression du slash final gérée par Next.js. Redirections permanentes des anciens chemins de services vers `/expertise/...`.
- Largeur des images générées limitée à 1920 px ; sources du portfolio plafonnées à 2400 px sans agrandissement. Formats WebP et tailles adaptées à l’affichage.
- Aucun outil de statistiques, publicité ou traceur tiers ajouté ; le site ne nécessite pas de bannière de suivi pour ses fonctionnalités actuelles. Réévaluer si ces fonctionnalités changent.

## Propriété et commercial

Voir `launch-and-handover.md`. Aucun compte, domaine, hébergement, tarif ou engagement de maintenance n’a été créé ou modifié. Les montants commerciaux et engagements de délai doivent être arrêtés par Ilyass avant remise du devis.

## Recette locale de cette version

- Build de production et TypeScript : succès.
- 38 pages français/arabe : réponses 200, un H1, description unique, canonical propre, alternates réciproques, image sociale et lien WhatsApp.
- Redirections permanentes, réponse 404, sitemap de 38 adresses et rejet des variantes d’image 3840 px vérifiés.
- Six tests automatisés de contact : destinataires, reply-to et contexte projet ; configuration absente ; champs/consentement/antispam ; origine ; refus ou panne du prestataire ; limitation des rafales. Transport simulé, aucun e-mail réel envoyé.
- Formulaire dans le navigateur : erreur explicite sans Resend, saisie conservée, liens directs disponibles.
- Navigation français/arabe avec conservation de la page et du contexte projet dans la requête.
- Vues mobiles représentatives à 320 px et 390 px ; navigation de bureau à 1280 px. Pas de débordement horizontal observé.
- Menu mobile dans un dialogue natif : focus initial dans le menu, cycle Tab/Shift+Tab, Échap, retour au déclencheur et restauration du défilement vérifiés.
- Galerie arabe : filtre document (1 sur 6), visualisation, clavier, fermeture et retour du focus vérifiés.
- Console du navigateur : aucune erreur relevée pendant la vérification finale.
- Capture de recette : `artifacts/client-feedback-arabic-preview.jpg`.
- Lint : aucune erreur ; avertissement existant sur le `<img>` du logo conservé, conformément à la demande de ne pas modifier les logos.

L’envoi réel et la réception dans les deux boîtes restent à vérifier après configuration de Resend. Les contenus arabes et légaux restent soumis à validation du client. Aucun déploiement, transfert de compte ou envoi de devis au client effectué.
