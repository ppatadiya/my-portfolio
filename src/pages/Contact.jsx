import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={container}
    >
      <h2 style={heading}>Contact Me</h2>

      <p style={intro}>
        I'm always open to connecting! Whether you want to collaborate, refer
        me, or just say hello — feel free to reach out.
      </p>

      <div style={contactList}>
        <a href="mailto:priyank.patadiya.3@gmail.com" style={contactItem}>
          <FaEnvelope size={24} color="#1db954" />
          <span>Email: priyank.patadiya.3@gmail.com</span>
        </a>

        <a href="tel:+14164143653" style={contactItem}>
          <FaPhone size={24} color="#1db954" />
          <span>Phone: +1 (416) 414-3653</span>
        </a>

        <a
          href="https://www.linkedin.com/in/priyank-patadiya"
          target="_blank"
          rel="noopener noreferrer"
          style={contactItem}
        >
          <FaLinkedin size={24} color="#1db954" />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </motion.section>
  );
}

const container = {
  maxWidth: "600px",
  margin: "3rem auto",
  padding: "1rem",
  color: "#eee",
  textAlign: "center",
};

const heading = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  color: "#1db954",
};

const intro = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#ccc",
};

const contactList = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignItems: "center",
};

const contactItem = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  fontSize: "1.1rem",
  color: "#eee",
  textDecoration: "none",
  border: "1px solid #1db954",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "400px",
  justifyContent: "center",
  transition: "background-color 0.3s ease",
  cursor: "pointer",
};
