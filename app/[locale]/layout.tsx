import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import "../modern.css";
import "../polish.css";
import "../qa-fixes.css";
import "../expertise.css";
import "../responsive-fixes.css";
import "../brand.css";
import "../projects.css";
import "../client-feedback.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const avenir = localFont({
  src: "../fonts/avenir-light.ttf", variable: "--font-sans", weight: "300", display: "swap",
});
const headings = Manrope({
  subsets: ["latin"], variable: "--font-display", display: "swap",
});

const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic", display: "swap", weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = {
 metadataBase: new URL("https://alma-stra.com"),
 title: { default: "ALMA-STRA", template: "%s | ALMA-STRA" },
 icons: { icon: "/favicon.svg" },
};
export function generateStaticParams() { return [{ locale: "fr" }, { locale: "ar" }]; }
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
 const { locale } = await params;
 if (!isLocale(locale)) notFound();
 return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}><body className={`${avenir.variable} ${headings.variable} ${arabic.variable}`}><a className="skip-link" href="#main-content">{locale === "ar" ? "الانتقال إلى المحتوى" : "Aller au contenu"}</a><ScrollProgress /><SiteHeader locale={locale} /><div id="main-content" tabIndex={-1}>{children}</div><SiteFooter locale={locale} /><WhatsAppButton locale={locale} /></body></html>;
}
