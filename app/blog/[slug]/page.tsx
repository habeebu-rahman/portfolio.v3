
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { posts, site } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article-page page-shell">
      <Link href="/blog" className="back-link">
        <ArrowLeft size={15} />
        All journal entries
      </Link>

      <p className="section-index">
        FIELD NOTES / {post.date}
      </p>

      <h1>
        {post.title}
        <span className="text-gradient">.</span>
      </h1>

      <p className="article-excerpt">
        {post.excerpt}
      </p>

      <div className="tag-list">
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <p className="article-signoff">
        Written by Habeebu Rahman · {post.readTime}
      </p>
    </article>
  );
}
