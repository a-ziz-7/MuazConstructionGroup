import EstimateForm from "../components/EstimateForm";
import { business, projects, services } from "../config/business";

function ContactLinks({ className = "" }) {
  return (
    <div className={`contact-links ${className}`}>
      <a href={business.phoneLink}>{business.phone}</a>
      <a href={business.emailLink}>{business.email}</a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-contact">
          <span>Serving {business.serviceArea}</span>
          <ContactLinks />
        </div>
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label={`${business.name} home`}>
            <img src="/assets/logo.png" alt={`${business.name} logo`} />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary nav-cta" href="#estimate">
            Request an Estimate
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Quality craftsmanship <span aria-hidden="true">•</span>{" "}
                {business.serviceArea}
              </p>
              <h1>Build. Renovate. Improve.</h1>
              <p className="lead">
                {business.name} brings thoughtful construction and home
                remodeling to the New York Metro area. From kitchen and bathroom
                renovations to the finishing details, we help make your space
                work better for you.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#estimate">
                  Request an Estimate
                </a>
                <a className="btn btn-secondary" href="#projects">
                  View Our Work
                </a>
              </div>
              <div className="hero-contact">
                <span>Talk through your project</span>
                <ContactLinks />
              </div>
            </div>
            <div
              className="hero-visual"
              aria-label="Featured kitchen renovation project"
            >
              <div className="image-card main-card">
                <img
                  src="/assets/images/kitchen-renovation.jpeg"
                  alt="Kitchen renovation with wood cabinetry and updated finishes"
                  fetchPriority="high"
                />
              </div>
              <div className="floating-badge">
                <span className="badge-label">New York Metro</span>
                <strong>Construction & Home Remodeling</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Service highlights">
          <div className="container trust-inner">
            <span>Kitchen & bath remodeling</span>
            <span>Flooring & tile installation</span>
            <span>Custom carpentry</span>
            <span>Painting & drywall repair</span>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-grid">
            <div className="about-media">
              <img
                src="/assets/images/living-room-before-after.jpeg"
                alt="Bathroom renovation with updated wall tile and fixtures"
                loading="lazy"
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow-dark">About MUAZ</p>
              <h2>Considered improvements, built around your home.</h2>
              <p>
                Every home has its own needs. We take time to understand your
                priorities, then bring practical planning and careful
                craftsmanship to the construction and remodeling work.
              </p>
              <p>
                Serving the New York Metro area, our work includes kitchen and
                bathroom remodeling, flooring and tile installation, custom
                carpentry, painting, drywall repair, and general home
                improvements.
              </p>
              <a className="text-link" href="#contact">
                Get in touch about your project{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">What we do</p>
              <h2>Construction and remodeling for better everyday spaces.</h2>
              <p>
                Explore home improvement services available across the New York
                Metro area.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="icon" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section gallery-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Project gallery</p>
              <h2>Real spaces. Thoughtful improvements.</h2>
              <p>
                A selection of kitchen, bathroom, and interior home improvement
                projects.
              </p>
            </div>
            <div className="gallery-grid">
              {projects.map((project) => (
                <figure
                  className={`gallery-card ${project.className}`}
                  key={project.image}
                >
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <figcaption>{project.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">How we work</p>
              <h2>
                A straightforward process, from first conversation to finish.
              </h2>
            </div>
            <div className="process-grid">
              {[
                {
                  title: "Discuss",
                  description:
                    "Tell us what you want to improve, your priorities, and your timing.",
                },
                {
                  title: "Plan",
                  description:
                    "Review the project scope and align on a practical approach before work begins.",
                },
                {
                  title: "Build",
                  description:
                    "We coordinate the agreed construction and remodeling work with care.",
                },
                {
                  title: "Complete",
                  description:
                    "Walk through the finished work and take care of the final details.",
                },
              ].map((step, index) => (
                <div className="process-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section video-section">
          <div className="container video-wrap">
            <div className="video-copy">
              <p className="eyebrow">Project overview</p>
              <h2>See the details come together.</h2>
              <p>
                Take a look at project footage from the home improvements and
                renovations we work on.
              </p>
            </div>
            <div className="video-player">
              <video
                controls
                playsInline
                preload="metadata"
                // poster="/assets/images/kitchen-renovation.jpeg"
                aria-label="MUAZ Construction Group project overview video"
              >
                <source
                  src="/assets/videos/project-overview.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-wrap">
            <div className="contact-intro">
              <p className="eyebrow">Let’s talk</p>
              <h2>Planning a home improvement in the New York Metro area?</h2>
              <p>
                Contact {business.name} to discuss construction, remodeling, or
                repairs for your home.
              </p>
              <ContactLinks className="contact-links--large" />
            </div>
            <div id="estimate" className="estimate-card">
              <h3>Request an estimate</h3>
              <p>
                Share a few details and we’ll prepare an email draft for you to
                review.
              </p>
              <EstimateForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top">
            <img src="/assets/logo.png" alt="" />
            <span>Build • Renovate • Improve</span>
          </a>
          <ContactLinks className="footer-contact" />
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
        </div>
      </footer>
    </>
  );
}
