import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pagehead">
      <p className="mono muted">404</p>
      <h1 className="title-1">Halaman tidak ditemukan.</h1>
      <p className="lead">Alamatnya mungkin salah ketik atau halamannya sudah dipindah. Mulai lagi dari beranda.</p>
      <Link className="btn btn--amber" href="/" style={{ justifySelf: "start" }}>
        Kembali ke beranda
      </Link>
    </section>
  );
}
