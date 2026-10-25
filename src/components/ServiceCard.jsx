import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">

      <div className="service-top">

        <span className="service-number">
          {service.id}
        </span>

        <Icon
          size={24}
          strokeWidth={1.5}
          className="service-icon"
        />

      </div>

      <h3>{service.title}</h3>

      <p>
        {service.description}
      </p>

      <div className="service-bottom">

        <div className="service-chips">

          {service.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

        <div className="service-arrow">
          <ArrowUpRight size={17} />
        </div>

      </div>

    </article>
  );
}

export default ServiceCard;