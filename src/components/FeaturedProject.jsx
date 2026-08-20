import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const SCREENSHOTS = [
  { src: "/cc-home.jpg", label: "Homepage" },
  { src: "/cc-assessment.jpg", label: "Career assessment form" },
  { src: "/cc-fields.jpg", label: "Career guidance" },
];

const FEATURES = [
  "Multi-step career assessment form (education, interests, skills, goals)",
  "Personalized career path guidance based on assessment answers",
  "Career roadmap presentation for exploring different fields",
  "User signup / login",
  "Fully responsive, modern UI built with React",
];

const TECH = ["React", "React Router", "Node.js", "Express", "MongoDB", "Framer Motion"];

const FeaturedProject = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="featured" className="featured-section" ref={ref}>
      <span className="section-eyebrow center">Featured Project</span>
      <h2 className="section-title center">Career Compass</h2>
      <p className="featured-intro">
        A career guidance platform that helps students explore suitable
        career paths based on their education, interests, skills, and goals.
        This is my main and most complete project — built end-to-end as a
        MERN stack application.
      </p>

      <motion.div
        className="featured-gallery"
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="featured-gallery-main">
          <motion.img
            key={active}
            src={SCREENSHOTS[active].src}
            alt={SCREENSHOTS[active].label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="featured-gallery-thumbs">
          {SCREENSHOTS.map((shot, i) => (
            <button
              key={shot.src}
              className={`featured-thumb ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <img src={shot.src} alt="" />
              <span>{shot.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <div className="featured-body">
        <motion.div
          className="featured-col"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>The Problem</h4>
          <p>
            Students often struggle to choose a career path because of
            confusing options and generic, one-size-fits-all advice — not
            because they lack potential.
          </p>
        </motion.div>

        <motion.div
          className="featured-col"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>The Solution</h4>
          <p>
            Career Compass collects a student&rsquo;s education, interests,
            skills, and goals through a guided assessment, then surfaces
            career paths and guidance tailored to their profile.
          </p>
        </motion.div>

        <motion.div
          className="featured-col"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4>My Contribution</h4>
          <p>
            I designed and built the full application — the React frontend,
            the multi-step assessment flow, the UI system, and the
            connection to the backend and database.
          </p>
        </motion.div>
      </div>

      <div className="featured-details">
        <motion.div
          className="featured-features"
          initial={{ opacity: 0, x: -24 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Key Features</h4>
          <ul>
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="featured-tech"
          initial={{ opacity: 0, x: 24 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4>Tech Stack</h4>
          <div className="tech-tags">
            {TECH.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="featured-actions">
            <a
              href="https://career-compass-w6pn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href="https://github.com/saherfatima12-hash/career-compass"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FiGithub /> GitHub Repository
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProject;
