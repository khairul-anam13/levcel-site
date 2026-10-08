# LEVCEL.corp

Situs bisnis dan portofolio LEVCEL.corp. Next.js 16 (App Router) + pnpm, tanpa library UI atau CSS tambahan. Desain: oXe (angka, garis, harga) dipadu iOS (kaca, kapsul, navigasi).

```bash
pnpm install
pnpm dev      # http://localhost:3500
pnpm build && pnpm start
```

Port **3500**, bukan 3000: `localhost:3000` di Chrome Anda memegang service worker PWA Perdana yang menimpa halaman apa pun di port itu. Kalau ingin memakai 3000 lagi: DevTools, Application, Service workers, Unregister.

## Yang diedit

| Mau ubah | File |
|---|---|
| Nomor WhatsApp, harga, promo, FAQ, langkah kerja, isi alat ukur level | `src/data/site.ts` |
| Daftar proyek, deskripsi, tautan situs (`url`), kategori | `src/data/projects.ts` |
| Gambar pratinjau proyek | `src/data/shots/<slug>.webp` (rasio 16:10, mis. 1440x900) |
| Warna, font, bentuk | `src/app/globals.css` (token di bagian atas) |

Harga Chatbot, Custom, dan add-on website mengikuti situs PONCO-X. Harga lain dan kedua promo adalah contoh awal: cek sebelum tayang.

Isi proyek ditulis untuk pengunjung awam: `audience` (untuk siapa), `summary` (apa yang didapat), `features` (3 sampai 4 manfaat singkat). Jangan menaruh nama teknologi di sini.

Proyek tanpa `url` tampil berstatus **Ada demo** dengan tombol "Minta demo" ke WhatsApp. Isi `url` dan kartunya otomatis jadi **Sudah tayang** dengan tombol buka situs.
