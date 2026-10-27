export type LegalPage = { title: string; description: string; sections: { title: string; text: string }[] };
/** Website-specific drafts for client review before launch; no inherited WordPress features. */
export const legalPages: Record<string, LegalPage> = {
 'conditions-generales': {
  title: 'Conditions générales', description: 'Informations sur l’éditeur et conditions d’utilisation du site ALMA-STRA.',
  sections: [
   { title: 'Éditeur du site', text: 'Le site alma-stra.com est édité par ALMA-STRA SARL, Av. Sakia El Hamra N°28, Hay Chouhada, Laâyoune, Maroc. RC : 18271. ICE : 001718740000081. Contact : contact@alma-stra.com · +212 661 347 602.' },
   { title: 'Objet du site', text: 'Le site présente l’entreprise, ses métiers et ses références. Les informations et photographies ont une vocation de présentation. Une demande par formulaire ne constitue ni une commande ni un engagement contractuel. Les prestations sont définies dans un devis et un contrat distincts.' },
   { title: 'Photographies et études', text: 'Les photographies illustrent les projets présentés. Les perspectives et documents d’étude sont identifiés comme tels et ne constituent pas des photographies d’ouvrages livrés. Le périmètre et les conditions de chaque intervention doivent être confirmés avec ALMA-STRA.' },
   { title: 'Propriété intellectuelle', text: 'Les textes, photographies, marques et créations restent soumis aux droits de leurs titulaires. Toute réutilisation au-delà des usages autorisés nécessite leur accord préalable.' },
   { title: 'Utilisation et liens externes', text: 'Le visiteur s’engage à ne pas perturber le fonctionnement du site ni transmettre de contenu malveillant. Les liens externes, notamment WhatsApp, ouvrent des services tiers soumis à leurs propres conditions.' },
   { title: 'Contact et mise à jour', text: 'Pour signaler une erreur ou poser une question concernant le site, écrivez à contact@alma-stra.com. Ces conditions peuvent évoluer avec les fonctionnalités du site. Les dispositions impératives applicables restent préservées.' },
  ],
 },
 'politique-de-confidentialite': {
  title: 'Politique de confidentialité', description: 'Comment ALMA-STRA utilise les informations transmises avec votre demande de projet.',
  sections: [
   { title: 'Responsable et contact', text: 'ALMA-STRA SARL traite les informations que vous lui communiquez pour votre demande. Adresse : Av. Sakia El Hamra N°28, Hay Chouhada, Laâyoune, Maroc. Pour toute question relative à vos données : contact@alma-stra.com.' },
   { title: 'Informations transmises', text: 'Le formulaire demande votre nom, votre adresse e-mail et votre message. L’entreprise, le téléphone et le type de projet sont facultatifs. La page de projet ou le service à l’origine de votre demande peut aussi être transmis pour faciliter la réponse. Évitez d’envoyer des informations sensibles dans le message.' },
   { title: 'Finalité et destinataires', text: 'Ces informations servent à étudier votre demande et à vous répondre. Elles sont adressées à almastra.sarl@gmail.com et contact@alma-stra.com. Le service d’envoi Resend assure la transmission technique lorsque le formulaire est activé. Elles ne sont pas publiées sur le site.' },
   { title: 'Cadre légal', text: 'Le traitement des données personnelles est soumis à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel. La Commission nationale de contrôle de la protection des données à caractère personnel (CNDP) est l’autorité compétente au Maroc.' },
   { title: 'Conservation et droits', text: 'Les échanges sont conservés pour traiter et suivre votre demande, sous réserve des obligations de conservation applicables. Vous pouvez contacter ALMA-STRA à contact@alma-stra.com pour demander l’accès, la rectification ou la suppression de vos données, ou pour toute question sur leur conservation.' },
   { title: 'Services externes et fonctionnement technique', text: 'Le bouton WhatsApp vous conduit vers un service tiers uniquement lorsque vous cliquez dessus. Ce service applique sa propre politique de confidentialité. L’hébergement peut traiter les informations techniques nécessaires à la sécurité et à la disponibilité du site. Le formulaire ne stocke pas votre demande dans une base de données du site.' },
  ],
 },
 'politique-de-cookies': {
  title: 'Politique des cookies', description: 'Informations sur les cookies et les services tiers du nouveau site ALMA-STRA.',
  sections: [
   { title: 'Cookies sur ce site', text: 'Cette version du site n’intègre ni outil de mesure d’audience, ni publicité, ni traceur marketing. Aucun cookie de suivi n’est déposé par les fonctionnalités du site. Le choix français / arabe est porté par l’adresse de la page.' },
   { title: 'Fonctions du site', text: 'Les galeries et les menus fonctionnent sans cookie de préférence. Les polices et les photographies sont servies par le site. Le formulaire ne mémorise pas vos coordonnées dans un cookie ou dans le stockage local de votre navigateur.' },
   { title: 'Liens vers des services tiers', text: 'Les liens WhatsApp et les liens externes ouvrent des sites distincts. Leurs éventuels cookies dépendent de ces services et de vos réglages. La carte Google Maps de la page Contact est chargée uniquement si vous choisissez de l’afficher. Aucun module WhatsApp ou vidéo externe n’est chargé automatiquement.' },
   { title: 'Vos réglages', text: 'Vous pouvez consulter, supprimer et bloquer les cookies depuis les paramètres de votre navigateur. Si de nouveaux services de suivi sont ajoutés, cette page et les choix de consentement devront être adaptés avant leur activation. Pour toute question : contact@alma-stra.com.' },
  ],
 },
};
