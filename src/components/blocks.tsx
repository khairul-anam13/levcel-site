import Link from "next/link";
import { WA_TEXT, levels, promos, rupiah, services, wa, type IconName } from "@/data/site";

const paths: Record<IconName, string> = {
  pin: "M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 1 1 13 0c0 5.3-6.5 11-6.5 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.5 12h17M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z",
  bag: "M5.5 8.5h13l-1 11.5h-11l-1-11.5ZM9 8.5V7a3 3 0 0 1 6 0v1.5",
  chat: "M4.5 5.5h15v10.5h-8l-4.5 3.5V16H4.5V5.5Z",
  receipt: "M6.5 3.5h11v17l-2.75-1.7L12 20.5l-2.75-1.7L6.5 20.5v-17ZM9.5 8.5h5M9.5 12h5",
  cube: "M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7L12 3.5ZM12 12l7.5-4.3M12 12v8.5M12 12 4.5 7.7",
  home: "M4.5 10.5 12 4l7.5 6.5V20h-5v-5.5h-5V20h-5v-9.5Z",
  tag: "M3.5 4.5h8l9 9-7 7-9-9v-7ZM8 8.5h.01",
  grid: "M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z",
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <svg width="28" height="28" viewBox="-16 -16 32 32" aria-hidden="true">
        <circle r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity=".45" />
        <circle cx="3.4" cy="2.4" r="4.8" fill="var(--amber)" />
      </svg>
      <span className="logo__word">
        LEVCEL<span className="logo__tld">.corp</span>
      </span>
    </span>
  );
}

export function ServiceList() {
  return (
    <>
      <ul className="list glass">
        {services.map((s) => (
          <li key={s.id}>
            <Link className="row" href={`/harga#${s.id}`}>
              <span className="row__icon" data-level={s.level}>
                <Icon name={s.icon} size={20} />
              </span>
              <span className="row__main">
                <span className="row__title">{s.name}</span>
                <span className="row__sub">{s.blurb}</span>
              </span>
              <span className="row__price">
                {s.from && <small>mulai</small>}
                {rupiah(s.price)}
              </span>
              <span className="chev" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="legend mono" aria-label="Arti warna ikon">
        {levels.map((l, i) => (
          <span key={l.name} data-level={i + 1}>
            <i />
            Level {i + 1} {l.name}
          </span>
        ))}
      </p>
    </>
  );
}

export function Promos() {
  return (
    <div className="promos">
      {promos.map((p) => (
        <article className="banner" key={p.title}>
          <i className="banner__dot" aria-hidden="true" />
          <div>
            <h3 className="banner__title">{p.title}</h3>
            <p className="banner__body">{p.body}</p>
            <p className="banner__foot">
              <span className="mono">Berlaku sampai {p.until}</span>
              <a className="link" href={wa(`Halo LEVCEL, saya tertarik promo "${p.title}".`)} target="_blank" rel="noopener noreferrer">
                Ambil promo ini
              </a>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Cta({ message = "Halo LEVCEL, saya ingin konsultasi." }: { message?: string }) {
  return (
    <section className="wrap section">
      <div className="cta panel bracketed">
        <h2 className="title-2">Mulai dari yang paling kecil.</h2>
        <p className="lead">
          Ceritakan usaha dan anggaran Anda lewat WhatsApp. Kami usulkan langkah pertama yang masuk akal, lalu naik level saat usaha siap.
        </p>
        <div className="cta__row">
          <a className="btn btn--amber" href={wa(message)} target="_blank" rel="noopener noreferrer">
            Konsultasi lewat WhatsApp
          </a>
          <span className="mono">{WA_TEXT}</span>
        </div>
      </div>
    </section>
  );
}
