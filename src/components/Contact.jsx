import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="section-eyebrow center">Get In Touch</span>
        <h2>Have a project in mind?</h2>
        <p>Let&rsquo;s build something together.</p>

        <div className="contact-links">
          <a href="mailto:fatimasaher450@gmail.com" className="btn btn-primary">
            <FiMail /> Send Email
          </a>
          <a
            href="/white simple student cv resume.pdf"
            download
            className="btn btn-secondary"
          >
            <FiDownload /> Download Resume
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/saherfatima12-hash"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
