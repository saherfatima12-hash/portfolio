import { useEffect } from "react";
const About = () => {
  

useEffect(() => {
  const section = document.querySelector(".section");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
       else {
        entry.target.classList.remove("show"); // 🔥 reset for repeat
      }
    },
    {
      threshold: 0.3,
    }
  );

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);
  return (
    
<div className="hero-container">

  <div className="section">

    <h2 className="heading">
      I'm a Software Engineer<span>.</span>
    </h2>

    <h5 className="line">
      Aspiring Software Engineer | React & Frontend Developer
    </h5>

    <p className="paragraph">
      A self-taught UI/UX & frontend developer, focused on building meaningful and delightful digital experiences.
      I aim to balance user needs with business goals through clean and modern interfaces.
    </p>

  </div>

  <div className="right-image">
    <img src="/logo2.png" alt="logo2" />
  </div>

</div>
  );
};

export default About;