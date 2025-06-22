import { Link, useLocation } from "react-router-dom";
import { FaUser, FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
  { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        ...headerStyle,
        backgroundColor: scrolled ? "#121212" : "transparent",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div style={containerStyle}>
        <div style={logoStyle}>Priyank</div>
        <nav style={navStyle}>
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              style={{
                ...linkStyle,
                ...(location.pathname === path ? activeStyle : {}),
              }}
            >
              {icon}
              <span style={{ marginLeft: 6 }}>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const headerStyle = {
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: "0.8rem 0",
  transition: "all 0.3s ease-in-out",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "auto",
  padding: "0 2rem",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#1db954",
};

const navStyle = {
  display: "flex",
  gap: "1.2rem",
  alignItems: "center",
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "#bbb",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1rem",
  transition: "color 0.3s",
};

const activeStyle = {
  color: "#1db954",
  fontWeight: 700,
};
