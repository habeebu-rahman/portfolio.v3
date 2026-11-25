import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, MapPin, Code2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Experience & Education',
  description:
    'Habeebu Rahman K C: Software Developer Trainee at Qiyam Ventures, Python Full-Stack Intern at Techolas Technologies, BCA from Calicut University.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Experience', path: '/experience' },
        ])}
      />
      <section className="inner-hero page-shell compact-inner-hero">
        <p className="eyebrow">THE WORK SO FAR</p>
        <h1>
          Learning by
          <br />
          <span>building things.</span>
        </h1>
        <p className="inner-lead">
          The teams, the apps and the real-world problems that taught me most of what I know, plus a
          few that taught me humility.
        </p>
      </section>
      <section className="experience-illustration page-shell">
        <Image
          src="/images/experience/studio-portrait.webp"
          alt="Illustrated Habeebu planning and reviewing development tasks at a whiteboard"
          width={504}
          height={420}
          sizes="(max-width: 700px) 100vw, 42vw"
        />
        <div>
          <span className="section-index">THE PROCESS</span>
          <h2>
            Plan it. Build it.
            <br />
            <em>Make it better.</em>
          </h2>
          <p>
            A little planning, a lot of testing, and the humility to admit when it did not work the
            first time (it usually does not).
          </p>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="section page-shell">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="section-index">01 — PROFESSIONAL EXPERIENCE</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Where I&apos;ve worked.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                Every role taught me something new, from shipping features to keeping a live app
                running while real people are using it.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-xs text-[var(--color-muted)]">
              {/* <span className="status-dot" /> */}2 professional experiences
            </span>
          </div>
        </Reveal>

        <div className="relative space-y-6">
          {/* QIYAM VENTURES */}
          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[var(--color-accent)] sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--color-accent)] opacity-[0.035] blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-canvas)]">
                      <span className="text-xl font-bold text-[var(--color-accent)]">Q</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">Qiyam Ventures</h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        Software Developer Trainee
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="inline-flex rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]">
                      June 2026 — November 2026
                    </span>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-muted)] sm:justify-end">
                      <MapPin size={12} />
                      Calicut, Kerala
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-[var(--color-line)]" />

                <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
                  Worked on QiyamMart, an online supermarket built with React and Django REST
                  Framework, and helped out on other company web applications.
                </p>

                <div className="mt-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    KEY CONTRIBUTIONS
                  </span>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        01
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Built storefront and admin features and connected React pages to the backend
                        APIs.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        02
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Wrote product availability rules for online purchasing and handled
                        authorised offline billing.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        03
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Helped look after the live app on an Ubuntu VPS with Nginx, Daphne,
                        PostgreSQL and Redis, where every mistake is public.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        04
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Helped with Android builds and releases using Capacitor and Google Play
                        Console.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--color-line)] pt-5">
                  <span className="text-xs text-[var(--color-muted)]">TECHNOLOGIES & TOOLS</span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'React',
                      'Django REST Framework',
                      'PostgreSQL',
                      'Redis',
                      'Capacitor',
                      'Nginx',
                      'Daphne',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* TECHOLAS TECHNOLOGIES */}
          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[var(--color-accent)] sm:p-8">
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-canvas)]">
                      <Code2 size={25} className="text-[var(--color-accent)]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">Techolas Technologies</h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        Python Full-Stack Intern
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="inline-flex rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]">
                      May 2025 — March 2026
                    </span>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-muted)] sm:justify-end">
                      <MapPin size={12} />
                      Calicut, Kerala
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-[var(--color-line)]" />

                <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
                  Worked on web app features across the frontend and backend with Python and Django,
                  and got my first real taste of full-stack development.
                </p>

                <div className="mt-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    KEY CONTRIBUTIONS
                  </span>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        01
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Built and improved application features using Python and Django.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        02
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Made responsive pages with HTML, CSS, Bootstrap and JavaScript.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        03
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Wired the frontend pages up to the backend logic.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs text-[var(--color-accent)]">
                        04
                      </span>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        Used Git and GitHub, tested features with the team and fixed the bugs we
                        found.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--color-line)] pt-5">
                  <span className="text-xs text-[var(--color-muted)]">TECHNOLOGIES & TOOLS</span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'Python',
                      'Django',
                      'HTML',
                      'CSS',
                      'Bootstrap',
                      'JavaScript',
                      'Git',
                      'GitHub',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="page-shell">
          <Reveal>
            <span className="section-index">02 — EDUCATION</span>
            <h2>The foundation</h2>
          </Reveal>
          <div className="education-row">
            <GraduationCap size={27} />
            <div>
              <h3>Bachelor of Computer Application (BCA)</h3>
              <p>Calicut University · 2022–2025 · Calicut, Kerala</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section page-shell">
        <Reveal>
          <span className="section-index">NEXT CHAPTER</span>
          <h2>
            Let’s build the
            <br />
            next thing.
          </h2>
          <p>
            I’m looking for Python full-stack developer opportunities and a team building useful
            products. I bring curiosity, tidy commits and a steady supply of chai.
          </p>
          <Link className="button button-primary" href="/#contact">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
