import { posts, site } from '@/lib/site';

export async function GET() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  const items = sorted
    .map((post) => {
      const postUrl = `${site.url}/journal/${post.slug}`;
      const publishDate = new Date(`${post.date}T09:00:00+05:30`).toUTCString();
      const categories = [post.category, ...post.tags]
        .map((tag) => `<category><![CDATA[${tag}]]></category>`)
        .join('');

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid isPermaLink="true">${postUrl}</guid>
          <pubDate>${publishDate}</pubDate>
          <dc:creator><![CDATA[${site.name}]]></dc:creator>
          <description><![CDATA[${post.excerpt}]]></description>
          ${categories}
        </item>
      `;
    })
    .join('');

  const lastBuildDate = new Date(`${sorted[0].date}T09:00:00+05:30`).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <channel>
        <title>Habeebu Rahman — Developer Notes</title>
        <link>${site.url}/journal</link>
        <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
        <description>
          Technical notes from Habeebu Rahman about Python, Django,
          React, databases and deployment.
        </description>
        <language>en-in</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        ${items}
      </channel>
    </rss>
  `;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
