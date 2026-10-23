# Mise en ligne, propriété et maintenance — dossier de préparation

Document interne, 22 octobre 2026. À compléter avec les choix commerciaux et les comptes du client avant remise.

## Outils et recours à l’IA

- Next.js 16, React 19 et TypeScript pour les pages et la route de contact.
- CSS / Tailwind, Lucide et Motion présents dans le projet ; animations et composants existants conservés.
- Next/Image et Sharp pour la conversion WebP, le redimensionnement et les aperçus des photographies fournies.
- Avenir Light fourni par le client pour le français ; Manrope pour les titres selon la préférence validée dans cette conversation ; Noto Sans Arabic pour l’arabe. Les polices sont servies localement par le site.
- Resend prévu pour les demandes du formulaire, avec deux destinataires fixes : almastra.sarl@gmail.com et contact@alma-stra.com.
- Assistance IA utilisée pour le développement, la rédaction et la traduction arabe. Les photographies actuellement mises en avant proviennent des fichiers du client. Les perspectives architecturales du client sont distinguées des photographies. Aucune retouche générative des chantiers n’a été effectuée dans cette intervention.

## Activation du formulaire

1. ALMA-STRA crée et possède le compte Resend. Vérifier le domaine d’envoi avec les enregistrements DNS demandés par Resend.
2. Créer une clé d’envoi et la saisir directement dans les variables secrètes de l’hébergement : `RESEND_API_KEY`.
3. Configurer `CONTACT_FROM_EMAIL` avec une adresse du domaine vérifié, par exemple `ALMA-STRA <site@alma-stra.com>`. Cette adresse est un exemple de configuration, pas la confirmation d’une boîte existante.
4. Configurer `SITE_URL=https://alma-stra.com`. Ne pas utiliser le préfixe `NEXT_PUBLIC_` pour les secrets.
5. Protéger globalement `POST /api/contact` via la limitation de débit du pare-feu de l’hébergeur. Le code limite aussi les rafales à six essais par dix minutes et par IP/instance ; ce mécanisme mémoire ne se substitue pas à une limite globale sur un déploiement distribué. Il ne conserve ni message ni adresse IP brute et se réinitialise avec l’instance.
6. Effectuer une demande de recette autorisée, puis contrôler la réception dans les deux boîtes, l’adresse de réponse, les indésirables et les journaux Resend. La confirmation du site indique l’acceptation par le prestataire, pas une garantie de lecture ou de livraison finale dans les boîtes.
7. Sans configuration valide, le serveur renvoie une erreur explicite et le formulaire conserve les champs, avec des liens e-mail / WhatsApp. Aucun faux message de réussite.

## Préparation du devis détaillé

Les montants sont à renseigner par Ilyass ; aucune offre ferme n’est émise par ce document.

| Poste | Périmètre | Prix HT |
| --- | --- | --- |
| Corrections et intégration | Conservation du design validé, photographies, galeries, sept fiches, harmonisation du contenu | À fixer |
| Version arabe | Traduction, routes bilingues, navigation et mise en page RTL, recette responsive | À fixer |
| Contact | Formulaire serveur Resend, deux destinataires, confirmation, protection de base et WhatsApp | À fixer |
| Société et informations légales | Identité vérifiée, pièces et données supplémentaires après réception, trois pages légales à valider | À fixer |
| Référencement et migration | Métadonnées, images sociales, sitemap bilingue, redirections et optimisation des images | À fixer |
| Livraison | Déploiement sur les comptes du client, domaine, tests de réception et remise du dépôt/documentation | À fixer |
| Maintenance annuelle | Mises à jour de dépendances, sauvegardes du dépôt, contrôle périodique des liens/formulaire et corrections techniques selon un volume convenu | À fixer / an |
| Services tiers | Hébergement, domaine et envoi e-mail facturés sur les comptes du client selon les offres retenues | Coûts réels à confirmer |

Préciser dans le devis : HT/TTC et taxes applicables, modalités de paiement, durée de validité, nombre de retours inclus, volume d’intervention annuel, temps de réponse, sauvegarde/restauration, limites du support et facturation hors forfait. Les évolutions majeures, nouvelles pages ou langues, déplacements, productions photo et services tiers ne doivent pas être supposés inclus sans accord.

## Délai de mise en ligne

Le déclencheur est la réception des éléments manquants, la validation des textes français/arabe et légaux, l’accès aux comptes du client et la configuration Resend/DNS. Arrêter ensuite une date de recette et de mise en ligne avec le client. Ne pas promettre de date ni de délai contractuel avant confirmation des accès et de la disponibilité du client.

## Propriété et remise

- Dépôt Git, hébergement, domaine et Resend détenus par ALMA-STRA SARL ; développement avec accès collaborateur nominatif.
- Vérifier propriétaire légal, facturation, contacts de récupération, renouvellement automatique du domaine et authentification multifacteur avec le client.
- Remettre le code complet, les sources des médias fournis, les consignes de build et déploiement, l’inventaire des variables (sans secrets dans le dépôt), les redirections et le journal des modifications.
- Consigner séparément les services, propriétaires, renouvellements et personnes autorisées. Transmettre les secrets via un gestionnaire de mots de passe ou directement dans les comptes du client.
- Garder un point de retour avant le basculement du domaine et vérifier que les DNS de messagerie existants sont conservés.
- Recette finale : français/arabe, mobile, galeries, formulaire et réception réelle, WhatsApp sur téléphone, redirections, pages légales, métadonnées et images sociales.

## En attente du client

Certificats et classifications, attestations, inventaire des moyens, années et maîtres d’ouvrage non documentés. Ne publier ni numéros de certificats, ni effectifs, ni dates supposées. Obtenir aussi l’accord explicite sur les témoignages existants avant lancement si leur validation n’est pas déjà documentée.
