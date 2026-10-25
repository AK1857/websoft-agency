import { ArrowUpRight, ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-badge">
          <span className="pulse"></span>
          Digital solutions for ambitious businesses
        </div>

        <h1>
          We build{" "}
          <span className="hero-highlight">
            digital products
          </span>{" "}
          that move businesses forward.
        </h1>

        <p className="hero-description">
          From high-converting websites to scalable web apps
          and smart automation — we turn ideas into reliable
          technology that delivers real business value.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Start a project
            <ArrowUpRight size={17} />
          </a>

          <a href="#work" className="btn-secondary">
            Explore our work
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-stats">

          <div className="stat">
            <strong>50+</strong>
            <span>Projects delivered</span>
          </div>

          <div className="stat">
            <strong>98%</strong>
            <span>Client satisfaction</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>Technical support</span>
          </div>

        </div>
      </div>

      <div className="hero-visual">

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="hero-orb">
          <div className="orb-inner">
            W
          </div>
        </div>

        <div className="floating-card code-card">
          <span>BUILD</span>

          <code>
            <i>&lt;</i>digital<i>/&gt;</i>
          </code>

          <div className="progress">
            <span></span>
          </div>
        </div>

        <div className="floating-card growth-card">
          <div className="growth-icon">
            ↗
          </div>

          <div>
            <small>Business growth</small>
            <strong>+42.8%</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
