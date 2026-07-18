import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo/Logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          
          <img src={logo} alt="Students" />

          <div>
            <h2>Shinde Coaching</h2>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/register" onClick={closeMenu}>Register</NavLink>
          <NavLink to="/courses">Courses</NavLink>

          <Link to="/register" className="register-btn" onClick={closeMenu}>
            Enroll Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>
    </header>
  );
}