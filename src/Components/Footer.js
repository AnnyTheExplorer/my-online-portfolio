import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">&copy; copyright 2023, AnnyTheExplorer</div>
      <div className="socials">
        <span>
          <a
            href="https://www.linkedin.com/in/anastasia-agbata/"
            target="_blank"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a href="https://twitter.com/AnnyTheExplorer" target="_blank">
            Twitter
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/anastasia-agbata/" target="_blank">Instagram</a>
        </span>
      </div>
      <div className="footer-right"></div>
    </div>
  );
}

export default Footer;
