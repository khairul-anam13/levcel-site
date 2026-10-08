import type { StaticImageData } from "next/image";
import antreIn from "./shots/antre-in.webp";
import poncoX from "./shots/ponco-x.webp";
import kasirSkincare from "./shots/kasir-skincare.webp";
import perdana from "./shots/perdana.webp";
import muria from "./shots/muria.webp";
import pricelist from "./shots/pricelist.webp";

// Tulis untuk pengunjung awam: apa yang didapat dan untuk siapa. Tanpa nama teknologi.
export const categories = ["Website", "Toko dan kasir", "Chatbot WhatsApp", "Aplikasi khusus"] as const;

export type Project = {
  slug: string;
  name: string;
  category: (typeof categories)[number];
  /** Untuk siapa. Tampil sebagai "Untuk ...". */
  audience: string;
  /** Apa yang didapat pemakai, dalam bahasa sehari-hari. */
  summary: string;
  /** 3 sampai 4 manfaat singkat. */
  features: string[];
  shot: StaticImageData;
  /** Isi dengan alamat situs bila sudah tayang: kartu otomatis berstatus "Sudah tayang" dan tombolnya membuka situs. */
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "antre-in",
    name: "Antre-in",
    category: "Toko dan kasir",
    audience: "kedai minuman dan warung",
    summary: "Pelanggan memesan dan membayar dari HP, lalu tinggal mengambil pesanan yang sudah siap. Tidak ada lagi antre panjang di kasir. Dapur melihat pesanan masuk urut di layar.",
    features: ["Pesan dan bayar dari HP", "Pilih jam ambil", "Pantau status pesanan", "Laporan penjualan"],
    shot: antreIn,
    featured: true,
  },
  {
    slug: "ponco-x",
    name: "PONCO-X",
    category: "Chatbot WhatsApp",
    audience: "usaha yang banyak ditanya lewat WhatsApp",
    summary: "Asisten yang membalas chat pelanggan otomatis, 24 jam, dengan bahasa sehari-hari. Jawabannya mengikuti harga dan jam buka usaha Anda, dan admin dikabari saat pelanggan ingin bicara dengan orang.",
    features: ["Membalas 24 jam", "Hafal nama pelanggan", "Chat ramai tetap terlayani", "Admin dikabari bila perlu"],
    shot: poncoX,
    featured: true,
  },
  {
    slug: "kasir-skincare",
    name: "Kasir Skincare",
    category: "Toko dan kasir",
    audience: "toko skincare dan kecantikan",
    summary: "Mencatat penjualan dan stok sekaligus. Setiap produk punya tanggal kedaluwarsa: yang paling cepat habis masa berlakunya dijual lebih dulu, dan yang sudah lewat tidak bisa terjual. Versi serupa bisa disesuaikan untuk jenis usaha lain.",
    features: ["Kasir dan struk", "Pantau tanggal kedaluwarsa", "Stok per ukuran dan shade", "Scan barcode"],
    shot: kasirSkincare,
    featured: true,
  },
  {
    slug: "perdana",
    name: "Perdana",
    category: "Aplikasi khusus",
    audience: "Karang Taruna dan organisasi desa",
    summary: "Mencatat uang kas, data anggota, kegiatan, dan absensi dengan laporan yang terbuka untuk anggota. Tetap bisa dipakai tanpa sinyal, data terkirim sendiri begitu internet kembali.",
    features: ["Kas yang transparan", "Data anggota", "Absensi kegiatan", "Jalan tanpa sinyal"],
    shot: perdana,
  },
  {
    slug: "muria",
    name: "CV Muria Struktura Teknik",
    category: "Website",
    audience: "perusahaan jasa perbaikan beton",
    summary: "Situs profil perusahaan di Gresik. Calon klien langsung paham cara kerja dan layanannya, lalu bisa meminta inspeksi lewat satu tombol.",
    features: ["Profil dan layanan", "Cara kerja", "Lokasi kantor", "Tombol minta inspeksi"],
    shot: muria,
  },
  {
    slug: "pricelist",
    name: "Pricelist Kaos Grosir",
    category: "Website",
    audience: "penjual kaos dan pakaian grosir",
    summary: "Daftar harga yang rapi. Pelanggan memilih jenis kaos dan ukuran, lalu menghitung sendiri total belanjanya sebelum memesan. Harga lengan panjang ikut terhitung otomatis.",
    features: ["Harga per ukuran dan warna", "Pilih lengan panjang", "Hitung belanja sendiri", "Saring jenis kaos"],
    shot: pricelist,
  },
];
