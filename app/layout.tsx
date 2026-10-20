import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./modern.css";
import "./polish.css";
import "./qa-fixes.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alma-stra.com"),
  title: { default: "ALMA-STRA | Construction, aménagement & viabilisation au Maroc", template: "%s | ALMA-STRA" },
  description: "ALMA-STRA accompagne les projets de construction, d’aménagement BTP et de viabilisation au Maroc.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "ALMA-STRA", description: "Solutions de construction et d’aménagement au Maroc.", url: "https://alma-stra.com", siteName: "ALMA-STRA", locale: "fr_MA", type: "website" },
  alternates: { canonical: "https://alma-stra.com" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={manrope.variable}><ScrollProgress /><SiteHeader />{children}<SiteFooter /></body></html>;
}
