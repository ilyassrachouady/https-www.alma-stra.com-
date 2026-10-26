import Image from "next/image";

export default function BrandLogo({ className = "" }: { className?: string }) {
  return <Image className={`alma-logo-image ${className}`} src="/images/brand/alma-stra.svg" width="180" height="34" alt="ALMA-STRA — Travaux de Construction & Aménagement" />;
}
