import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://alma-stra.com"; return [{url:base},{url:`${base}/about`},{url:`${base}/expertise`},{url:`${base}/projects`},{url:`${base}/contact`},...services.map(s=>({url:`${base}/expertise/${s.slug}`})),...projects.map(p=>({url:`${base}/projects/${p.slug}`}))]; }
