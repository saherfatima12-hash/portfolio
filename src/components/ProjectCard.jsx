import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({
  image,
  title,
  description,
  tech = [],
  features = [],
  liveUrl,
  githubUrl,
  reverse = false,
}) => {
  return (
    <motion.div
      className={`project-card ${reverse ? "project-card--reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-left">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="project-right">
        <span className="project-eyebrow">Project</span>
        <h3>{title}</h3>
        <p>{description}</p>

        {features.length > 0 && (
          <ul className="project-features">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <div className="tech-tags">
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}

        <div className="project-actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FiGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
