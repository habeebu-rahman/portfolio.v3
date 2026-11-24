
import { posts, site } from '@/lib/site';

export async function GET() {
  const items = posts
    .map((post) => {
      const postUrl = `${site.url}/journal/${post.slug}`;
      const publishDate = new Date(
        `${post.date}T09:00:00+05:30`,
      ).toUTCString();

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid>${postUrl}</guid>
          <pubDate>${publishDate}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
        </item>
      `;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Habeebu Rahman — Developer Notes</title>
        <link>${site.url}/#journal</link>
        <description>
          Technical notes from Habeebu Rahman about Python, Django,
          React, databases and deployment.
        </description>
        <language>en-in</language>
        ${items}
      </channel>
    </rss>
  `;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control':
        'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
