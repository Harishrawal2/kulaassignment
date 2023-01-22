import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 555-555-5555</p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-links">
            <Link href="/">Facebook</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
