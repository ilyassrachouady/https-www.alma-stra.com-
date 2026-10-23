import { MessageCircle } from 'lucide-react';
import { translate, type Locale } from '@/lib/i18n';
export default function WhatsAppButton({ locale }: { locale: Locale }) {
 return <a className="whatsapp-button" href="https://wa.me/212661347602" target="_blank" rel="noopener noreferrer" aria-label={translate('Contacter ALMA-STRA sur WhatsApp (nouvel onglet)', locale)}><MessageCircle size={23} aria-hidden="true"/><span>WhatsApp</span></a>;
}
