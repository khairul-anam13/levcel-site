import type { Metadata } from "next";
import { Cta } from "@/components/blocks";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Portofolio LEVCEL.corp: pemesanan online, kasir, chatbot WhatsApp, aplikasi khusus, dan website yang sudah dikerjakan.",
};

export default function Proyek() {
  return (
    <>
      <header className="wrap pagehead">
        <h1 className="title-1">Proyek</h1>
        <p className="lead">{projects.length} proyek yang sudah kami kerjakan: pemesanan online, kasir, chatbot WhatsApp, aplikasi khusus, dan website. Pilih kategori untuk menyaring.</p>
      </header>

      <section className="wrap">
        <ProjectList />
      </section>

      <Cta message="Halo LEVCEL, saya ingin membuat proyek seperti di portofolio Anda." />
    </>
  );
}
