// ✅ Priyank's Modern Portfolio - Updated with Projects Page

// src/pages/Projects.jsx

import { motion } from "framer-motion";

const projects = [
  {
    title: "Real Estate MVP App",
    description:
      "Full-stack app using NestJS and React Native with secure authentication and AWS integration.",
    tech: ["NestJS", "React Native", "AWS", "Cognito"],
    link: "#",
  },
  {
    title: "BookMyFood.ca",
    description:
      "Food order management system with PHP backend and AngularJS frontend, integrated with payment APIs.",
    tech: ["AngularJS", "PHP", "MySQL", "Twilio", "Google Maps API"],
    link: "#",
  },
  {
    title: "Enterprise Admin Portal",
    description:
      "Internal dashboard for AP, AR, and purchasing modules using Angular and Node.js.",
    tech: ["Angular", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={heading}
      >
        Projects
      </motion.h2>

      <motion.div
        style={grid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={card}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 style={title}>{project.title}</h3>
            <p style={desc}>{project.description}</p>
            <div style={{ flexGrow: 1 }} />
            <div style={techList}>
              {project.tech.map((tech, i) => (
                <span key={i} style={badge}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const heading = {
  fontSize: "2.2rem",
  marginBottom: "1rem",
  textAlign: "center",
  color: "#1db954",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
};

const card = {
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  padding: "1.5rem",
  color: "#eee",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // ensure top alignment
  minHeight: "300px", // force consistent height
};

const title = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const desc = {
  fontSize: "1rem",
  color: "#ccc",
  marginBottom: "0.5rem", // tighter spacing
};

const techList = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "1rem",
};

const badge = {
  backgroundColor: "#2a2a2a",
  color: "#1db954",
  padding: "0.3rem 0.6rem",
  borderRadius: "4px",
  fontSize: "0.85rem",
};

const link = {
  marginTop: "auto",
  color: "#1db954",
  fontWeight: "600",
  textDecoration: "none",
  alignSelf: "flex-start",
};
