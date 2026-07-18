import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-section">
          <h2 className="footer-logo">Shinde Coaching Classes</h2>

          <p>
            Providing quality education for students from
            <strong> 5th to 10th Standard </strong>
            with experienced teachers, personal attention,
            and result-oriented learning.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/courses">Courses</Link></li>

            <li><Link to="/register">Register</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Chhatrapati Sambhajinagar
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            shindecoaching@gmail.com
          </p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Shinde Coaching Classes.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>Ritesh Hood</strong>
        </p>

      </div>

    </footer>
  );
}