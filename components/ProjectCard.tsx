import {
  ArrowUpRight,
  Recycle,
  Scissors,
  ShoppingBasket,
  Vote,
  type LucideIcon,
} from 'lucide-react';
import type { projects } from '@/lib/site';

type Project = (typeof projects)[number];

const projectVisuals: Record<string, { icon: LucideIcon; eyebrow: string; detail: string }> = {
  qiyammart: {
    icon: ShoppingBasket,
    eyebrow: 'COMMERCE PLATFORM',
    detail: 'Browse · Order · Deliver',
  },
  roopam: { icon: Scissors, eyebrow: 'BOOKING EXPERIENCE', detail: 'Discover · Choose · Book' },
  'waste-management': {
    icon: Recycle,
    eyebrow: 'CIVIC TECHNOLOGY',
    detail: 'Schedule · Collect · Track',
  },
  'digital-voting': { icon: Vote, eyebrow: 'ACADEMIC PROJECT', detail: 'Verify · Vote · Count' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const visual = projectVisuals[project.slug] ?? projectVisuals.qiyammart;
  const ProjectIcon = visual.icon;

  return (
    <article
      className={`project-card ${project.accent} flex h-full min-h-[34rem] flex-col overflow-hidden rounded-xl border border-portfolio-line bg-portfolio-surface p-0 shadow-sm transition duration-300 ease-out hover:-translate-y-1 max-sm:min-h-0`}
    >
      <div
        className="project-card-visual relative flex min-h-52 shrink-0 flex-col justify-between overflow-hidden px-5 py-4 md:min-h-56"
        aria-hidden="true"
      >
        <div className="project-card-visual-grid" />
        <div className="project-card-visual-meta relative z-10 flex items-center justify-between gap-3">
          <span>SELECTED WORK / {project.number}</span>
          <span>{project.year}</span>
        </div>
        <div className="project-card-visual-art relative z-10 flex flex-1 flex-col items-center justify-center gap-3">
          <span className="project-card-orbit project-card-orbit--one" />
          <span className="project-card-orbit project-card-orbit--two" />
          <ProjectIcon className="project-card-main-icon" strokeWidth={1.25} />
          <span className="project-card-visual-detail">{visual.detail}</span>
        </div>
        <span className="project-card-visual-index">{project.number}</span>
      </div>

      <div className="project-card-content flex flex-1 flex-col p-5 md:p-6">
        <div className="project-card-heading mt-0 flex min-h-[4.5rem] items-start justify-between gap-4">
          <div>
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
          </div>
          <span className="project-card-arrow" aria-hidden="true">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <p className="project-summary line-clamp-3 min-h-[4.25rem]">{project.summary}</p>

        <div className="contribution mt-2 min-h-[6rem]">
          <span className="aside-label">MY CONTRIBUTION</span>
          <p>{project.contribution}</p>
        </div>

        <div className="project-card-bottom mt-auto flex flex-col">
          <div className="tags flex flex-wrap gap-2" aria-label="Technologies used">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-card-foot mt-4 flex items-center justify-between border-t border-portfolio-line pt-3">
            <span>{project.role}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
