import Image from "next/image";
import { wa } from "@/data/site";
import type { Project } from "@/data/projects";

export function ProjectCard({ p, priority = false, sizes }: { p: Project; priority?: boolean; sizes: string }) {
  return (
    <article className="pcard glass">
      <div className="pcard__shot bracketed">
        <Image src={p.shot} alt={`Tampilan ${p.name}`} fill sizes={sizes} placeholder="blur" priority={priority} />
      </div>
      <div className="pcard__body">
        <div className="pcard__head">
          <h3 className="title-3">{p.name}</h3>
          <p className="pcard__for">Untuk {p.audience}</p>
        </div>
        <p className="muted">{p.summary}</p>
        <ul className="incl incl--cols">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="pcard__foot">
          <span className={`tag ${p.url ? "tag--green" : "tag--amber"}`}>
            <i />
            {p.url ? "Sudah tayang" : "Ada demo"}
          </span>
          {p.url ? (
            <a className="btn btn--amber btn--sm" href={p.url} target="_blank" rel="noopener noreferrer">
              Buka {new URL(p.url).host}
            </a>
          ) : (
            <a className="btn btn--glass btn--sm" href={wa(`Halo LEVCEL, saya ingin melihat demo ${p.name}.`)} target="_blank" rel="noopener noreferrer">
              Minta demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
