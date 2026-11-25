import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectImageStack from '@/components/ProjectImageStack';
import { ArrowLeft, ArrowUpRight, Check, Code2, FolderGit2, Images, Layers3 } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { projects, site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, defaultOgImage, pageMetadata, personId } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: 'Project not found' };

  const cover = project.screenshots?.[0];

  return pageMetadata({
    title: `${project.name} — ${project.type}`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [project.name, `${project.name} project`, ...project.stack],
    image: cover ? { url: cover.src, alt: `${project.name}: ${cover.title}` } : defaultOgImage,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const screenshots = project.screenshots || [];

  const accentStyles: Record<string, string> = {
    mint: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    gold: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    blue: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  };

  const accent = accentStyles[project.accent] || accentStyles.mint;

  return (
    <div className="min-h-screen px-4 pb-24 pt-10 sm:px-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.name,
          description: project.summary,
          url: `${site.url}/projects/${project.slug}`,
          image: `${site.url}${screenshots[0]?.src ?? defaultOgImage.url}`,
          dateCreated: project.year,
          keywords: project.stack.join(', '),
          inLanguage: 'en-IN',
          creator: { '@id': personId },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />
      <div className="mx-auto max-w-6xl">
        {/* Back navigation */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={16} />
          Back to the portfolio
        </Link>

        {/* Repository header */}
        <Reveal>
          <section className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-line)] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <FolderGit2 size={17} />
                <span>PROJECT REPOSITORY</span>
                <span className="text-[var(--color-dim)]">/</span>
                <span>{project.slug}</span>
              </div>

              <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]">
                Case study
              </span>
            </div>

            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full border px-3 py-1 text-xs ${accent}`}>
                  {project.type}
                </span>
                <span className="text-xs text-[var(--color-dim)]">{project.year}</span>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.name}
                <span className="text-gradient">.</span>
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {project.summary}
              </p>
              <p className="project-quip mt-3">{project.quip}</p>

              <div className="mt-7 flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-3 py-2">
                  <Code2 size={15} />
                  Full-stack project
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-3 py-2">
                  <Layers3 size={15} />
                  {project.stack.length} technologies
                </span>
              </div>
            </div>

            {/* Repository navigation */}
            <nav className="flex gap-6 overflow-x-auto border-t border-[var(--color-line)] px-5 sm:px-7">
              {[
                ['Overview', '#overview'],
                ['Screenshots', '#screenshots'],
                ['Technologies', '#technologies'],
                ['Contribution', '#contribution'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="shrink-0 border-b-2 border-transparent py-4 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </section>
        </Reveal>

        {/* Main content and sidebar */}
        <div className="mt-7 grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Main column */}
          <div className="min-w-0 space-y-7">
            {/* Overview */}
            <Reveal>
              <section
                id="overview"
                className="scroll-mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--color-surface-raised)] text-[var(--color-accent)]">
                    <FolderGit2 size={18} />
                  </span>
                  <h2 className="text-lg font-semibold">Project overview</h2>
                </div>

                <p className="text-sm leading-8 text-[var(--color-muted)]">{project.summary}</p>
              </section>
            </Reveal>

            {/* Screenshots */}

            <Reveal>
              <section
                id="screenshots"
                className="scroll-mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Images size={18} className="text-[var(--color-accent)]" />
                      <h2 className="text-lg font-semibold">Project Screenshots</h2>
                    </div>
                    <p className="mt-2 text-xs text-[var(--color-muted)]">
                      A closer look at the application interface.
                    </p>
                  </div>

                  <span className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]">
                    {screenshots.length} images
                  </span>
                </div>

                <ProjectImageStack images={screenshots} />
              </section>
            </Reveal>

            {/* Contribution */}
            <Reveal>
              <section
                id="contribution"
                className="scroll-mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--color-surface-raised)] text-[var(--color-accent)]">
                    <Check size={18} />
                  </span>
                  <h2 className="text-lg font-semibold">My contribution</h2>
                </div>

                <p className="text-sm leading-8 text-[var(--color-muted)]">
                  {project.contribution}
                </p>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            {/* About */}
            <Reveal>
              <section className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-sm">
                <h2 className="text-sm font-semibold">About this project</h2>

                <div className="mt-5 space-y-5 text-sm">
                  <div>
                    <p className="mb-1 text-xs text-[var(--color-dim)]">Role</p>
                    <p className="leading-6 text-[var(--color-ink)]">{project.role}</p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-[var(--color-dim)]">Year</p>
                    <p className="text-[var(--color-ink)]">{project.year}</p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-[var(--color-dim)]">Category</p>
                    <p className="text-[var(--color-ink)]">{project.type}</p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Tech stack */}
            <Reveal>
              <section
                id="technologies"
                className="scroll-mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={17} className="text-[var(--color-accent)]" />
                  <h2 className="text-sm font-semibold">Technologies used</h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-3 py-2 text-xs text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Contact */}
            <Reveal>
              <section className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <h2 className="text-sm font-semibold">Interested in my work?</h2>
                <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
                  Got an idea or a problem? Let’s talk. I promise to read the whole message.
                </p>

                <Link
                  href="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-[var(--color-ink)] px-4 py-3 text-sm font-semibold text-[var(--color-canvas)] transition hover:opacity-80"
                >
                  Contact me
                  <ArrowUpRight size={16} />
                </Link>
              </section>
            </Reveal>
          </aside>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-dim)]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 transition hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
          <span>{site.name} · Portfolio</span>
        </div>
      </div>
    </div>
  );
}
