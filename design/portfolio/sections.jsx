/* Portfolio sections + 3 Hero variants. Exposes window.Sections */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ---------- small primitives ---------- */
function Eyebrow({ children }) {
  return <span className="eyebrow"><span className="eyebrow-dot"></span>{children}</span>;
}

function SectionHeader({ num, kicker, title }) {
  return (
    <div className="sec-head">
      <div className="sec-kicker"><span className="sec-num">{num}</span>{kicker}</div>
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRefS(null);
  const [vis, setVis] = useStateS(false);
  useEffectS(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${vis ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SocialRow({ t, compact }) {
  const links = [
    { label: "GitHub", href: t.github },
    { label: "LinkedIn", href: t.linkedin },
    { label: "Email", href: "mailto:" + t.email },
  ];
  return (
    <div className={`social-row ${compact ? "compact" : ""}`}>
      {links.map((l) => (
        <a key={l.label} className="social-link" href={l.href} target="_blank" rel="noreferrer">
          {l.label}<span className="arrow">↗</span>
        </a>
      ))}
    </div>
  );
}

function Terminal({ lines }) {
  return (
    <div className="terminal" role="img" aria-label="terminal">
      <div className="term-bar">
        <span className="term-dot"></span><span className="term-dot"></span><span className="term-dot"></span>
        <span className="term-title">~/kauan — zsh</span>
      </div>
      <div className="term-body">
        {lines.map((ln, i) => {
          const isCmd = ln.startsWith("$");
          const isStatus = ln.startsWith("●");
          return (
            <div key={i} className={`term-line ${isCmd ? "cmd" : ""} ${isStatus ? "status" : ""}`}>
              {ln}
            </div>
          );
        })}
        <div className="term-cursor"><span className="caret"></span></div>
      </div>
    </div>
  );
}

function CTAButtons({ t }) {
  return (
    <div className="cta-row">
      <a className="btn btn-primary" href="#work">{t.hero.ctaPrimary}<span className="arrow">→</span></a>
      <a className="btn btn-ghost" href={t.cv} download>{t.hero.ctaSecondary}<span className="dl">↓</span></a>
    </div>
  );
}

function Stats({ stats }) {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-val">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- HERO variants ---------- */
function Hero({ t, variant }) {
  if (variant === "B") return <HeroSplit t={t} />;
  if (variant === "C") return <HeroEditorial t={t} />;
  return <HeroCentered t={t} />;
}

function HeroCentered({ t }) {
  return (
    <header className="hero hero-centered" id="top">
      <Reveal><Eyebrow>{t.hero.eyebrow}</Eyebrow></Reveal>
      <Reveal delay={80}><h1 className="hero-title center">{t.hero.headline}</h1></Reveal>
      <Reveal delay={160}><p className="hero-sub center">{t.hero.sub}</p></Reveal>
      <Reveal delay={240}><CTAButtons t={t} /></Reveal>
      <Reveal delay={320}><Stats stats={t.hero.stats} /></Reveal>
      <Reveal delay={400}><SocialRow t={t} /></Reveal>
    </header>
  );
}

function HeroSplit({ t }) {
  return (
    <header className="hero hero-split" id="top">
      <div className="hero-split-left">
        <Reveal><Eyebrow>{t.hero.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h1 className="hero-title">{t.hero.headline}</h1></Reveal>
        <Reveal delay={160}><p className="hero-sub">{t.hero.sub}</p></Reveal>
        <Reveal delay={240}><CTAButtons t={t} /></Reveal>
        <Reveal delay={320}><SocialRow t={t} compact /></Reveal>
      </div>
      <div className="hero-split-right">
        <Reveal delay={200}><Terminal lines={t.hero.terminalLines} /></Reveal>
        <Reveal delay={320}><Stats stats={t.hero.stats} /></Reveal>
      </div>
    </header>
  );
}

function HeroEditorial({ t }) {
  return (
    <header className="hero hero-editorial" id="top">
      <div className="hero-ed-rail">
        <span className="rail-text">{t.role.toUpperCase()}</span>
        <span className="rail-line"></span>
        <span className="rail-text dim">{t.location}</span>
      </div>
      <div className="hero-ed-main">
        <Reveal><Eyebrow>{t.hero.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 className="hero-name">
            <span>{t.fullName.split(" ").slice(0, 2).join(" ")}</span>
            <span className="outline">{t.fullName.split(" ").slice(2).join(" ") || t.role}</span>
          </h1>
        </Reveal>
        <Reveal delay={180}><p className="hero-sub wide">{t.hero.sub}</p></Reveal>
        <Reveal delay={260}><CTAButtons t={t} /></Reveal>
      </div>
      <div className="hero-ed-footer">
        <Reveal delay={340}><Stats stats={t.hero.stats} /></Reveal>
        <Reveal delay={420}><SocialRow t={t} compact /></Reveal>
      </div>
    </header>
  );
}

/* ---------- WORK ---------- */
function WorkSection({ t }) {
  return (
    <section className="section" id="work">
      <SectionHeader num="01" kicker={t.workKicker} title={t.workTitle} />
      <div className="timeline">
        {t.work.map((job, i) => (
          <Reveal key={i} delay={i * 70} className="tl-item-wrap">
            <article className="tl-item glass">
              <div className="tl-marker"><span className={`tl-dot ${job.current ? "live" : ""}`}></span></div>
              <div className="tl-content">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-role">{job.role}</h3>
                    <div className="tl-company">{job.company} <span className="tl-place">· {job.place}</span></div>
                  </div>
                  <div className="tl-period">{job.period}{job.current && <span className="badge-live">●</span>}</div>
                </div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="tag-row">
                  {job.tags.map((tg) => <span className="tag" key={tg}>{tg}</span>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function SkillsSection({ t }) {
  return (
    <section className="section" id="skills">
      <SectionHeader num="02" kicker={t.skillsKicker} title={t.skillsTitle} />
      <div className="skills-grid">
        {t.skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 60}>
            <div className="skill-card glass">
              <div className="skill-label"><span className="sec-num">{String(i + 1).padStart(2, "0")}</span>{g.label}</div>
              <div className="chip-row">
                {g.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function ProjectsSection({ t }) {
  return (
    <section className="section" id="projects">
      <SectionHeader num="03" kicker={t.projectsKicker} title={t.projectsTitle} />
      <div className="proj-note">{t.projectsNote}</div>
      <div className="proj-grid">
        {t.projects.map((p, i) => (
          <Reveal key={i} delay={i * 70}>
            <article className="proj-card glass">
              <div className="proj-img">
                <span className="proj-slot-label">{p.slot}</span>
              </div>
              <div className="proj-body">
                <div className="proj-idx">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((tg) => <span className="tag" key={tg}>{tg}</span>)}
                </div>
                <a className="proj-link" href="#">View project <span className="arrow">↗</span></a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- EDUCATION ---------- */
function EducationSection({ t }) {
  return (
    <section className="section" id="education">
      <SectionHeader num="04" kicker={t.educationKicker} title={t.educationTitle} />
      <div className="edu-wrap">
        {t.education.map((e, i) => (
          <Reveal key={i}>
            <article className="edu-card glass">
              <div className="edu-left">
                <h3 className="edu-course">{e.course}</h3>
                <div className="edu-school">{e.school}</div>
                <div className="edu-place">{e.place}</div>
              </div>
              <div className="edu-right">
                <span className="edu-status">{e.status}</span>
                <span className="edu-period">{e.period}</span>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={100}>
          <div className="lang-strip glass">
            {t.languages.map((l) => (
              <div className="lang-item" key={l.name}>
                <span className="lang-name">{l.name}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactSection({ t }) {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="contact-card glass">
          <Eyebrow>{t.available}</Eyebrow>
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-sub">{t.contactSub}</p>
          <div className="cta-row center-cta">
            <a className="btn btn-primary" href={"mailto:" + t.email}>{t.contactCta}<span className="arrow">→</span></a>
            <a className="btn btn-ghost" href={t.cv} download>{t.cvCta}<span className="dl">↓</span></a>
          </div>
          <div className="contact-meta">
            <a href={"mailto:" + t.email}>{t.email}</a>
            <span className="dot-sep">·</span>
            <a href={"tel:" + t.phone.replace(/\s/g, "")}>{t.phone}</a>
            <span className="dot-sep">·</span>
            <span>{t.location}</span>
          </div>
          <SocialRow t={t} />
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <span className="footer-mark">{t.initials}</span>
      <span className="footer-note">{t.footerNote}</span>
      <a className="footer-top" href="#top">↑ Top</a>
    </footer>
  );
}

window.Sections = {
  Hero, WorkSection, SkillsSection, ProjectsSection, EducationSection, ContactSection, Footer,
};
