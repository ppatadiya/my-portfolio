import { motion } from "framer-motion";
import profileImg from "../assets/priyank-profile.jpg";
import { Link } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";

export default function Home() {
  return (
    <section className="home-section">
      <div style={container}>
        <motion.img
          src={profileImg}
          alt="Priyank Patadiya"
          style={profileStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          style={heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm <span style={{ color: "#1db954" }}>Priyank</span>
        </motion.h1>
        <motion.p
          style={tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Full Stack Developer | AWS Certified | UI/UX Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }} // subtle scale on hover
          whileTap={{ scale: 0.95 }} // tap effect
          style={{ display: "inline-block" }} // needed for scale animation
        >
          <Link
            to="/projects"
            style={scrollHint}
            tabIndex={0} // keyboard focusable
          >
            <FiChevronsDown size={28} style={{ marginRight: 8 }} />
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Inline styles
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  minHeight: "100vh",
  padding: "2rem",
};

const profileStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 0 15px rgba(0,0,0,0.5)",
  marginBottom: "1.5rem",
};

const heading = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const tagline = {
  fontSize: "1.2rem",
  color: "#ccc",
  maxWidth: "600px",
  marginBottom: "2rem",
};

const scrollHint = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  color: "#1db954",
  textDecoration: "none",
  fontWeight: "500",
  padding: "0.5rem 1rem",
  border: "1px solid #1db954",
  borderRadius: "5px",
  cursor: "pointer", // add pointer cursor
  transition: "background 0.3s ease, color 0.3s ease",
};
