/* Main app: nav, control dock, assembly. Mounts #root */
const { useState, useEffect } = React;
const { Hero, WorkSection, SkillsSection, ProjectsSection, EducationSection, ContactSection, Footer } = window.Sections;

const LS = {
  get(k, d) { try { const v = localStorage.getItem("kf_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("kf_" + k, JSON.stringify(v)); } catch (e) {} },
};

function Seg({ options, value, onChange }) {
  return (
    <div className="seg" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          className={`seg-btn ${value === o.value ? "on" : ""}`}
          onClick={() => onChange(o.value)}
          role="tab"
          aria-selected={value === o.value}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function TopNav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const items = [
    { id: "work", label: t.nav.work },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <nav className={`topnav ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top">
        <span className="brand-mark">{t.initials}</span>
        <span className="brand-name">{t.name}<span className="brand-role">{t.role}</span></span>
      </a>
      <div className="nav-links">
        {items.map((it) => <a key={it.id} href={"#" + it.id}>{it.label}</a>)}
      </div>
      <div className="nav-right">
        <div className="lang-toggle">
          <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
          <span className="lang-div">/</span>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <a className="nav-cv" href={t.cv} download>CV<span className="dl">↓</span></a>
      </div>
    </nav>
  );
}

function ControlDock({ t, mode, setMode, variant, setVariant, intensity, setIntensity, open, setOpen }) {
  return (
    <div className={`dock ${open ? "open" : ""}`}>
      <button className="dock-toggle" onClick={() => setOpen(!open)} aria-label="Toggle controls">
        <span className="dock-toggle-icon">{open ? "×" : "✦"}</span>
        {!open && <span className="dock-toggle-label">Estilo</span>}
      </button>
      {open && (
        <div className="dock-panel">
          <div className="dock-head">
            <span className="dock-title">Live preview</span>
            <span className="dock-hint">escolha o seu favorito</span>
          </div>
          <div className="dock-group">
            <label className="dock-label">{t.ui.bgLabel}</label>
            <Seg
              options={[{ value: "aura", label: t.ui.aura }, { value: "chrome", label: t.ui.chrome }]}
              value={mode}
              onChange={setMode}
            />
          </div>
          <div className="dock-group">
            <label className="dock-label">{t.ui.heroLabel}</label>
            <Seg
              options={[{ value: "A", label: "Centro" }, { value: "B", label: "Split" }, { value: "C", label: "Editorial" }]}
              value={variant}
              onChange={setVariant}
            />
          </div>
          <div className="dock-group">
            <label className="dock-label">Movimento <span className="dock-val">{Math.round(intensity * 100)}</span></label>
            <input
              className="dock-range"
              type="range" min="0" max="100" step="5"
              value={Math.round(intensity * 100)}
              onChange={(e) => setIntensity(parseInt(e.target.value, 10) / 100)}
            />
          </div>
          <div className="dock-group">
            <label className="dock-label">{t.ui.langLabel}</label>
            <Seg
              options={[{ value: "pt", label: "Português" }, { value: "en", label: "English" }]}
              value={t.lang}
              onChange={(v) => window.__setLang(v)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(LS.get("lang", "pt"));
  const [mode, setMode] = useState(LS.get("mode", "aura"));
  const [variant, setVariant] = useState(LS.get("variant", "B"));
  const [intensity, setIntensity] = useState(LS.get("intensity", 0.55));
  const [dockOpen, setDockOpen] = useState(LS.get("dockOpen", true));

  useEffect(() => { LS.set("lang", lang); }, [lang]);
  useEffect(() => { LS.set("mode", mode); }, [mode]);
  useEffect(() => { LS.set("variant", variant); }, [variant]);
  useEffect(() => { LS.set("intensity", intensity); }, [intensity]);
  useEffect(() => { LS.set("dockOpen", dockOpen); }, [dockOpen]);

  window.__setLang = setLang;
  const t = window.PORTFOLIO[lang];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <div className="app">
      <window.BackgroundCanvas mode={mode} intensity={intensity} />
      <div className="content">
        <TopNav t={t} lang={lang} setLang={setLang} />
        <main className="main">
          <Hero t={t} variant={variant} />
          <WorkSection t={t} />
          <SkillsSection t={t} />
          <ProjectsSection t={t} />
          <EducationSection t={t} />
          <ContactSection t={t} />
        </main>
        <Footer t={t} />
      </div>
      <ControlDock
        t={t} mode={mode} setMode={setMode}
        variant={variant} setVariant={setVariant}
        intensity={intensity} setIntensity={setIntensity}
        open={dockOpen} setOpen={setDockOpen}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
