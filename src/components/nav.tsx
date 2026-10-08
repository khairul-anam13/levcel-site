"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { wa, type IconName } from "@/data/site";
import { Icon, Logo } from "./blocks";

const chat = wa("Halo LEVCEL, saya ingin konsultasi.");

const top = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/proyek", label: "Proyek" },
];

const dock: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Beranda", icon: "home" },
  { href: "/harga", label: "Harga", icon: "tag" },
  { href: "/proyek", label: "Proyek", icon: "grid" },
];

export function Nav() {
  const path = usePathname();
  const current = (href: string) => (path === href ? "page" : undefined);

  return (
    <>
      <header className="top">
        <div className="top__bar">
          <Link href="/" className="top__brand" aria-label="LEVCEL.corp, ke beranda">
            <Logo />
          </Link>
          <nav className="top__links" aria-label="Utama">
            {top.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a className="btn btn--amber btn--sm top__cta" href={chat} target="_blank" rel="noopener noreferrer">
            Chat WhatsApp
          </a>
        </div>
      </header>

      <nav className="dock" aria-label="Navigasi bawah">
        {dock.map((l) => (
          <Link key={l.href} href={l.href} aria-current={current(l.href)}>
            <Icon name={l.icon} size={24} />
            {l.label}
          </Link>
        ))}
        <a href={chat} target="_blank" rel="noopener noreferrer">
          <Icon name="chat" size={24} />
          Chat
        </a>
      </nav>
    </>
  );
}
