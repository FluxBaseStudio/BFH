"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Strona główna", href: "#top" },
  { label: "Usługi", href: "#services" },
  { label: "O nas", href: "#about" },
  { label: "Realizacje", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const services = [
  { title: "Wykończenia", icon: "✦" },
  { title: "Elewacje", icon: "⌂" },
  { title: "Remont łazienek", icon: "▣" },
  { title: "Malowanie pomieszczeń", icon: "▰" },
  { title: "Renowacja kamienic", icon: "◇" },
  { title: "Stany surowe", icon: "▥" },
  { title: "Mycie budynków", icon: "◌" },
  { title: "Murowanie", icon: "▤" },
  { title: "Stropy", icon: "═" },
  { title: "Ścianki działowe", icon: "▯" },
  { title: "Układanie kostki brukowej", icon: "▦" },
  { title: "Wieńce", icon: "▱" },
  { title: "Słupy i schody", icon: "▟" },
];

const projects = [
  {
    title: "Dom jednorodzinny",
    type: "Stan surowy",
    image: "/images/bullet-family-houseproject-house",
  },
  {
    title: "Remont łazienki",
    type: "Wykończenie premium",
    image: "/images/bullet-family-houseproject-bathroom",
  },
  {
    title: "Renowacja kamienicy",
    type: "Prace elewacyjne",
    image: "/images/bullet-family-houseproject-tenement",
  },
  {
    title: "Kostka brukowa",
    type: "Podjazdy i tarasy",
    image: "/images/bullet-family-houseproject-paving",
  },
];

const stats = [
  ["10+", "lat doświadczenia"],
  ["500+", "zrealizowanych prac"],
  ["100%", "zaangażowania"],
  ["24h", "kontakt po zgłoszeniu"],
];

const phoneContacts = [
  {
    name: "Łukasz",
    scope: "kostka i elewacje",
    phone: "+48 666 610 480",
    href: "tel:+48666610480",
  },
  {
    name: "Robert",
    scope: "stany surowe",
    phone: "+48 787 001 307",
    href: "tel:+48787001307",
  },
  {
    name: "Robert",
    scope: "elewacje i wykończenia",
    phone: "+48 516 588 349",
    href: "tel:+48516588349",
  },
];

function imageStack(basePath: string) {
  return `linear-gradient(135deg, rgba(255, 118, 40, 0.1), rgba(0, 0, 0, 0.08)), url(${basePath}.png), url(${basePath}.jpg), url(${basePath}.jpeg), url(${basePath}.webp)`;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-lock", menuOpen);
    return () => document.body.classList.remove("menu-lock");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="site-shell">
      {menuOpen && (
        <button
          className="menu-backdrop"
          aria-label="Zamknij menu"
          onClick={closeMenu}
        />
      )}

      <nav className="navbar" aria-label="Główna nawigacja">
        <a className="brand brand-logo-link" href="#top" aria-label="Bullet Family House">
          <span className="brand-logo-shell">
            <img
              className="brand-logo"
              src="/images/bullet-family-house-logo.png"
              alt="Bullet Family House"
            />
          </span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "is-active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div id="site-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Zadzwoń
          </a>
        </div>
      </nav>

      <section id="top" className="hero section-dark">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Bullet Family House</p>
            <h1>Nowoczesne budownictwo i wykończenia</h1>
            <p className="hero-text">
              Kompleksowe usługi budowlane od fundamentów po perfekcyjne
              wykończenia. Pracujemy dokładnie, terminowo i z dbałością o każdy
              detal inwestycji.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Zobacz realizacje
              </a>
              <a className="secondary-button" href="#contact">
                Numery telefonu
              </a>
            </div>
          </Reveal>

          <Reveal delay={160} className="hero-card">
            <span>Zakres prac</span>
            <strong>od stanu surowego po gotowe wnętrze</strong>
            <p>
              Murowanie, stropy, elewacje, łazienki, malowanie, kostka brukowa,
              renowacje i wykończenia.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section section-light">
        <div className="container">
          <Reveal className="section-heading center">
            <p className="eyebrow">Usługi</p>
            <h2>Kompleksowa oferta usług budowlanych</h2>
            <p>
              Jeden zespół, wiele specjalizacji. Dzięki temu projekt można
              poprowadzić spójnie od pierwszych prac po ostatni detal.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 35}>
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="split-section">
        <div className="split-copy">
          <Reveal>
            <p className="eyebrow">O nas</p>
            <h2>Doświadczenie. Precyzja. Jakość.</h2>
            <p>
              Bullet Family House to ekipa, która łączy solidne wykonanie z
              nowoczesnym podejściem do estetyki. Stawiamy na czyste
              prowadzenie prac, jasną komunikację i efekt, który dobrze wygląda
              nie tylko w dniu odbioru.
            </p>

            <div className="check-list">
              <span>Dokładna realizacja ustalonego zakresu</span>
              <span>Estetyka dopracowana w detalach</span>
              <span>Terminowość i odpowiedzialność</span>
              <span>Rozwiązania dopasowane do budynku</span>
            </div>

            <a className="outline-button" href="#contact">
              Porozmawiajmy o inwestycji
            </a>
          </Reveal>
        </div>

        <div
          className="split-image about-image"
          role="img"
          aria-label="Nowoczesne wnętrze po wykończeniu"
        />
      </section>

      <section id="projects" className="section section-light projects-section">
        <div className="container">
          <Reveal className="section-heading center">
            <p className="eyebrow">Realizacje</p>
            <h2>Zobacz przykładowe prace</h2>
            <p>
              Wybrane typy realizacji pokazujące pełny zakres prac: od konstrukcji
              po detale wykończeniowe i prace zewnętrzne.
            </p>
          </Reveal>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 70}>
                <article className="project-card">
                  <div
                    className="project-image"
                    role="img"
                    aria-label={`${project.title} - ${project.type}`}
                    style={{ backgroundImage: imageStack(project.image) }}
                  />
                  <div className="project-body">
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                    <span>Zobacz więcej →</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section section-dark">
        <div className="container">
          <Reveal className="section-heading center light">
            <p className="eyebrow">Dlaczego my?</p>
            <h2>Solidny partner w budownictwie</h2>
          </Reveal>

          <div className="stats-grid">
            {stats.map(([number, label], index) => (
              <Reveal key={label} delay={index * 70}>
                <div className="stat-card">
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-copy">
            <p className="eyebrow">Kontakt</p>
            <h2>Numery telefonu</h2>
            <p>
              Wybierz osobę odpowiedzialną za konkretny zakres prac i zadzwoń
              bezpośrednio. Dzięki temu szybciej ustalimy szczegóły inwestycji.
            </p>

            <div className="phone-list" aria-label="Numery telefonu">
              {phoneContacts.map((contact) => (
                <a className="phone-card" href={contact.href} key={contact.href}>
                  <span className="phone-card-icon" aria-hidden="true">
                    ☎
                  </span>
                  <span>
                    <strong>
                      {contact.name} - {contact.scope}
                    </strong>
                    <small>{contact.phone}</small>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Imię i nazwisko"
                  autoComplete="name"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  autoComplete="tel"
                  required
                />
              </div>
              <input
                type="text"
                name="city"
                placeholder="Miejscowość"
                autoComplete="address-level2"
              />
              <textarea
                name="message"
                placeholder="Napisz o swoim projekcie..."
                required
              />
              <label className="consent">
                <input type="checkbox" required />
                <span>Wyrażam zgodę na kontakt telefoniczny w sprawie zapytania.</span>
              </label>
              <button type="submit" className="primary-button full">
                Wyślij zapytanie
              </button>

              {formSent && (
                <p className="form-note">
                  Formularz wizualnie działa. Do faktycznej wysyłki podepniemy
                  później API lub usługę mailową.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-logo-link" href="#top" aria-label="Bullet Family House">
              <img
                className="footer-logo"
                src="/images/bullet-family-house-logo.png"
                alt="Bullet Family House"
              />
            </a>
            <p>
              Kompleksowe usługi budowlane: wykończenia, remonty, elewacje,
              murowanie, stany surowe i prace zewnętrzne.
            </p>
          </div>

          <div>
            <h4>Menu</h4>
            <a href="#services">Usługi</a>
            <a href="#about">O nas</a>
            <a href="#projects">Realizacje</a>
            <a href="#contact">Kontakt</a>
          </div>

          <div>
            <h4>Usługi</h4>
            <a href="#services">Wykończenia</a>
            <a href="#services">Elewacje</a>
            <a href="#services">Stany surowe</a>
            <a href="#services">Kostka brukowa</a>
          </div>

          <div>
            <h4>Telefon</h4>
            {phoneContacts.map((contact) => (
              <a href={contact.href} key={contact.href}>
                {contact.name}: {contact.phone}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Bullet Family House. Wszelkie prawa zastrzeżone.</span>
          <span>Polityka prywatności · Regulamin</span>
        </div>
      </footer>
    </main>
  );
}
