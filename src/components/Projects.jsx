import ProjectCard from "./ProjectCard";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="project" className="projects-section">
      <span className="section-eyebrow center">My Work</span>
      <h2 className="section-title center">Other Projects</h2>

      <ProjectCard
        image="/netflix-modal.jpg"
        title="Netflix Series Cards"
        description="A React-based UI project that renders Netflix-style series cards dynamically from JSON data, with a details modal for each title."
        features={[
          "Dynamic rendering with React components, props, and .map()",
          "State management for interactive UI (favourites, cart, detail view)",
          "Reusable, componentized card layout",
        ]}
        tech={["React", "JavaScript", "CSS"]}
        liveUrl="https://netflix-series-app-alpha.vercel.app/"
        githubUrl="https://github.com/saherfatima12-hash/netflix-series-app"
      />

      <ProjectCard
        title="Landing Page"
        description="A responsive landing page built to practice UI implementation, layout structure, and responsive web design fundamentals in React."
        tech={["React", "CSS"]}
        githubUrl="https://github.com/saherfatima12-hash/landingpage"
        reverse
      />
    </div>
  );
};

export default Projects;
