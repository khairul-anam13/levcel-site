"use client";

import { useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectList() {
  const [cat, setCat] = useState<string>("Semua");
  const list = cat === "Semua" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <div className="seg" role="group" aria-label="Saring proyek menurut kategori">
        {["Semua", ...categories].map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="pgrid pgrid--2">
        {list.map((p, i) => (
          <ProjectCard key={p.slug} p={p} priority={i < 2} sizes="(min-width: 1160px) 548px, (min-width: 720px) 48vw, 92vw" />
        ))}
      </div>
    </>
  );
}
