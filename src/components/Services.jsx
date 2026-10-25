import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section
      className="services section"
      id="services"
    >

      <div className="section-heading">

        <div>

          <span className="section-tag">
            01 — What we do
          </span>

          <h2>
            Technology that works
            <br />
            <em>for your business.</em>
          </h2>

        </div>

        <p>
          We combine strategy, design and engineering
          to create digital experiences that are fast,
          scalable and built around your goals.
        </p>

      </div>


      <div className="services-grid">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
}

export default Services;