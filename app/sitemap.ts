import type { MetadataRoute } from 'next';
import { posts, projects, site } from '@/lib/site';

// Newest article date, used as the "last modified" date of the journal index.
const latestPostDate = posts.map((post) => post.date).reduce((a, b) => (a > b ? a : b));

const entry = (
  path: string,
  priority: number,
  lastModified?: string,
): MetadataRoute.Sitemap[number] => ({
  url: `${site.url}${path}`,
  lastModified,
  changeFrequency: 'monthly',
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('', 1),
    entry('/about', 0.8),
    entry('/experience', 0.8),
    entry('/projects', 0.8),
    ...projects.map((project) => entry(`/projects/${project.slug}`, 0.7)),
    entry('/journal', 0.8, latestPostDate),
    ...posts.map((post) => entry(`/journal/${post.slug}`, 0.7, post.date)),
  ];
}
