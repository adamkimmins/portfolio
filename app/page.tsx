import { projects } from "@/data/projects";

const EMAIL = "adam.kimmins23@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/adam-kimmins-223654211/";
const GITHUB = "https://github.com/adamkimmins";

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 6h16v12H4V6zm1.5 1.7 6.5 5.1 6.5-5.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6.5 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM5 21V9h3v12H5zm6-12h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.22V21h-3V9z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="wrap">
      <header className="hero">
        <div className="heroTop">
          <h1 className="name">Adam Kimmins</h1>

          <nav className="icons" aria-label="Links">
            <a
              className="iconBtn"
              aria-label="Email"
              href={`mailto:${EMAIL}`}
              title={`Email ${EMAIL}`}
            >
              <IconMail className="icon" />
            </a>

            <a
              className="iconBtn"
              aria-label="GitHub"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <IconGithub className="icon" />
            </a>

            <a
              className="iconBtn"
              aria-label="LinkedIn"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <IconLinkedIn className="icon" />
            </a>

            <a
              className="iconBtn"
              aria-label="Download resume"
              href="/resume.pdf"
              download
              title="Download resume"
            >
              <IconDownload className="icon" />
            </a>
          </nav>
        </div>

        <p className="intro">
          CS student building practical systems: C++ tooling, AI apps, and web UX.
        </p>
      </header>

      <section className="grid" aria-label="Projects">
        {projects.map((p, idx) => {
          const external = p.primary.href.startsWith("http");
          return (
            <a
              key={p.id}
              className="card"
              href={p.primary.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={`${p.title} — ${p.primary.label}`}
            >
              <div className="cardHead">
                <div className="mini" aria-hidden="true">
                  <pre className="miniPre mono dim">{p.ascii}</pre>

                </div>
                <div className="meta">
                  <h2 className="title">{p.title}</h2>
                  <p className="desc">{p.description}</p>

                  {p.tags?.length ? (
                    <div className="tags" aria-label="Tech tags">
                      {p.tags.slice(0, 6).map((t) => (
                        <span key={t} className="tag mono">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* pinned footer row */}
              <div className="cornerRow">
                <div className="miniLabel mono dim">
                    <span className="miniNum">{String(idx).padStart(2, "0")}</span>
                  </div>
                <span className="corner mono">{p.primary.label}</span>
              </div>
            </a>
          );
        })}
      </section>
    </main>
  );
}
