import { useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Project management and coordination",
    body: "Planning, scheduling, budgets, stakeholder engagement, field coordination and client reporting.",
  },
  {
    title: "Assessments, studies and research",
    body: "Baselines, feasibility and value-chain studies, household and institutional surveys, focus group discussions and key informant interviews, risk and SWOT analysis.",
  },
  {
    title: "Water and wastewater engineering",
    body: "Feasibility studies, rainwater harvesting and drainage design.",
  },
  {
    title: "Environmental and climate services",
    body: "Environmental and social impact assessments, flood risk assessment, catchment and flood-zone mapping, climate resilience planning.",
  },
  {
    title: "Waste management and circular economy",
    body: "Faecal sludge management, composting, recycling and materials recovery, life cycle assessment.",
  },
  {
    title: "Monitoring, GIS and data",
    body: "Monitoring and evaluation frameworks, performance dashboards, GIS mapping and data files clients can reuse.",
  },
  {
    title: "Training and capacity building",
    body: "Training manuals, SOPs, training of trainers, and business skills for artisans and service providers.",
  },
];

const values = [
  {
    name: "Field-led",
    text: "What we see in communities leads the analysis, and the data backs it up.",
  },
  {
    name: "Whole value chain",
    text: "We look past the first step, from access and containment to treatment and reuse.",
  },
  {
    name: "Inclusive by design",
    text: "Gender and social inclusion are built into project design, not added at the end.",
  },
  {
    name: "Accountable delivery",
    text: "Clear milestones, honest reporting and work handed over in a form clients can use.",
  },
];

const steps = [
  {
    name: "Assess",
    text: "Visit the field, listen to communities and gather the data the decision needs.",
  },
  {
    name: "Plan",
    text: "Agree scope, milestones, budget and risks with the client before work starts.",
  },
  {
    name: "Deliver",
    text: "Coordinate teams and partners on the ground and report progress against the plan.",
  },
  {
    name: "Learn",
    text: "Measure results, hand over tools and capture lessons for the next phase.",
  },
];

const sectors = [
  {
    name: "Water, sanitation and hygiene",
    text: "Sanitation markets, ODF sustainability, water quality and supply.",
  },
  {
    name: "Waste and recycling",
    text: "Faecal sludge, solid waste, composting and materials recovery.",
  },
  {
    name: "Environment and climate",
    text: "Impact assessment, flood risk and climate adaptation.",
  },
  {
    name: "Development programmes",
    text: "Delivery support for NGOs, donors and local assemblies.",
  },
];

function fadeUp(reduce: boolean | null) {
  if (reduce) {
    return { initial: false, whileInView: undefined, transition: undefined };
  }
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function App() {
  const reduce = useReducedMotion();
  const [navOpen, setNavOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:mkwganyo@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus("Opening your email client…");
  }

  const reveal = fadeUp(reduce);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="hero" id="top">
        <nav className="site-nav" aria-label="Primary">
          <a className="nav-brand" href="#top">
            GS Goryu Projects
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((v) => !v)}
          >
            Menu
          </button>
          <ul
            id="primary-nav"
            className={`nav-links${navOpen ? " open" : ""}`}
          >
            <li>
              <a href="#about" onClick={() => setNavOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setNavOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#approach" onClick={() => setNavOpen(false)}>
                Approach
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setNavOpen(false)}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero-media" aria-hidden="true">
          <motion.img
            src="/images/hero.jpg"
            alt=""
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-content">
          <motion.h1
            className="hero-brand"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            GS Goryu Projects
            <span>Ltd · Accra, Ghana</span>
          </motion.h1>
          <motion.p
            className="hero-headline"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Where disciplines meet, projects move.
          </motion.p>
          <motion.p
            className="hero-support"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            We plan, manage and deliver water, sanitation, waste and
            environmental projects — from the first assessment to the final
            report.
          </motion.p>
          <motion.div
            className="cta-group"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="btn btn-primary" href="#contact">
              Start a conversation
            </a>
            <a className="btn btn-ghost" href="#services">
              View services
            </a>
          </motion.div>
        </div>
      </header>

      <main id="main">
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-inner about">
            <motion.div className="about-copy" {...reveal}>
              <p className="section-label">About us</p>
              <h2 className="section-title" id="about-title">
                One team from assessment to handover
              </h2>
              <p className="section-lead">
                GS Goryu Projects Ltd is a Ghanaian project management and
                environmental consulting firm based in Accra. We give
                development partners, government agencies and businesses a team
                that can assess a problem, plan the response and manage delivery
                on the ground.
              </p>
              <div className="about-meaning">
                <strong>Gōryū (合流)</strong>
                <p>
                  Japanese for confluence — the point where two streams meet and
                  flow on as one. Our name describes what we do: bring
                  disciplines, ideas and partners together into one current.
                </p>
              </div>
              <div className="vision-mission">
                <div>
                  <h3>Vision</h3>
                  <p>
                    Communities across Ghana served by water, sanitation and
                    environmental systems that work and keep working.
                  </p>
                </div>
                <div>
                  <h3>Clients we serve</h3>
                  <p>
                    Development partners, government agencies and businesses
                    that need field assessment, planning and on-the-ground
                    delivery in one team.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="about-visual"
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/images/about.jpg"
                alt="Savanna landscape at sunset — place and environment that ground our work in Ghana"
              />
            </motion.div>
          </div>

          <motion.div
            className="section-inner values"
            {...reveal}
          >
            <h3 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              How we work
            </h3>
            <ul className="values-list">
              {values.map((v) => (
                <li key={v.name}>
                  <strong>{v.name}</strong>
                  <span>{v.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section
          className="section services"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-inner">
            <motion.div {...reveal}>
              <p className="section-label">Services</p>
              <h2 className="section-title" id="services-title">
                Seven lines across the project cycle
              </h2>
              <p className="section-lead">
                We cover the stages a project moves through — from the first
                study to training the people who keep systems running.
              </p>
            </motion.div>
            <ol className="service-list">
              {services.map((s, i) => (
                <motion.li
                  className="service-item"
                  key={s.title}
                  {...reveal}
                  transition={{
                    duration: 0.55,
                    delay: reduce ? 0 : i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="service-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="section-inner approach-layout">
            <motion.div {...reveal}>
              <p className="section-label">Approach</p>
              <h2 className="section-title" id="approach-title">
                Four steps, every assignment
              </h2>
              <p className="section-lead">
                We keep a small core team and bring in associate specialists —
                GESI, GIS and engineering experts — so the right skills sit on
                every job.
              </p>
              <ol className="steps">
                {steps.map((s, i) => (
                  <li className="step" key={s.name}>
                    <span className="step-index" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3>{s.name}</h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="sectors">
                <h3>Sectors</h3>
                <ul className="sector-list">
                  {sectors.map((s) => (
                    <li key={s.name}>
                      <strong>{s.name}.</strong> {s.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="approach-visual"
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/images/water.jpg"
                alt="Water cascading into a clear forest pool — the natural systems our projects protect and improve"
              />
            </motion.div>
          </div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="section-inner">
            <motion.div {...reveal}>
              <p className="section-label">Selected work</p>
              <h2 className="section-title" id="work-title">
                Assignments underway and completed
              </h2>
              <p className="section-lead">
                A short view of current and recent work. We publish fuller case
                material as clients allow.
              </p>
            </motion.div>
            <ul className="work-list">
              <motion.li className="work-item" {...reveal}>
                <p className="work-meta">GIZ · Koforidua &amp; Takoradi</p>
                <h3>Training of tutors in recycling operations</h3>
                <p>
                  Preparation of training materials and training of tutors in
                  recycling operations for technical institutions.
                </p>
              </motion.li>
              <motion.li className="work-item" {...reveal}>
                <p className="work-meta">Savelugu, Northern Region</p>
                <h3>Savelugu dam restoration</h3>
                <p>
                  Dam restoration assignment in Savelugu. Client and delivery
                  detail to be confirmed for public release.
                </p>
              </motion.li>
              <motion.li className="work-item" {...reveal}>
                <p className="work-meta">Upcoming · late 2026</p>
                <h3>WSUP water assessment</h3>
                <p>
                  A further WSUP water assessment is expected to start in late
                  2026, with Vanessa as water quality expert.
                </p>
              </motion.li>
            </ul>
            <p className="work-note">
              Project pages will grow as we clear more assignments for public
              sharing. Until then, ask us directly for relevant experience.
            </p>
          </div>
        </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-inner contact-grid">
            <motion.div {...reveal}>
              <p className="section-label">Contact</p>
              <h2 className="section-title" id="contact-title">
                Tell us about the assignment
              </h2>
              <p className="section-lead">
                Based in Accra. Reach the team by phone, email or the form —
                we reply with next steps, not a brochure dump.
              </p>
              <dl className="contact-details">
                <div>
                  <dt>Office</dt>
                  <dd>
                    GHS Estates, Willow Court, Satellite, Accra
                    <br />
                    GPS: GW-0794-3775
                  </dd>
                </div>
                <div>
                  <dt>Postal</dt>
                  <dd>P.O. Box OS 01983, Osu, Accra</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+233245706531">+233 24 570 6531</a>
                    <br />
                    <a href="tel:+233271407827">+233 27 140 7827</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:mkwganyo@gmail.com">mkwganyo@gmail.com</a>
                    <br />
                    <a href="mailto:vanessadeyegbe@gmail.com">
                      vanessadeyegbe@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={onSubmit}
              {...reveal}
              aria-label="Send an enquiry"
            >
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Scope, location, timing…"
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Send enquiry
              </button>
              {formStatus ? (
                <p className="form-status" role="status">
                  {formStatus}
                </p>
              ) : null}
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">GS Goryu Projects Ltd</div>
            <p>Private company limited by shares · Accra, Ghana</p>
          </div>
          <p>© {new Date().getFullYear()} GS Goryu Projects Ltd</p>
        </div>
      </footer>
    </>
  );
}
