import type { Metadata } from "next";
import { Cta, Promos } from "@/components/blocks";
import { faqs, levels, rupiah, services, wa } from "@/data/site";

export const metadata: Metadata = {
  title: "Harga dan promo",
  description: "Tiga level layanan digital LEVCEL.corp, dari penyiapan dasar Rp 350.000 sampai sistem custom, lengkap dengan promo yang sedang berjalan.",
};

export default function Harga() {
  return (
    <>
      <header className="wrap pagehead">
        <h1 className="title-1">Harga dan promo</h1>
        <p className="lead">Tiga level, enam layanan. Mulai dari yang kecil, naik saat usaha siap. Semua angka adalah harga awal dan bisa disesuaikan dengan anggaran Anda.</p>
      </header>

      <section className="wrap section--tight" aria-label="Promo">
        <Promos />
      </section>

      <section className="wrap section--tight" aria-label="Harga per level">
        <div className="levels panel bracketed">
          {levels.map((l, i) => {
            const n = i + 1;
            return (
              <div className="level" key={l.name}>
                <div className="vial" aria-hidden="true">
                  {[1, 2, 3].map((k) => (
                    <i key={k} className={k <= n ? "on" : undefined} />
                  ))}
                </div>
                <p className="mono muted">Level {n}</p>
                <h2 className="title-2">{l.name}</h2>
                <p className="muted">{l.tagline}</p>
                {services
                  .filter((s) => s.level === n)
                  .map((s) => (
                    <section className="svc" id={s.id} key={s.id}>
                      <h3 className="svc__name">{s.name}</h3>
                      <p className="svc__price">
                        <span className="amt">
                          {s.from && <small>mulai</small>}
                          {rupiah(s.price)}
                        </span>
                        <span className="mono muted">{s.days}</span>
                      </p>
                      {s.note && <p className="svc__note muted">{s.note}</p>}
                      <p className="muted">{s.blurb}</p>
                      <ul className="incl">
                        {s.includes.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                <a className="btn btn--glass" href={wa(`Halo LEVCEL, saya tertarik Level ${n} (${l.name}). Mohon info detailnya.`)} target="_blank" rel="noopener noreferrer">
                  Tanya Level {n}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className="wrap section split">
        <div className="split__head">
          <h2 className="title-2">Pertanyaan yang sering muncul</h2>
          <p className="lead">Belum ada jawabannya di sini? Tanyakan lewat WhatsApp.</p>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Cta message="Halo LEVCEL, saya sudah melihat daftar harga dan ingin konsultasi." />
    </>
  );
}
