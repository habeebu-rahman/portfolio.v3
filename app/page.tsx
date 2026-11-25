import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Server,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { isConfigured, projects, site, posts } from '@/lib/site';
import { FaAws } from 'react-icons/fa';
import { TbApi, TbServer } from 'react-icons/tb';
import {
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGunicorn,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Backend',
    icon: Code2,
    skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React',
      'JavaScript',
      'Vite',
      'Redux Toolkit',
      'React Router',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Data & realtime',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Django Channels'],
  },
  {
    title: 'Deployment & tools',
    icon: Server,
    skills: ['Linux / Ubuntu', 'Nginx', 'Gunicorn', 'Daphne', 'Docker', 'AWS', 'Git / GitHub'],
  },
];

const technologyColors: Record<string, string> = {
  python: '#3776AB',
  django: '#2BA977',
  react: '#61DAFB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  html: '#E34F26',
  html5: '#E34F26',
  css: '#1572B6',
  css3: '#1572B6',
  tailwind: '#06B6D4',
  'tailwind css': '#06B6D4',
  bootstrap: '#7952B3',
  postgresql: '#4169E1',
  postgres: '#4169E1',
  mysql: '#4479A1',
  sqlite: '#003B57',
  redis: '#DC382D',
  git: '#F05032',
  github: '#FFFFFF',
  docker: '#2496ED',
  vite: '#646CFF',
  nextjs: '#FFFFFF',
  'next.js': '#FFFFFF',
  redux: '#764ABC',
  'redux toolkit': '#764ABC',
  aws: '#FF9900',
  'django rest framework': '#A30000',
  'rest apis': '#6BA6D6',
  'react router': '#CA4245',
  'django channels': '#2BA977',
  'linux / ubuntu': '#E95420',
  nginx: '#009639',
  gunicorn: '#499848',
  daphne: '#6BA6D6',
  'git / github': '#F05032',
};

const technologyIcons: Record<string, React.ElementType> = {
  // Backend
  python: SiPython,
  django: SiDjango,
  'django rest framework': SiDjango,
  'rest apis': TbApi,

  // Frontend
  react: SiReact,
  javascript: SiJavascript,
  vite: SiVite,
  'redux toolkit': SiRedux,
  'react router': SiReactrouter,
  'tailwind css': SiTailwindcss,
  bootstrap: SiBootstrap,

  // Database & realtime
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  redis: SiRedis,
  'django channels': SiDjango,

  // Deployment & tools
  'linux / ubuntu': SiLinux,
  nginx: SiNginx,
  gunicorn: SiGunicorn,
  daphne: TbServer,
  docker: SiDocker,
  aws: FaAws,
  'git / github': SiGithub,
};

export const metadata: Metadata = pageMetadata({
  title: site.title,
  absoluteTitle: true,
  description: site.description,
  path: '/',
});

export default function Home() {
  return (
    <>
      <section className="hero page-shell" id="home">
        <div className="hero-copy">
          <div className="flex flex-col items-start">
            <h1 className="mb-0">
              <span className="block text-[var(--color-ink)]">Habeebu</span>
              <span className="block text-[#A9C5D8]">Rahman K C</span>
              <span className="sr-only"> — Python Full-Stack Developer in Calicut, Kerala</span>
            </h1>

            <p className="eyebrow mt-0 ml-0 self-start">
              PYTHON FULL-STACK DEVELOPER
              <span className="location">
                <MapPin size={13} /> CALICUT, KERALA
              </span>
            </p>
          </div>
          <p className="hero-role mt-3">
            I turn chai into web applications with Python, Django and React.
          </p>
          <p className="hero-description">
            I like the whole stack: the buttons you click, the APIs behind them, the database behind
            that, and the deployment that decides whether any of it works on Monday. I enjoy making
            useful things, working out how they tick, and occasionally asking the server why it is
            being so dramatic.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              See selected work <ArrowDown size={16} />
            </a>
            <Link className="button button-outline" href="/about">
              A little about me <ArrowUpRight size={15} />
            </Link>
            <a
              className="button button-outline"
              href="/Habeebu-Rahman-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <Download size={15} />
            </a>
          </div>
          <div className="social-links">
            {isConfigured(site.github) && (
              <a href={site.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
            )}
            {isConfigured(site.instagram) && (
              <a href={site.instagram} target="_blank" rel="noreferrer">
                <Instagram size={17} /> Instagram <ArrowUpRight size={13} />
              </a>
            )}
            <a href={`mailto:${site.email}`}>
              <Mail size={17} /> Email <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="hero-visual hero-visual-image">
          <div className="hero-art-frame">
            <Image
              src="/images/hero/developer-workspace.webp"
              alt="Illustration of Habeebu working at his development desk"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 52vw"
              className="hero-art"
            />
            <span className="hero-art-tag">FUELLED BY CHAI</span>
          </div>
          {/* <div className="hero-avatar-sticker"><Image src="/images/profile/habeebu-avatar.webp" alt="Illustrated avatar of Habeebu" width={84} height={112} /></div> */}
          <div className="code-note" aria-label="Small animated code illustration">
            <div className="code-bar">
              <i />
              <i />
              <i />
              <span>debug.py</span>
            </div>
            <pre>
              <code>
                <b>def</b> debug():{'\n'} <em>return</em> "tea, then try again"{'\n'}
                {'\n'}
                <strong>print</strong>(debug())
              </code>
            </pre>
            <span className="code-cursor" />
          </div>
          <span className="visual-caption">A little code, a lot of chai.</span>
        </div>
      </section>

      <section className="quick-facts page-shell mx-auto grid" aria-label="At a glance">
        <div>
          <span>FOCUS</span>
          <b>Full-stack development</b>
        </div>
        <div>
          <span>BACKEND</span>
          <b>Python · Django</b>
        </div>
        <div>
          <span>FRONTEND</span>
          <b>React · JavaScript</b>
        </div>
        <div>
          <span>BASED IN</span>
          <b>Calicut, Kerala</b>
        </div>
      </section>

      <section id="about" className="section page-shell mx-auto">
        <Reveal>
          <div className="section-heading">
            <span className="section-index">01 — ABOUT</span>
            <h2>A bit about me</h2>
          </div>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-copy">
            <p className="lead">
              I’m a Python Full-Stack Developer with a BCA from Calicut University, and I’m happiest
              when something finally works.
            </p>
            <p>
              Lately I’ve been building and improving web apps with React and Django REST Framework:
              e-commerce features, appointment booking, role-based workflows, API integration and
              deployment.
            </p>
            <p>
              I like following a feature from the user’s click, through the API, down to the
              database (and back up again when something breaks). Right now I’m most interested in
              backend development, reliable architecture and making everyday software a little less
              annoying to use.
            </p>
          </Reveal>
          <Reveal className="about-aside">
            <span className="aside-label">OUTSIDE THE CODE</span>
            <p>
              Trying new tools, poking at how products are built, and hunting for a cleaner way to
              solve the next problem, usually with a cup of tea nearby.
            </p>
            <div className="terminal-line">
              <span>habeebu@dev:~$</span> whoami
            </div>
            <div className="terminal-output">A developer who still checks the logs first.</div>
          </Reveal>
        </div>
        <p className="more-link-wrap">
          <Link className="text-link" href="/about">
            A little more about me <ArrowUpRight size={15} />
          </Link>
        </p>
      </section>

      <section id="experience" className="section section-alt">
        <div className="page-shell">
          <Reveal>
            <div className="section-heading">
              <span className="section-index">02 — EXPERIENCE</span>
              <h2>Where I’ve worked</h2>
              <p className="section-intro">
                Where I learned that production is a very different place from localhost.
              </p>
            </div>
          </Reveal>
          <div className="experience-list">
            <Reveal className="experience-item">
              <div className="experience-date">JUN 2026 — NOV 2026</div>
              <div>
                <div className="experience-title">
                  <h3>Software Developer Trainee</h3>
                  <span>Calicut, Kerala</span>
                </div>
                <p className="company-name">Qiyam Ventures</p>
                <ul>
                  <li>
                    Worked on QiyamMart storefront and admin features and connected React pages to
                    the backend APIs.
                  </li>
                  <li>
                    Wrote product availability rules for online purchases and handled authorised
                    offline billing.
                  </li>
                  <li>
                    Worked on a live Ubuntu VPS running Nginx, Daphne, PostgreSQL and Redis, where
                    mistakes are public.
                  </li>
                  <li>
                    Helped with Android builds and releases using Capacitor and Google Play Console.
                  </li>
                </ul>
                <div className="tags">
                  <span>React</span>
                  <span>Django REST</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                  <span>Capacitor</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="experience-item">
              <div className="experience-date">MAY 2025 — MAR 2026</div>
              <div>
                <div className="experience-title">
                  <h3>Python Full-Stack Intern</h3>
                  <span>Calicut, Kerala</span>
                </div>
                <p className="company-name">Techolas Technologies</p>
                <ul>
                  <li>Built and improved web app features using Python and Django.</li>
                  <li>
                    Made responsive pages with HTML, CSS, Bootstrap and JavaScript and wired them up
                    to the backend.
                  </li>
                  <li>
                    Used Git and GitHub, tested features with the team and fixed the bugs we found.
                  </li>
                </ul>
                <div className="tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                  <span>Git</span>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="more-link-wrap">
            <Link className="text-link" href="/experience">
              See the full experience <ArrowUpRight size={15} />
            </Link>
          </p>
        </div>
      </section>

      <section id="projects" className="section page-shell mx-auto">
        <Reveal>
          <div className="section-heading">
            <span className="section-index">03 — SELECTED PROJECTS</span>
            <h2>Things I’ve built (and occasionally debugged)</h2>
            <p className="section-intro">
              A few of my favourites. Open one for the screenshots, the tech behind it and what I
              actually did.
            </p>
          </div>
        </Reveal>

        <div className="project-grid grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.slug} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="project-card project-card-compact group flex h-full flex-col"
              >
                <div className={`project-art ${project.accent}`}>
                  <strong>{project.name}</strong>
                </div>

                <div className="project-card-content flex flex-1 flex-col">
                  <span className="section-index">
                    {project.type} · {project.year}
                  </span>

                  <h3>{project.name}</h3>

                  <p className="project-summary">{project.summary}</p>
                  <p className="project-quip">{project.quip}</p>

                  <div className="project-card-foot mt-auto flex items-center justify-between">
                    <span>View case study</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="button button-secondary">
            View all projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="page-shell">
          <Reveal>
            <div className="section-heading text-center">
              <span className="section-index">04 — TOOLKIT</span>
              <h2>The toolbox</h2>
              <p className="section-intro mx-auto">
                Everything I reach for to build and ship full-stack apps. Hover an icon and it
                lights up in its brand colour.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 max-w-5xl">
            {skillGroups.map(({ title, icon: GroupIcon, skills }) => (
              <Reveal key={title}>
                <div className="mb-10">
                  <div className="mb-5 flex items-center gap-2">
                    <GroupIcon size={15} className="text-[var(--color-muted)]" />
                    <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                      {title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-4 gap-x-3 gap-y-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
                    {skills.map((skill) => {
                      const normalized = skill.toLowerCase().trim();
                      const TechIcon = technologyIcons[normalized] || Code2;
                      const brandColor = technologyColors[normalized];

                      return (
                        <div
                          key={skill}
                          className="group flex flex-col items-center justify-center gap-2 py-2"
                          title={skill}
                        >
                          <TechIcon
                            size={30}
                            style={
                              {
                                '--brand-color': brandColor || 'var(--color-ink)',
                              } as React.CSSProperties
                            }
                            className="text-[var(--color-muted)] opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:!text-[var(--brand-color)] group-hover:opacity-100"
                          />

                          <span className="text-[11px] text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-ink)]">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="section page-shell mx-auto">
        <Reveal>
          <div className="section-heading">
            <span className="section-index">05 — EDUCATION</span>
            <h2>The foundation</h2>
          </div>
          <div className="education-row">
            <GraduationCap size={25} />
            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Calicut University · 2022–2025 · Calicut, Kerala</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="journal" className="section section-alt">
        <div className="page-shell journal-row">
          <Reveal>
            <span className="section-index">06 — NOTES & RSS</span>

            <h2>Things I’m learning (in public)</h2>

            <p className="section-intro">
              Practical notes and the occasional debugging confession from building and deploying
              real applications.
            </p>

            <div className="journal-actions">
              <Link className="rss-link" href="/journal">
                Visit journal <ArrowUpRight size={15} />
              </Link>

              <a className="rss-link" href="/rss.xml">
                RSS feed <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <div className="journal-aside">
            {/* <Image
        src="/images/journal/writing-journal.webp"
        alt="Writing technical development notes"
        width={487}
        height={375}
        sizes="(max-width: 650px) 100vw, 280px"
      /> */}

            {posts.length > 0 ? (
              <>
                <span className="aside-label">LATEST ARTICLE</span>

                <Link href={`/journal/${posts[0].slug}`} className="group">
                  <p className="font-medium transition-colors group-hover:text-[var(--color-accent)]">
                    {posts[0].title}
                  </p>

                  <span className="mt-2 block text-xs text-[var(--color-muted)]">
                    {posts[0].category} · {posts[0].readTime}
                  </span>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm">
                    Read article <ArrowUpRight size={15} />
                  </span>
                </Link>
              </>
            ) : (
              <>
                <span className="aside-label">UP NEXT</span>
                <p>Django APIs · React integration · PostgreSQL · VPS deployment</p>
                <span className="journal-status">Articles in progress</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section page-shell mx-auto">
        <Reveal>
          <span className="section-index">07 — CONTACT</span>

          <h2>
            Let’s talk about
            <br />
            what you’re building.
          </h2>

          <p>
            I’m looking for Python full-stack developer opportunities and a good team to build
            useful things with. Bring the problem, I’ll bring the chai.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="button button-primary"
              href={`mailto:${site.email}?subject=Hello%20Habeebu`}
            >
              Email me <ArrowUpRight size={16} />
            </a>

            {isConfigured(site.whatsapp) && (
              <a
                className="button button-secondary"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp me <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <a className="contact-address" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
