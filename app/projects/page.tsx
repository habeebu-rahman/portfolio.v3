import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Layers3 } from 'lucide-react';
import { projects } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function ProjectsPage() {
  return (
    <div className="section page-shell mx-auto">
      <Reveal>
        <Link href="/#projects" className="back-link mb-10 inline-flex items-center gap-2">
          <ArrowLeft size={15} className="shrink-0" />
          <span>Back to home</span>
        </Link>
        <div className="section-heading">
          <span className="section-index">SELECTED WORK</span>
          <h1>
            All projects<span className="text-gradient">.</span>
          </h1>
          <p className="section-intro">
            A closer look at the apps I’ve worked on, the tech behind them and the features I’m
            quietly proud of.
          </p>
        </div>
      </Reveal>

      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
          <Layers3 size={16} />
          <span>Project collection</span>
        </div>

        <span className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]">
          {projects.length} projects
        </span>
      </div>

      <div className="project-grid grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.slug} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              className="project-card project-card-compact group flex h-full flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`project-art ${project.accent} relative overflow-hidden`}>
                <strong>{project.name}</strong>
                <span className="absolute bottom-4 right-4 text-xs opacity-60">{project.type}</span>
              </div>

              <div className="project-card-content flex flex-1 flex-col">
                <span className="section-index">
                  {project.type} · {project.year}
                </span>

                <h3>{project.name}</h3>

                <p className="project-summary">{project.summary}</p>
                <p className="project-quip">{project.quip}</p>

                <div className="project-card-foot mt-auto flex items-center justify-between">
                  <span>Explore case study</span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 border-t border-[var(--color-line)] pt-8 text-center">
        <p className="text-sm text-[var(--color-muted)]">
          Like what you see? I answer emails faster than my build pipeline.
        </p>
        <Link href="/#contact" className="button button-secondary mt-4 inline-flex">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
