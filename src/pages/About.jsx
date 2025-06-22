import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiJirasoftware,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React / Angular", icon: <FaReact size={30} /> },
    { name: "Node.js / Express", icon: <FaNodeJs size={30} /> },
    { name: "NestJS", icon: <SiNestjs size={30} /> },
    { name: "AWS (Cognito, ECS, etc.)", icon: <FaAws size={30} /> },
    { name: "MongoDB / MySQL", icon: <FaDatabase size={30} /> },
    { name: "TypeScript / JavaScript", icon: <SiTypescript size={30} /> },
    { name: "PHP / Laravel", icon: <FaPhp size={30} /> },
    { name: "Git / GitHub", icon: <FaGitAlt size={30} /> },
    { name: "Docker / DevOps", icon: <SiDocker size={30} /> },
    { name: "JIRA / ADO", icon: <SiJirasoftware size={30} /> },
  ];

  const timeline = [
    {
      year: "2025 – Present",
      role: "Full Stack Developer (Real Estate MVP Project)",
      description:
        "Built scalable full-stack real estate platform using NestJS, React Native, and AWS.",
      color: "#1db954",
    },
    {
      year: "2018 – Present",
      role: "Full Stack Developer @ Karl W Richter Inc.",
      description:
        "Developed enterprise tools using Angular, Node.js, MySQL, and Auth0.",
      color: "#00bcd4",
    },
    {
      year: "2020 – 2022",
      role: "Founder, BookMyFood.ca",
      description:
        "Launched a food ordering platform with PHP, AngularJS, and payment + SMS APIs.",
      color: "#ff9800",
    },
    {
      year: "2016 – 2018",
      role: "Seneca College – Computer Programming",
      description: "Diploma in Computer Programming, Toronto, ON.",
      color: "#9e9e9e",
    },
  ];

  return (
    <section className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={heading}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={intro}
      >
        I'm a Full Stack Developer with 7+ years of experience building robust
        web and mobile apps using JavaScript, TypeScript, and cloud-native
        solutions. I enjoy solving real-world problems, leading scalable
        projects, and always learning something new.
      </motion.p>

      <motion.div
        className="grid"
        style={grid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {skills.map((skill) => (
          <div key={skill.name} style={card}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Timeline Section */}
      <motion.h2
        style={{ ...heading, marginTop: "3rem" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Career Timeline
      </motion.h2>

      <motion.div style={timelineContainer}>
        {timeline.map(({ year, role, description, color }, i) => (
          <motion.div
            key={i}
            style={timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
          >
            <div style={{ ...timelineDot, backgroundColor: color }} />
            <div>
              <p style={timelineYear}>{year}</p>
              <h3 style={timelineRole}>{role}</h3>
              <p style={timelineDesc}>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Inline styles

const heading = {
  fontSize: "2.2rem",
  marginBottom: "1rem",
  textAlign: "center",
  color: "#1db954",
};

const intro = {
  maxWidth: "700px",
  margin: "0 auto 2.5rem",
  textAlign: "center",
  color: "#ccc",
  fontSize: "1.1rem",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.5rem",
  padding: "1rem 0",
};

const card = {
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  padding: "1rem",
  textAlign: "center",
  color: "#eee",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
};

const timelineContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginTop: "1rem",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
};

const timelineItem = {
  display: "flex",
  gap: "1rem",
  alignItems: "flex-start",
};

const timelineDot = {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  marginTop: "6px",
  flexShrink: 0,
};

const timelineYear = {
  fontWeight: "700",
  color: "#1db954",
  marginBottom: "0.3rem",
};

const timelineRole = {
  fontSize: "1.2rem",
  margin: "0 0 0.3rem 0",
};

const timelineDesc = {
  color: "#ccc",
  lineHeight: "1.4",
  margin: 0,
};
