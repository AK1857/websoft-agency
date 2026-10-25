import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Portfolio() {
  return (
    <section className="portfolio section" id="work">
      <div className="section-heading">
        <div>
          <span className="section-tag">
            02 — Selected work
          </span>

          <h2>
            Work we're
            <br />
            <em>proud of.</em>
          </h2>
        </div>

        <p>
          A selection of digital products and platforms
          we've designed and developed for modern businesses.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;