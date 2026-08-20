import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-container">
      <motion.div
        ref={ref}
        className="about-text"
        initial={{ opacity: 0, x: 40 }}
        animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="section-eyebrow">About Me</span>

        <h2 className="heading">
          I turn ideas into working interfaces<span>.</span>
        </h2>

        <p className="paragraph">
          I&rsquo;m a self-taught frontend and MERN stack developer who
          specializes in building React applications with clean component
          architecture and genuinely usable interfaces. I enjoy the part of
          development where a design and a data flow come together into
          something people can actually interact with.
        </p>

        <p className="paragraph">
          Right now I&rsquo;m looking for Junior Frontend Developer, React
          Developer, or MERN Stack Developer roles, and I&rsquo;m open to
          freelance projects where I can own the frontend build end to end.
        </p>

        <div className="about-focus">
          <div className="about-focus-item">
            <h4>What I build</h4>
            <p>React interfaces, multi-step forms, and full MERN stack apps.</p>
          </div>
          <div className="about-focus-item">
            <h4>How I work</h4>
            <p>Component-first, mobile-responsive, and detail-focused.</p>
          </div>
          <div className="about-focus-item">
            <h4>What I want</h4>
            <p>Junior/entry frontend or MERN roles, and freelance builds.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="right-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <img src="/logo2.png" alt="" />
      </motion.div>
    </div>
  );
};

export default About;
