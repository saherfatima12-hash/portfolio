import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    note: "What I use most",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
    ],
  },
  {
    label: "Backend",
    note: "Building the MERN backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    label: "Database",
    note: "",
    skills: [{ name: "MongoDB", icon: SiMongodb }],
  },
  {
    label: "Tools",
    note: "",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "REST APIs", icon: TbApi },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="skills-section" ref={ref}>
      <span className="section-eyebrow center">Skills</span>
      <h2 className="section-title center">Tools I build with</h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            className="skills-group"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.08, ease: "easeOut" }}
          >
            <div className="skills-group-head">
              <h3>{group.label}</h3>
              {group.note && <span>{group.note}</span>}
            </div>

            <div className="skills-chips">
              {group.skills.map((s) => (
                <div className="skill-chip" key={s.name}>
                  <s.icon />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
