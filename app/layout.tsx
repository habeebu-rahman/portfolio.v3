import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer, TimeMachine } from '@/components/SiteChrome';
import SoundEffects from '@/components/SoundEffects';
import { isConfigured, site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { defaultOgImage, personId, websiteId } from '@/lib/seo';
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1422',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | Habeebu Rahman' },
  description: site.description,
  applicationName: 'Habeebu Rahman Portfolio',
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  // No site-wide canonical here: each page sets its own (see lib/seo.ts), otherwise pages
  // without one would wrongly point search engines at the home page.
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: 'en_IN',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  // Optional: set GOOGLE_SITE_VERIFICATION in your host's environment to verify Search Console.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    alternateName: ['Habeebu Rahman', 'Habeebu Rahman K C'],
    url: site.url,
    jobTitle: 'Python Full-Stack Developer',
    description: site.description,
    email: site.email,
    image: `${site.url}/images/profile/habeebu-photo.webp`,
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Calicut University' },
    sameAs: [site.github, site.instagram].filter(isConfigured),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calicut',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Python',
      'Django',
      'Django REST Framework',
      'React',
      'PostgreSQL',
      'Redis',
      'Linux',
      'AWS',
    ],
  };
  return (
    <html lang="en">
      <body className="min-h-screen bg-portfolio-bg text-portfolio-text antialiased">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              person,
              {
                '@type': 'WebSite',
                '@id': websiteId,
                url: site.url,
                name: site.name,
                description: site.description,
                inLanguage: 'en-IN',
                publisher: { '@id': personId },
              },
            ],
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <SoundEffects />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />

        {/* Time Machine appears when the visitor reaches the bottom */}
        <div id="time-machine-trigger" className="h-px w-full" />

        <TimeMachine />
      </body>
    </html>
  );
}
