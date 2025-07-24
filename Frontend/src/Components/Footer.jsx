import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-sections">
      <div className="footer-col">
        <h4>Our Teas</h4>
        <ul>
          <li><a href="#">Black Tea</a></li>
          <li><a href="#">Green Tea</a></li>
          <li><a href="#">Herbal Infusions</a></li>
          <li><a href="#">Gift Packs</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Tea Gardens</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col newsletter">
        <h4>Subscribe</h4>
        <p>Get updates & promotions:</p>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-col payments">
        <h4>We accept</h4>
        <div className="icons">
          <span>💳</span>
          <span>Apple Pay</span>
          <span>Google Pay</span>
          <span>🅿️</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Tea Farm. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
