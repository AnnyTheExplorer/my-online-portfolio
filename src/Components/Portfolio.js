import React from "react";
import Header from "./Header.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Footer from "./Footer.js";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default Portfolio;
