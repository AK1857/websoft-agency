import { ArrowUpRight, Check } from "lucide-react";

const strengths = [
"Solutions tailored to your business goals",
"Modern, scalable technology",
"Transparent communication",
"Reliable support after launch",
];

function About() {
return ( <section className="about section" id="about"> <div className="about-content"> <span className="section-tag">
04 — About WebSoft </span>

```
    <h2>
      Your technology partner,
      <br />
      <em>not just a service provider.</em>
    </h2>

    <p className="about-description">
      We help businesses turn ideas into dependable
      digital products. From websites and web
      applications to cloud solutions and ongoing
      IT support, we focus on technology that solves
      real problems and creates lasting value.
    </p>

    <div className="about-strengths">
      {strengths.map((strength) => (
        <div className="about-strength" key={strength}>
          <span className="check-icon">
            <Check size={15} />
          </span>
          <span>{strength}</span>
        </div>
      ))}
    </div>

    <a href="#contact" className="btn-primary about-cta">
      Let's work together
      <ArrowUpRight size={17} />
    </a>
  </div>

  <div className="about-visual">
    <div className="about-visual-inner">
      <span className="about-label">OUR APPROACH</span>

      <div className="about-big-mark">W.</div>

      <p>
        Good technology should make business
        simpler, faster and better.
      </p>

      <div className="about-bottom">
        <span>IDEAS INTO IMPACT</span>
        <span className="about-dot" />
      </div>
    </div>
  </div>
</section>

);
}

export default About;
