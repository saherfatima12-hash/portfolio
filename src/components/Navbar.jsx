import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="logo" onClick={() => goTo("hero")}>
        <span className="logo-mark">SF</span>
        <span className="logo-text">Saher Fatima</span>
      </div>

      <div className="links">
        {NAV_LINKS.map((link) => (
          <button key={link.id} onClick={() => goTo(link.id)}>
            {link.label}
          </button>
        ))}
      </div>

      <button className="nav-cta" onClick={() => goTo("contact")}>
        Let&rsquo;s Talk
      </button>

      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {NAV_LINKS.map((link) => (
              <button key={link.id} onClick={() => goTo(link.id)}>
                {link.label}
              </button>
            ))}
            <button className="mobile-cta" onClick={() => goTo("contact")}>
              Let&rsquo;s Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
