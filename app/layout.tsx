import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer, TimeMachine } from '@/components/SiteChrome';
import SoundEffects from '@/components/SoundEffects';
import { isConfigured, site } from '@/lib/site';
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
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: '/images/hero/developer-hoodie.webp',
        alt: 'Illustrated developer workspace for Habeebu Rahman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/images/hero/developer-hoodie.webp'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    jobTitle: 'Python Full-Stack Developer',
    email: site.email,
    image: `${site.url}/images/profile/habeebu-photo.webp`,
    sameAs: [site.github, site.linkedin].filter(isConfigured),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
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
