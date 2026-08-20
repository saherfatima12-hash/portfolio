import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={item} className="hero-eyebrow">
          Available for opportunities
        </motion.span>

        <motion.h1 variants={item} className="hero-name">
          Saher Fatima
        </motion.h1>

        <motion.h2 variants={item} className="hero-role">
          Frontend&nbsp;/&nbsp;React&nbsp;/&nbsp;<span>MERN Stack</span> Developer
        </motion.h2>

        <motion.p variants={item} className="hero-statement">
          I build responsive, production-ready web interfaces with React —
          from multi-step forms and dynamic data views to full MERN stack
          applications. My focus is clean UI, solid component architecture,
          and shipping things that actually work.
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let&rsquo;s Work Together
          </button>
          <a
            className="btn btn-ghost"
            href="/white simple student cv resume.pdf"
            download
          >
            Download CV
          </a>
        </motion.div>

        <motion.div variants={item} className="hero-meta">
          <div>
            <strong>MERN</strong>
            <span>Stack</span>
          </div>
          <div className="hero-meta-divider" />
          <div>
            <strong>React</strong>
            <span>Component-driven UI</span>
          </div>
          <div className="hero-meta-divider" />
          <div>
            <strong>Real projects</strong>
            <span>Not templates</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="hero-visual-frame">
          <img src="/girly.png" alt="Saher Fatima" />
        </div>
        <div className="hero-visual-tag hero-visual-tag--top">React</div>
        <div className="hero-visual-tag hero-visual-tag--bottom">MongoDB · Express · Node</div>
      </motion.div>
    </div>
  );
};

export default Hero;
