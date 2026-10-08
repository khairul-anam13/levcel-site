import Link from "next/link";
import { Cta, Promos, ServiceList } from "@/components/blocks";
import { LevelCheck } from "@/components/level-check";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { rupiah, services, steps, wa } from "@/data/site";

export default function Home() {
  const lowest = Math.min(...services.map((s) => s.price));

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 className="display">Usaha Anda naik level digital. Kami yang menyiapkan.</h1>
            <p className="lead">
              LEVCEL.corp menyiapkan kebutuhan digital masyarakat dan pelaku usaha: dari website dan pemesanan online, aplikasi kasir, sampai chatbot WhatsApp. Dikerjakan bertahap, mulai dari {rupiah(lowest)}.
            </p>
            <div className="hero__cta">
              <a className="btn btn--amber" href={wa("Halo LEVCEL, saya ingin konsultasi.")} target="_blank" rel="noopener noreferrer">
                Konsultasi lewat WhatsApp
              </a>
              <Link className="btn btn--glass" href="/proyek">
                Lihat proyek kami
              </Link>
            </div>
            <p className="mono hero__meta">{projects.length} proyek di portofolio</p>
          </div>
          <LevelCheck />
        </div>
      </section>

      <section className="wrap section--tight" id="promo">
        <div className="sechead">
          <div>
            <h2 className="title-2">Promo yang sedang berjalan</h2>
          </div>
          <Link className="link" href="/harga">
            Semua harga dan promo
          </Link>
        </div>
        <div style={{ marginTop: 24 }}>
          <Promos />
        </div>
      </section>

      <section className="wrap section split" id="layanan">
        <div className="split__head">
          <h2 className="title-2">Mulai dari yang paling dasar, naik saat siap.</h2>
          <p className="lead">Enam layanan dalam tiga level. Harga di samping adalah harga awal; angka akhir kami hitung setelah tahu kebutuhan Anda.</p>
        </div>
        <div>
          <ServiceList />
        </div>
      </section>

      <section className="wrap section">
        <div className="sechead">
          <div>
            <h2 className="title-2">Yang sudah kami kerjakan</h2>
            <p className="lead">Dari kedai minuman sampai Karang Taruna desa. Minta demo untuk melihat langsung cara kerjanya.</p>
          </div>
          <Link className="btn btn--glass btn--sm" href="/proyek">
            Semua proyek
          </Link>
        </div>
        <div className="pgrid">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={p.slug} p={p} priority={i === 0} sizes="(min-width: 1160px) 356px, (min-width: 640px) 48vw, 92vw" />
            ))}
        </div>
      </section>

      <section className="wrap section">
        <h2 className="title-2">Dari obrolan sampai jalan</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="mono step__n">{i + 1}</span>
              <h3 className="title-3">{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Cta />
    </>
  );
}
