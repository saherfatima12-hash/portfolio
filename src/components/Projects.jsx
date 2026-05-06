import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id = "project">
    <div className="project-card">

  {/* LEFT IMAGE */}
  <div className="project-left">
    <img src="/capture.png" alt="project" />
  </div>

  {/* RIGHT SIDE */}
  <div className="project-right">

    <h2 className="project-title">Project</h2>

    <h3>Netflix Series Cards</h3>

    <p>
     A React-based Netflix Series Cards UI project where I used JSON data to dynamically render series cards. The project is built using React components, props, and map() method for rendering lists. State management is used for handling UI interactions, making the interface dynamic and reusable.
    </p>
    <a
  href="https://github.com/saherfatima12-hash/netflix-series-app"
  target="_blank"
>
  <button>View Project</button>
</a>

  </div>

</div>
</div>
  );
};

export default Projects;