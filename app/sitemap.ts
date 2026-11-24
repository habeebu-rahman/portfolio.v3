import type { MetadataRoute } from 'next';
import { posts, projects, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/experience',
    '/projects',
    ...projects.map((project) => `/projects/${project.slug}`),
    '/journal',
    ...posts.map((post) => `/journal/${post.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.75,
  }));
}
