const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <span>My Portfolio</span>
      </div>

      <div className="links">
        <button onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>
          Home
        </button>

        <button onClick={() => document.getElementById("project").scrollIntoView({ behavior: "smooth" })}>
          Projects
        </button>

        <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          Contact
        </button>
      </div>

    </div>
  );
};

export default Navbar;