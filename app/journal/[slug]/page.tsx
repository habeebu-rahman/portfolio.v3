import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { posts, site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, defaultOgImage, pageMetadata, personId } from '@/lib/seo';
import ReactMarkdown from 'react-markdown';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return { title: 'Article not found' };

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    keywords: post.tags,
    article: {
      publishedTime: `${post.date}T09:00:00+05:30`,
      tags: post.tags,
      section: post.category,
    },
  });
}

export default async function JournalArticle({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const readingTime = Math.max(
    1,
    Math.ceil((post.content || '').split(/\s+/).filter(Boolean).length / 200),
  );

  const articleUrl = `${site.url}/journal/${post.slug}`;

  return (
    <div className="min-h-screen px-5 pb-20 pt-12 sm:px-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          url: articleUrl,
          mainEntityOfPage: articleUrl,
          image: `${site.url}${defaultOgImage.url}`,
          datePublished: `${post.date}T09:00:00+05:30`,
          dateModified: `${post.date}T09:00:00+05:30`,
          articleSection: post.category,
          keywords: post.tags.join(', '),
          wordCount: (post.content || '').split(/\s+/).filter(Boolean).length,
          inLanguage: 'en-IN',
          author: { '@id': personId },
          publisher: { '@id': personId },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal' },
          { name: post.title, path: `/journal/${post.slug}` },
        ])}
      />
      <div className="relative mx-auto w-full max-w-5xl">
        {/* Back navigation */}
        <Link
          href="/journal"
          className="mb-14 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
        >
          <ArrowLeft size={16} />
          <span>All journal entries</span>
        </Link>

        {/* Article header */}
        <header className="mx-auto mb-16 max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[var(--color-muted)]">
            {/* <span className="status-dot" /> */}
            <span>Field notes</span>
            <span>/</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            {post.title}
            <span className="text-gradient">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--color-muted)]">
            <span>By {site.name}</span>

            <span className="hidden h-4 w-px bg-[var(--color-line)] sm:block" />

            <span className="inline-flex items-center gap-2">
              <Clock3 size={14} />
              {readingTime} min read
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {(post.tags || []).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article content and sidebar */}
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)] items-start gap-10 border-t border-[var(--color-line)] pt-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:gap-16">
          <aside className="flex flex-col gap-3 md:sticky md:top-24">
            <span className="section-index">QUICK NOTE</span>

            <span className="h-px w-10 bg-[var(--color-line)]" />

            <p className="text-xs leading-relaxed text-[var(--color-muted)]">
              Written by a learner, for learners. Corrections are welcome.
            </p>
          </aside>

          <article className="article-body w-full min-w-0 max-w-3xl">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-8 text-xl font-semibold text-[var(--color-ink)]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 text-base leading-8 text-[var(--color-muted)]">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-7 text-[var(--color-muted)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 ml-6 list-decimal space-y-2 text-base leading-7 text-[var(--color-muted)]">
                    {children}
                  </ol>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[var(--color-ink)]">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] underline underline-offset-4"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-2 border-[var(--color-accent)] pl-5 text-[var(--color-muted)]">
                    {children}
                  </blockquote>
                ),
                // Fenced blocks arrive as <pre><code className="language-x">; inline code has no className.
                pre: ({ children }) => (
                  <pre className="mb-6 max-w-full overflow-x-auto rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-ink)]">
                    {children}
                  </pre>
                ),
                code: ({ className, children }) =>
                  className ? (
                    <code className={`${className} font-mono`}>{children}</code>
                  ) : (
                    <code className="break-words rounded bg-[var(--color-surface)] px-1.5 py-1 font-mono text-sm text-[var(--color-accent)]">
                      {children}
                    </code>
                  ),
              }}
            >
              {post.content || ''}
            </ReactMarkdown>
          </article>
        </div>

        {/* Article footer */}
        <footer className="mt-20 flex flex-col justify-between gap-8 border-t border-[var(--color-line)] pt-10 sm:flex-row sm:items-center">
          <div>
            <span className="section-index">END OF ENTRY</span>
            <h2 className="mt-3 text-2xl font-semibold">Thanks for reading.</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              More notes are on the way, as soon as I break something new.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            Explore more notes
            <ArrowUpRight size={18} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
