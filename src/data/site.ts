// Semua teks bisnis ada di sini: nomor, harga, promo, FAQ. Komponen tidak perlu disentuh.
// Harga Chatbot, Custom, dan paket Pro mengikuti situs PONCO-X. Harga lain = perkiraan awal, cek ulang sebelum tayang.

export const WA = "6281393242084";
export const WA_TEXT = "0813-9324-2084";

export const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
export const rupiah = (n: number) => "Rp " + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export type IconName = "pin" | "globe" | "bag" | "chat" | "receipt" | "cube" | "home" | "tag" | "grid";

export const levels = [
  { name: "Hadir", tagline: "Usaha mudah ditemukan dan dihubungi pelanggan." },
  { name: "Otomatis", tagline: "Pesanan dan chat terlayani tanpa Anda menjaga HP sepanjang hari." },
  { name: "Sistem", tagline: "Penjualan, stok, dan laporan tercatat sendiri." },
] as const;

export type Service = {
  id: string;
  level: 1 | 2 | 3;
  icon: IconName;
  name: string;
  blurb: string;
  price: number;
  from: boolean; // true = harga "mulai"
  note?: string;
  days: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "penyiapan",
    level: 1,
    icon: "pin",
    name: "Penyiapan digital dasar",
    blurb: "Google Maps, WhatsApp Business, email, dan alamat website untuk usaha atau pribadi.",
    price: 350_000,
    from: false,
    days: "1–2 hari",
    includes: ["Profil usaha di Google Maps", "WhatsApp Business dengan katalog dan jam buka", "Email dan alamat website atas nama Anda"],
  },
  {
    id: "website",
    level: 1,
    icon: "globe",
    name: "Website usaha",
    blurb: "Satu halaman profil dengan tombol WhatsApp, nyaman dibuka di HP.",
    price: 750_000,
    from: false,
    days: "3–5 hari",
    includes: ["Profil, layanan, dan kontak", "Tombol WhatsApp dan peta lokasi", "Terpasang di alamat website Anda"],
  },
  {
    id: "pemesanan",
    level: 2,
    icon: "bag",
    name: "Katalog dan pemesanan online",
    blurb: "Pelanggan memilih, memesan, dan membayar dari HP, tanpa antre.",
    price: 3_000_000,
    from: true,
    days: "2–3 minggu",
    includes: ["Katalog dengan foto dan pilihan (ukuran, rasa, tambahan)", "Pembayaran online lewat HP", "Layar antrean untuk dapur atau staf", "Laporan penjualan"],
  },
  {
    id: "chatbot",
    level: 2,
    icon: "chat",
    name: "Chatbot WhatsApp AI",
    blurb: "Membalas pelanggan 24 jam dan hafal nama serta riwayat obrolan.",
    price: 1_500_000,
    from: true,
    note: "Starter Rp 1.500.000. Pro AI Rp 3.500.000 + Rp 100.000 per bulan.",
    days: "2–5 hari kerja",
    includes: ["Starter: balasan otomatis lewat menu untuk katalog, promo, jam buka, dan pertanyaan umum", "Pro: balasan AI yang natural dan mengingat pelanggan", "Chat yang masuk bersamaan dijawab berurutan", "Admin dikabari bila pelanggan ingin bicara dengan orang"],
  },
  {
    id: "kasir",
    level: 3,
    icon: "receipt",
    name: "Kasir dan stok",
    blurb: "Penjualan, stok, dan laporan harian dalam satu aplikasi.",
    price: 4_000_000,
    from: true,
    days: "2–4 minggu",
    includes: ["Kasir, struk, dan riwayat transaksi", "Stok dengan peringatan hampir habis", "Laporan harian dan bulanan", "Akun kasir dan admin terpisah"],
  },
  {
    id: "custom",
    level: 3,
    icon: "cube",
    name: "Sistem custom",
    blurb: "Aplikasi atau otomasi yang mengikuti alur kerja usaha Anda.",
    price: 6_000_000,
    from: true,
    days: "sesuai kebutuhan",
    includes: ["Pembayaran yang terhubung otomatis", "Ringkasan angka usaha dan laporan", "Banyak admin atau banyak cabang", "Kebutuhan khusus lainnya"],
  },
];

const price = (id: string) => services.find((s) => s.id === id)!.price;

// Dipakai alat ukur di hero. Urutan = urutan langkah berikutnya yang disarankan; dua item per level.
export const checks = [
  { id: "maps", label: "Muncul di Google Maps dan punya WhatsApp Business", service: "penyiapan" },
  { id: "web", label: "Punya website atau halaman usaha", service: "website" },
  { id: "order", label: "Pelanggan bisa memesan lewat internet", service: "pemesanan" },
  { id: "bot", label: "Chat WhatsApp terjawab otomatis", service: "chatbot" },
  { id: "pos", label: "Penjualan dan stok tercatat di aplikasi", service: "kasir" },
  { id: "report", label: "Laporan tersusun sendiri, tanpa rekap manual", service: "custom" },
] as const;

const paketHadir = price("penyiapan") + price("website");

export const promos = [
  {
    title: "Paket Hadir untuk usaha baru",
    body: `Penyiapan digital dasar dan website usaha ${rupiah(paketHadir - 250_000)}, dari harga normal ${rupiah(paketHadir)}.`,
    until: "31 Desember 2026",
  },
  {
    title: "Chatbot Pro, 3 bulan pertama gratis",
    body: "Biaya bulanan Rp 100.000 tidak dikenakan selama 3 bulan pertama. Hemat Rp 300.000.",
    until: "31 Desember 2026",
  },
];

export const steps = [
  { title: "Konsultasi", text: "Ceritakan usaha dan anggaran Anda lewat WhatsApp. Kami balas dengan pertanyaan seperlunya." },
  { title: "Penawaran", text: "Anda menerima rincian fitur, biaya, dan jadwal. Setuju, bayar DP, kami mulai." },
  { title: "Pengerjaan", text: "Hasil sementara bisa Anda buka lewat tautan pratinjau. Revisi dilakukan di tahap ini." },
  { title: "Serah terima", text: "Akun dan akses menjadi milik Anda. Kami dampingi sampai Anda dan tim lancar memakainya." },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaannya?",
    a: "Penyiapan digital dasar 1–2 hari, website 3–5 hari, chatbot 2–5 hari kerja, pemesanan online dan kasir 2–4 minggu. Waktu bergantung pada kelengkapan bahan dari Anda, seperti logo, foto, dan daftar harga.",
  },
  {
    q: "Apakah harga sudah termasuk alamat website dan hosting?",
    a: "Belum. Alamat website (domain) dan tempat penyimpanan website (hosting) dibayar sesuai tarif penyedia. Kami bantu memilih paket yang pas dan memasangnya.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "DP 50% saat penawaran disetujui, pelunasan saat hasil diserahkan. Pembayaran lewat transfer bank.",
  },
  {
    q: "Boleh mulai dari paket kecil dulu?",
    a: "Boleh. Itulah gunanya level: mulai dari Level 1, naik saat usaha siap. Hasil kerja sebelumnya tetap dipakai, tidak dibuat ulang.",
  },
  {
    q: "Apakah ada biaya bulanan?",
    a: "Hanya untuk Chatbot Pro: Rp 100.000 per bulan untuk biaya pemakaian AI dan perawatan. Layanan lain tanpa biaya bulanan, perawatan tambahan bersifat opsional.",
  },
  {
    q: "Bagaimana soal revisi dan garansi?",
    a: "Dua kali revisi di tahap pratinjau sudah termasuk. Perbaikan kesalahan sistem gratis selama 30 hari setelah serah terima.",
  },
  {
    q: "Kebutuhan saya tidak ada di daftar.",
    a: `Ceritakan lewat WhatsApp. Sistem custom mulai ${rupiah(price("custom"))}, harga akhir ditetapkan setelah kebutuhan jelas.`,
  },
];
