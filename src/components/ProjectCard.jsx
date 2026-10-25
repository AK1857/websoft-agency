import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <div className="project-placeholder">
          <span>{project.id}</span>
          <ArrowUpRight size={28} />
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;