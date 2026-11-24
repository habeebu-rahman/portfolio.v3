import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { posts, site } from '@/lib/site';
export function generateStaticParams() { return posts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = posts.find(x => x.slug === slug); return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: 'article', title: p.title, description: p.excerpt, url: `${site.url}/blog/${p.slug}`, publishedTime: p.date } } : {}; }
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = posts.find(x => x.slug === slug); if (!p) notFound(); return <article className="article-page page-shell"><Link href="/blog" className="back-link"><ArrowLeft size={15}/> All journal entries</Link><p className="section-index">FIELD NOTES / {p.date}</p><h1>{p.title}<span className="text-gradient">.</span></h1><p className="article-excerpt">{p.excerpt}</p><div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="article-body">{p.body.map((para, i) => <p key={i}>{para}</p>)}</div><p className="article-signoff">Written by Habeebu Rahman · {p.read}</p></article>; }
