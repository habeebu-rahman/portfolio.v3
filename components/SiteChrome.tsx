'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Volume2, VolumeX, Github, Instagram, ArrowUpRight, Menu, X } from 'lucide-react';
import { getSoundEnabled, playUiSound, setSoundEnabled, subscribeSound } from '@/lib/sounds';
import { isConfigured, site } from '@/lib/site';

export function SoundToggle() {
  // One shared value for every toggle on the page (header + footer stay in sync).
  const enabled = useSyncExternalStore(subscribeSound, getSoundEnabled, () => false);
  return (
    <button
      className="icon-button sound-toggle"
      aria-label={enabled ? 'Disable sound effects' : 'Enable sound effects'}
      aria-pressed={enabled}
      onClick={() => {
        const next = !enabled;
        setSoundEnabled(next);
        if (next) playUiSound('success');
      }}
      title={enabled ? 'Sound on' : 'Sound off'}
    >
      {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      <span className="control-label">Sound {enabled ? 'on' : 'off'}</span>
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['About', '/about'],
    ['Experience', '/experience'],
    ['Projects', '/projects'],
    ['Journal', '/journal'],
    ['Contact', '/#contact'],
  ];
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Habeebu Rahman home">
        habeebu<span>.</span>
      </Link>
      <nav
        id="main-navigation"
        className={open ? 'nav-links nav-open' : 'nav-links'}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <SoundToggle />
        <button
          className="icon-button menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="wordmark" href="/">
          habeebu<span>.</span>
        </Link>
        <p>Designed, built and debugged by Habeebu Rahman.</p>
        <div className="footer-social">
          {isConfigured(site.github) && (
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
          )}
          {isConfigured(site.instagram) && (
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={17} />
            </a>
          )}
          <a href={`mailto:${site.email}`} aria-label="Email">
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <SoundToggle />
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/journal">Journal</Link>
        <p>© {new Date().getFullYear()} Habeebu Rahman</p>
        <a href="/rss.xml">RSS feed ↗</a>
        <p className="footer-note">Made in Calicut, Kerala. Powered by tea.</p>
      </div>
    </footer>
  );
}

export function TimeMachine() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById('time-machine-trigger');

    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      },
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  const sites = [
    {
      name: 'Early Portfolio',
      year: '2023',
      image: '/images/time-machine/portfolio-2023.webp',
      href: 'https://habeeebu-rahman-protfolio.lovable.app/',
    },
    {
      name: 'Developer Journey',
      year: '2025',
      image: '/images/time-machine/portfolio-2025.webp',
      href: 'https://habeebu-rahman-portfolio.netlify.app/',
    },
    {
      name: 'Current Portfolio',
      year: '2026',
      image: '/images/time-machine/portfolio-2026.webp',
      href: '/',
    },
    {
      name: 'Ressume',
      year: '2026',
      image: '/images/time-machine/resume.webp',
      href: '/Habeebu-Rahman-CV.pdf',
    },
  ];

  return (
    <>
      {/* TIME MACHINE BUTTON */}
      {visible && (
        <button
          onClick={() => {
            setOpen(true);

            if (document.documentElement.dataset.sound === 'on') {
              playUiSound('pop');
            }
          }}
          aria-label="Open developer journey"
          title="Travel through my portfolio history"
          className="fixed bottom-5 right-5 z-[100] grid size-[76px] place-items-center rounded-2xl border border-sky-400/30 bg-[#101D38] shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 hover:scale-110 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] animate-[bounce_2s_infinite]"
        >
          <Image
            src="/images/time-machine/portal.webp"
            alt="Time Machine"
            width={58}
            height={66}
            className="h-[66px] w-[58px] object-contain drop-shadow-[0_0_8px_rgba(217,202,45,0.4)] hover:drop-shadow-[0_0_8px_rgba(217,202,45,1)]"
          />
        </button>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#050A13]/90 p-5 backdrop-blur-xl max-sm:items-start max-sm:p-0"
        >
          <section
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Developer journey timeline"
            className="relative isolate flex aspect-square w-full max-w-[680px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_45%,#263750_0%,#17283B_42%,#101827_72%,#080E19_100%)] shadow-[0_0_35px_rgba(76,125,190,0.25),0_0_100px_rgba(76,90,180,0.16)] animate-portal-open max-sm:aspect-auto max-sm:min-h-screen max-sm:max-w-none max-sm:items-start max-sm:justify-start max-sm:overflow-hidden max-sm:rounded-none max-sm:border-0 max-sm:bg-[linear-gradient(180deg,#172536_0%,#101827_55%,#080D16_100%)] max-sm:pb-12"
          >
            {/* MOBILE PORTAL GLOW */}
            <div className="pointer-events-none absolute -z-10 hidden max-sm:block">
              <div className="absolute left-1/2 top-[-165px] size-[340px] -translate-x-1/2 rounded-full border-[10px] border-[#9BBCE8]/40 shadow-[0_0_25px_rgba(120,170,255,0.6),inset_0_0_30px_rgba(120,170,255,0.3)]" />

              <div className="absolute left-1/2 top-[-150px] size-[315px] -translate-x-1/2 rounded-full border-[15px] border-[#647DB8]/30 shadow-[0_0_35px_rgba(100,125,210,0.4)]" />

              <div className="absolute left-1/2 top-[-135px] size-[290px] -translate-x-1/2 rounded-full border-[12px] border-[#A9C5D8]/30 shadow-[0_0_35px_rgba(130,180,230,0.3)]" />

              <div className="absolute left-1/2 top-[-115px] size-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#263750_0%,#17283B_65%,transparent_100%)] blur-sm" />
            </div>

            {/* DESKTOP PORTAL RINGS */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full border-[12px] border-[#9BBCE8]/20 shadow-[inset_0_0_30px_rgba(120,170,255,0.18),0_0_25px_rgba(120,170,255,0.2)] max-sm:hidden" />

            <div className="pointer-events-none absolute inset-[6%] -z-10 rotate-[-18deg] rounded-full border-[18px] border-[#647DB8]/25 shadow-[0_0_30px_rgba(100,125,210,0.22)] max-sm:hidden" />

            <div className="pointer-events-none absolute inset-[11%] -z-10 rotate-[22deg] rounded-full border-[12px] border-[#A9C5D8]/20 shadow-[0_0_30px_rgba(130,180,230,0.16)] max-sm:hidden" />

            <div className="pointer-events-none absolute inset-[13%] -z-10 rounded-full bg-[radial-gradient(circle,#263750_0%,#17283B_65%,transparent_100%)] max-sm:hidden" />

            {/* MOBILE BACKGROUND FADE */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-28 bg-gradient-to-t from-[#080D16] to-transparent max-sm:block" />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-[13%] top-[13%] z-30 grid size-9 place-items-center rounded-full bg-white/15 text-2xl text-white transition hover:rotate-90 hover:bg-white/25 max-sm:right-5 max-sm:top-5"
            >
              ×
            </button>

            {/* CONTENT */}
            <div className="relative z-20 flex w-[74%] flex-col items-center text-center text-[#E7EDF7] max-sm:w-full max-sm:px-5 max-sm:pb-10 max-sm:pt-[78px]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#A9C5D8] max-sm:text-[9px]">
                A JOURNEY THROUGH TIME
              </span>

              <h2 className="mt-3 text-[clamp(19px,3vw,29px)] font-extrabold leading-tight tracking-[-0.04em] max-sm:mt-3 max-sm:max-w-[290px] max-sm:text-[22px]">
                Looking for a different
                <br />
                site? Go back in time...
              </h2>

              <p className="mt-3 max-w-sm text-xs leading-6 text-[#AAB8CB] max-sm:mt-4 max-sm:max-w-[280px] max-sm:text-[11px]">
                A few snapshots of my journey as a developer. Every version has a story, and a few
                questionable colour choices.
              </p>

              {/* WEBSITE PREVIEWS */}
              <div className="mt-5 grid w-full grid-cols-2 gap-3 max-sm:mt-7 max-sm:w-full max-sm:max-w-[245px] max-sm:grid-cols-1 max-sm:gap-5">
                {sites.map((site, index) => (
                  <a
                    key={site.name}
                    href={site.href}
                    target={site.href.startsWith('http') ? '_blank' : undefined}
                    rel={site.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    className={`group relative z-0 min-w-0 text-left transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:scale-[1.03] ${
                      index === 0
                        ? '-rotate-2 hover:rotate-0'
                        : index === 1
                          ? 'rotate-2 hover:rotate-0'
                          : index === 2
                            ? 'rotate-2 hover:rotate-0'
                            : '-rotate-2 hover:rotate-0'
                    } max-sm:rotate-0 max-sm:hover:rotate-0`}
                  >
                    <div className="relative aspect-[1.65] overflow-hidden rounded-md border-2 border-white/90 bg-[#17283B] shadow-[0_5px_20px_rgba(0,0,0,0.35)]">
                      <Image
                        src={site.image}
                        alt={`${site.name} website preview`}
                        fill
                        sizes="(max-width: 640px) 90vw, 190px"
                        className="object-cover transition-[filter,transform] duration-500 ease-out sm:blur-[1.5px] sm:brightness-75 sm:group-hover:blur-[0px] sm:group-hover:brightness-100 sm:group-hover:scale-105"
                      />
                    </div>

                    <span className="mt-2 block truncate text-[9px] font-semibold text-[#D8E3F2] transition-colors duration-300 group-hover:text-white max-sm:text-[10px]">
                      {site.year} · {site.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center justify-center gap-2 text-[8px] font-bold tracking-[0.13em] text-[#A9C5D8]/70 max-sm:mt-7">
                <span className="size-1.5 rounded-full bg-[#8C9FEA]" />
                MORE VERSIONS OF ME, ONE JOURNEY
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
