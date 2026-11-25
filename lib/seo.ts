import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;

export const defaultOgImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: `${site.name} — Python Full-Stack Developer in Calicut, Kerala`,
};

type PageMetaInput = {
  /** Page title. The layout template adds "| Habeebu Rahman" unless absoluteTitle is set. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  /** Path of the page, e.g. "/about". Used for the canonical URL and og:url. */
  path: string;
  image?: { url: string; width?: number; height?: number; alt: string };
  keywords?: string[];
  article?: { publishedTime: string; tags?: string[]; section?: string };
};

/** One place that builds canonical, Open Graph and Twitter tags so every page stays consistent. */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  image = defaultOgImage,
  keywords,
  article,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const socialTitle = absoluteTitle ? title : `${title} | Habeebu Rahman`;
  const shared = { url, title: socialTitle, description, siteName: site.name, locale: 'en_IN' };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path, types: { 'application/rss+xml': '/rss.xml' } },
    openGraph: article
      ? {
          ...shared,
          type: 'article',
          publishedTime: article.publishedTime,
          authors: [site.name],
          tags: article.tags,
          section: article.section,
          images: [image],
        }
      : { ...shared, type: 'website', images: [image] },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

/** schema.org BreadcrumbList. Pass items in order, starting with the home page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
