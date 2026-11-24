import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Rss, NotebookPen, BookOpen } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { posts } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Technical notes and lessons from Habeebu Rahman K C on Python, Django, React, databases and deployment.',
  alternates: { canonical: '/journal' },
};

const topics = [
  {
    number: '01',
    title: 'Python & Django',
    description: 'Backend development, APIs and practical lessons.',
  },
  {
    number: '02',
    title: 'React & Frontend',
    description: 'Interfaces, state management and API integration.',
  },
  { number: '03', title: 'Databases', description: 'PostgreSQL, Redis and working with data.' },
  { number: '04', title: 'Deployment', description: 'Linux, VPS, Nginx and production issues.' },
  {
    number: '05',
    title: 'Debugging',
    description: 'Real problems, unexpected errors and their fixes.',
  },
  {
    number: '06',
    title: 'Project Notes',
    description: 'Things learned while building real applications.',
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* JOURNAL INTRO */}
      <section className="page-shell mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="section-index">PERSONAL DEVELOPER JOURNAL</span>

            <a
              href="/rss.xml"
              className="inline-flex items-center gap-2 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <Rss size={15} />
              Subscribe via RSS
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="mt-12 grid items-end gap-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-sm text-[var(--color-accent)]">NOTES FROM THE BUILD PROCESS</p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Things I learn.
                <br />
                <span className="text-[#A9C5D8]">Things I keep.</span>
              </h1>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)] md:pb-2">
              A collection of practical notes, debugging stories and lessons from building and
              deploying web applications. Written as I learn, and partly so future me stops Googling
              the same error.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex items-center gap-3 border-y border-[var(--color-line)] py-4 text-xs text-[var(--color-muted)]">
          <BookOpen size={15} />
          <span>
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} so far
          </span>
          <span className="mx-1">·</span>
          <span>Real projects, practical lessons, honest mistakes.</span>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="page-shell mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="section-index">01 — THE JOURNAL</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Field notes.</h2>
            </div>

            <span className="hidden text-xs text-[var(--color-muted)] sm:block">
              IDEAS, EXPERIENCES & SOLUTIONS
            </span>
          </div>
        </Reveal>

        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Reveal key={post.slug}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group relative grid gap-5 border-b border-[var(--color-line)] py-7 transition-colors hover:border-[var(--color-accent)] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <div>
                    <span className="text-3xl font-light text-[var(--color-line)] transition-colors group-hover:text-[var(--color-accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="mt-2 text-[10px] text-[var(--color-muted)]">{post.date}</p>
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
                        {post.category || 'Development'}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold transition-colors group-hover:text-[var(--color-accent)] sm:text-2xl">
                      {post.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-[var(--color-muted)]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
                    Read article
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          /* EMPTY JOURNAL */
          <Reveal>
            <div className="grid overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] md:grid-cols-[1fr_0.85fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
                  <span className="status-dot" />
                  DRAFTS IN PROGRESS
                </span>

                <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                  Good notes take
                  <br />a little time.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  I’m collecting lessons from real projects — Django APIs, React integration,
                  PostgreSQL, deployment and the occasional stubborn bug. The first articles will
                  appear here after they’re written and reviewed.
                </p>

                <div className="mt-7 flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <NotebookPen size={16} />
                  Currently working on the first entries
                </div>

                <a
                  href="/rss.xml"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-ink)]"
                >
                  Follow the journal
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="relative min-h-[260px] overflow-hidden bg-[#17283B] md:min-h-[390px]">
                <Image
                  src="/images/journal/habeebu-journal-blog.webp"
                  alt="Illustration of Habeebu writing in his developer journal"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] tracking-widest text-white/70">
                    NOTES FROM MY WORKBENCH
                  </span>
                  <p className="mt-2 text-xl font-semibold text-white">Learn. Build. Document.</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* TOPICS */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="page-shell mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="section-index">02 — WHAT’S ON MY WORKBENCH</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Things I write about.
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-6 text-[var(--color-muted)]">
                Mostly things I’ve actually worked with, broken, fixed or learned along the way.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Reveal key={topic.number}>
                <div className="group flex gap-4 border-t border-[var(--color-line)] py-6">
                  <span className="pt-1 text-xs text-[var(--color-accent)]">{topic.number}</span>

                  <div>
                    <h3 className="text-base font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                      {topic.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="page-shell mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="section-index">KEEP LEARNING</span>
              <h2 className="mt-3 text-2xl font-semibold">More notes coming soon.</h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                The best lessons usually arrive right after something breaks.
              </p>
            </div>

            <Link href="/#contact" className="button button-secondary w-fit">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
