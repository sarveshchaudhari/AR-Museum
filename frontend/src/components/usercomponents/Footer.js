import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Web-AR Experience</h3>
          <p>
            Experience museums in augmented reality with our cutting-edge
            technology. Discover art, history, and culture like never before.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/nearby-museums">Find Museums</Link>
            </li>
            <li>
              <Link to="/book">Schedule Visit</Link>
            </li>
            <li>
              <Link to="/viewbooking">My Bookings</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 Museum Street, City
            </li>
            <li>
              <i className="fas fa-phone"></i> +1 234 567 8900
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@armuseum.com
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on new exhibits and features</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Web-AR Experience. All rights
          reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
