"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { checks, levels, rupiah, services, wa } from "@/data/site";

// Alat ukur hero: setiap toggle yang dinyalakan menggeser gelembung waterpas ke tengah.
// Level = 2 item per level, jadi level = ceil(jumlah item yang menyala / 2).
export function LevelCheck() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const missing = checks.filter((c) => !on[c.id]);
  const count = checks.length - missing.length;
  const level = Math.ceil(count / 2);
  const next = missing[0];
  const svc = next && services.find((s) => s.id === next.service);
  const tilt = { "--dx": missing.length * 9, "--dy": missing.length * 6 } as CSSProperties;
  const message = next
    ? `Halo LEVCEL, saya ingin konsultasi. Yang belum ada di usaha saya: ${missing.map((c) => c.label.toLowerCase()).join("; ")}. Mohon rekomendasi paketnya.`
    : "Halo LEVCEL, usaha saya sudah punya dasar digital. Saya ingin membahas sistem custom.";

  return (
    <div className="instrument">
      <div className="rings" aria-hidden="true" />
      <div className="lens glass glass--float">
        <div className="lens__head">
          <svg className="face" viewBox="-100 -100 200 200" style={tilt} aria-hidden="true">
            <circle className="f-line" r="96" />
            <circle className="f-ticks" r="90" />
            <circle className="f-line f-line--soft" r="62" />
            <circle className={`f-core${missing.length === 0 ? " is-level" : ""}`} r="30" />
            <path className="f-line" d="M-96 0H96M0-96V96" />
            <g className="bubble">
              <g className="bubble__wobble">
                <circle className="f-bubble" r="19" />
                <circle className="f-gloss" cx="-6" cy="-7" r="5.5" />
              </g>
            </g>
          </svg>
          <div className="readout">
            <h2 className="title-3">Cek level digital usaha Anda</h2>
            <p className="stat" aria-live="polite">
              {level}
              <span> / 3</span>
              <b>{level ? levels[level - 1].name : "Belum mulai"}</b>
            </p>
            <p className="muted readout__count">
              {count} dari {checks.length} sudah siap
            </p>
          </div>
        </div>

        <p className="lens__hint">Nyalakan yang sudah Anda punya</p>
        <ul className="checks">
          {checks.map((c, i) => (
            <li key={c.id}>
              <label>
                <span className="mono lv" data-level={Math.floor(i / 2) + 1}>
                  L{Math.floor(i / 2) + 1}
                </span>
                <span className="checks__text">{c.label}</span>
                <input
                  type="checkbox"
                  role="switch"
                  className="switch"
                  checked={!!on[c.id]}
                  onChange={() => setOn((s) => ({ ...s, [c.id]: !s[c.id] }))}
                />
              </label>
            </li>
          ))}
        </ul>

        <div className="lens__next">
          {svc ? (
            <>
              <p className="mono muted">Langkah berikutnya</p>
              <p className="lens__svc">
                <span>{svc.name}</span>
                <span className="mono">
                  {svc.from ? "mulai " : ""}
                  {rupiah(svc.price)}
                </span>
              </p>
            </>
          ) : (
            <p className="lens__svc">
              <span>Semua dasar sudah ada. Mau sistem yang lebih khusus?</span>
            </p>
          )}
          <div className="lens__actions">
            <a className="btn btn--amber btn--sm" href={wa(message)} target="_blank" rel="noopener noreferrer">
              Tanya paket ini
            </a>
            <Link className="link" href={svc ? `/harga#${svc.id}` : "/harga"}>
              Lihat rincian harga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
