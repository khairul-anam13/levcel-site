import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/blocks";
import { Nav } from "@/components/nav";
import { WA_TEXT, wa } from "@/data/site";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz", "wdth"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "LEVCEL.corp: jasa digitalisasi untuk usaha dan masyarakat", template: "%s | LEVCEL.corp" },
  description: "LEVCEL.corp menyiapkan kebutuhan digital: website, pemesanan online, aplikasi kasir, dan chatbot WhatsApp. Dikerjakan bertahap sesuai anggaran.",
  openGraph: { type: "website", locale: "id_ID", siteName: "LEVCEL.corp" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf2f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1a1d" },
  ],
};

function Footer() {
  return (
    <footer className="wrap foot">
      <div className="foot__panel panel bracketed">
        <div className="foot__brand">
          <Logo />
          <p className="muted">Jasa digitalisasi dan penyiapan kebutuhan digital untuk masyarakat dan pelaku usaha.</p>
        </div>
        <nav className="foot__nav" aria-label="Pintasan">
          <Link href="/">Beranda</Link>
          <Link href="/#layanan">Layanan</Link>
          <Link href="/harga">Harga dan promo</Link>
          <Link href="/proyek">Proyek</Link>
        </nav>
        <div>
          <p className="mono muted">WhatsApp</p>
          <a className="link" href={wa("Halo LEVCEL, saya ingin konsultasi.")} target="_blank" rel="noopener noreferrer">
            {WA_TEXT}
          </a>
        </div>
      </div>
      <p className="mono foot__copy">© 2026 LEVCEL.corp</p>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Lewati ke konten
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
