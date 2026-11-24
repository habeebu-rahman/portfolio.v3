import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';
import BackButton from '@/components/BackButton';

export default function NotFound() {
  return (
    <section className="not-found page-shell">
      <Image
        src="/images/404/astronaut-404.webp"
        alt="An astronaut drifting through empty space"
        width={220}
        height={220}
        className="mx-auto mb-6 h-auto w-40 sm:w-52"
      />
      <p className="section-index">SIGNAL LOST / PAGE NOT FOUND</p>
      <h1>
        This page is <em>missing.</em>
      </h1>
      <p>
        Either the address has a typo or the page has moved. It is not a bug, it is a feature. (It
        is a bug.) Either way, there is a way back home.
      </p>
      <div className="hero-actions">
        <Link href="/" className="button button-primary">
          <Home size={16} /> Take me home
        </Link>
        <BackButton />
      </div>
      <small>404 · NOT FOUND · WORKS ON MY MACHINE</small>
    </section>
  );
}
