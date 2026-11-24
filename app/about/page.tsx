import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  MapPin,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { isConfigured, projects, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Habeebu Rahman K C',
  description:
    'A little about Habeebu Rahman K C, Python Full-Stack Developer from Calicut, Kerala.',
  alternates: { canonical: '/about' },
};

const technologies = [
  'Python',
  'Django',
  'DRF',
  'React',
  'JavaScript',
  'PostgreSQL',
  'Redis',
  'Tailwind CSS',
  'Docker',
  'Git',
  'AWS',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* INTRODUCTION */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8">
        <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {/* <span className="status-dot mr-2 inline-block" /> */}A LITTLE ABOUT ME
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Hi there!
                <br />
                I&apos;m <span className="text-[#A9C5D8]">Habeebu.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                I&apos;m a Python Full-Stack Developer from Calicut, Kerala. I enjoy building web
                applications, solving problems and figuring out why something worked yesterday but
                suddenly doesn&apos;t today.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                I studied Computer Applications at Calicut University and somewhere between the
                assignments I fell for Python, Django, React, databases and building whole
                applications from scratch.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  Calicut, Kerala
                </span>

                <span className="flex items-center gap-2">
                  <Code2 size={14} />
                  Python Full-Stack Developer
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-line)]">
                <Image
                  src="/images/profile/habeebu-photo.webp"
                  alt="Habeebu Rahman K C"
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, 360px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16 h-10 overflow-hidden">
          <div className="absolute inset-x-0 top-5 h-px bg-[var(--color-line)]" />
          <div className="absolute left-[15%] top-0 rounded-full bg-[var(--color-canvas)] px-3 text-xs text-[var(--color-muted)]">
            A HUMAN BEHIND THE CODE
          </div>
        </div>
      </section>

      {/* VISUAL COLLAGE */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="mb-7 flex items-center justify-between">
          <span className="section-index">A FEW THINGS ABOUT ME</span>
          <span className="text-[10px] text-[var(--color-muted)]">PERSONAL FILES / 2026</span>
        </div>

        {/* Important: 1 column mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* JOURNEY */}
          <Reveal className="h-full sm:col-span-2">
            <div className="flex h-full min-h-[210px] flex-col justify-between rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  01 / THE JOURNEY
                </span>
                <GraduationCap size={20} className="text-[var(--color-accent)]" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">From BCA to building applications.</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                  It started with computer applications and slowly turned into a serious soft spot
                  for Python, backend development and full-stack work.
                </p>
                <p className="mt-3 text-xs text-[var(--color-muted)]">
                  Calicut University · Bachelor of Computer Applications
                </p>
              </div>
            </div>
          </Reveal>

          {/* DEVELOPER STATUS */}
          <Reveal className="h-full">
            <div className="relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-xl bg-[#17283B] p-5 text-white">
              <span className="text-[10px] uppercase tracking-widest text-white/60">
                02 / DEVELOPER STATUS
              </span>

              <div>
                <div className="mb-3 text-4xl">🐛</div>
                <h2 className="text-xl font-semibold">
                  Bug found.
                  <br />
                  Confidence lost.
                </h2>
                <p className="mt-3 text-xs leading-5 text-white/65">
                  Fix one bug. Accidentally create three new features.
                </p>
              </div>

              <span className="absolute -right-3 -top-4 text-7xl opacity-10">!</span>
            </div>
          </Reveal>

          {/* LOCATION */}
          <Reveal className="h-full">
            <div className="flex h-full min-h-[210px] flex-col justify-between rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <MapPin size={21} className="text-[var(--color-accent)]" />

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  03 / HOME
                </span>
                <h2 className="mt-2 text-2xl font-semibold">Calicut.</h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">Kerala, India 🇮🇳</p>
              </div>

              <span className="text-xs text-[var(--color-muted)]">Good food. Better ideas.</span>
            </div>
          </Reveal>

          {/* TERMINAL + WORKSPACE */}
          {/*
            This wrapper spans 2 columns on tablet and 4 on desktop.
            Terminal comes first; workspace image gets more width.
          */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:col-span-2 lg:col-span-4 lg:grid-cols-[0.85fr_1.35fr]">
            {/* TERMINAL - LEFT */}
            <Reveal className="order-1 h-full">
              <div className="flex h-full min-h-[230px] flex-col rounded-xl border border-[var(--color-line)] bg-[#101925] p-4 text-[#D8E1ED] sm:min-h-[250px]">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                  <span className="ml-2 truncate text-xs text-white/50">habeebu@developer:~</span>
                </div>

                <div className="mt-4 space-y-2.5 font-mono text-[10px] leading-5 sm:text-xs">
                  <p>
                    <span className="text-[#7DD3A8]">$</span> whoami
                  </p>
                  <p className="break-words pl-3 text-[#A9C5D8]">Python Full-Stack Developer</p>

                  <p>
                    <span className="text-[#7DD3A8]">$</span> current_status
                  </p>
                  <p className="pl-3 text-[#A9C5D8]">Learning something new...</p>

                  <p>
                    <span className="text-[#7DD3A8]">$</span> tea --check
                  </p>
                  <p className="pl-3 text-[#FBBF24]">Warning: Tea required ☕</p>

                  <p>
                    <span className="text-[#7DD3A8]">$</span> fix-production
                  </p>
                  <p className="break-words pl-3 text-[#FCA5A5]">
                    It works on my machine. ¯\_(ツ)_/¯
                  </p>
                </div>

                <div className="mt-auto pt-4 text-[10px] text-white/40">
                  <span className="text-[#7DD3A8]">●</span> Available for new challenges
                </div>
              </div>
            </Reveal>

            {/* WORKSPACE IMAGE - RIGHT, WIDER AND SHORTER */}
            <Reveal className="order-2 h-full">
              <div className="relative h-full min-h-[230px] overflow-hidden rounded-xl border border-[var(--color-line)] sm:min-h-[250px]">
                <Image
                  src="/images/about/habeebu-about-page.webp"
                  alt="Illustration of Habeebu at his workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="text-[10px] tracking-widest text-white/70">
                    04 / MY WORKSPACE
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Where ideas become code.
                  </h2>
                </div>
              </div>
            </Reveal>
          </div>

          {/* PROJECTS */}
          <Reveal className="h-full sm:col-span-2">
            <div className="flex h-full flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  05 / THINGS I HAVE BUILT
                </span>
                <Rocket size={20} className="text-[var(--color-accent)]" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold">A few projects. Many lessons.</h2>

              <div className="mt-5 divide-y divide-[var(--color-line)]">
                {projects.slice(0, 3).map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group flex items-center justify-between gap-3 py-4"
                  >
                    <div>
                      <h3 className="text-sm font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">
                        {project.type} · {project.year}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[var(--color-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>

              <Link href="/projects" className="mt-auto pt-3 text-xs text-[var(--color-accent)]">
                Explore all projects →
              </Link>
            </div>
          </Reveal>

          {/* TOOLKIT */}
          <Reveal className="h-full sm:col-span-2">
            <div className="flex h-full min-h-[250px] flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  06 / MY TOOLKIT
                </span>
                <Code2 size={20} className="text-[var(--color-accent)]" />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold">My favourite tools.</h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                  What I use to turn ideas into working apps, from the pretty frontend to the
                  backend nobody notices until it breaks.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--color-line)] px-3 py-2 text-xs text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-[var(--color-muted)]">
                {/* <span className="status-dot" /> */}
                Always exploring something new
              </div>
            </div>
          </Reveal>

          {/* TEA */}
          <Reveal className="h-full sm:col-span-1 lg:col-span-2">
            <div className="flex h-full min-h-[180px] flex-col justify-between rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <span className="text-2xl">🍵</span>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  07 / IMPORTANT
                </span>

                <h2 className="mt-2 text-xl font-semibold">Tea is a dependency.</h2>

                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  Some people run on coffee. I run on chai and questionable debugging decisions.
                </p>
              </div>
            </div>
          </Reveal>

          {/* PERSONALITY */}
          <Reveal className="h-full sm:col-span-1 lg:col-span-2">
            <div className="flex h-full min-h-[180px] flex-col justify-between rounded-xl bg-[#263448] p-5 text-white">
              <Lightbulb size={22} />

              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  08 / MY PHILOSOPHY
                </span>
                <h2 className="mt-2 text-xl font-semibold">
                  Stay curious.
                  <br />
                  Keep building.
                </h2>
                <p className="mt-2 text-xs leading-5 text-white/65">
                  Still figuring things out. That&apos;s the fun part.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden border-t border-[var(--color-line)] py-12 text-center">
            <span className="text-3xl">👋</span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              That&apos;s a little about me.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
              Got an interesting idea, a tricky project or just want to talk tech? Say hello. I
              reply faster than a Friday evening deployment (which I do not recommend).
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${site.email}?subject=Hello%20Habeebu`}
                className="button button-primary"
              >
                Say hello <ArrowUpRight size={16} />
              </a>

              <Link href="/#projects" className="button button-secondary">
                View my work <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex justify-center gap-6">
              {isConfigured(site.github) && (
                <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github
                    size={18}
                    className="text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  />
                </a>
              )}

              {isConfigured(site.linkedin) && (
                <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin
                    size={18}
                    className="text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  />
                </a>
              )}

              <a href={`mailto:${site.email}`} aria-label="Email">
                <Mail
                  size={18}
                  className="text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
