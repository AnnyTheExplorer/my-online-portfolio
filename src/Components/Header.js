import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <span>Anny</span>/Explorer
        </div>
        <div className="nav-options">
          <span>About</span>
          <span>Projects</span>
          <span>Resume</span>
        </div>
        <div className="nav-btn">
          <a href="mailto:agbataanastasia@gmail.com">Let's work together</a>
        </div>
      </div>
      <div className="header">
        <div className="title">
          <span>About Me</span>
          <h2>
            Frontend
            <br />
            <span>Web</span>
            <br />
            Developer
          </h2>
        </div>
        <div className="about">
          I'm Anastasia, a passionate Self-taught Frontend Developer with{" "}
          <span>2 years</span> experience writing codes to enhance user
          interaction and experience.
          <div className="github-btn">View my portfolio on GitHub</div>
        </div>
      </div>
    </>
  );
}

export default Header;
