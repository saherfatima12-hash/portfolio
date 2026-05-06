const ProjectCard = ({ title, desc, img }) => {
  return (
    <div className="project-card">

      {/* LEFT SIDE */}
      <div className="left">

        <img src={img} alt={title} />

        <h3>{title}</h3>

      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        <p>{desc}</p>

        <button>View Project</button>

      </div>

    </div>
  );
};

export default ProjectCard;