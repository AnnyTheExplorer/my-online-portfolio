import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="experience-stn">
        <h2>Relevant Experience</h2>
        <p>(2 years in a nutshell)</p>
      </div>
      <div className="experiences">
        <div className="education">
          <h2>Education</h2>
          <h3>SheCodes Foundation</h3>
          <h4>Online Bootcamp</h4>
          <ul>
            <li>
              Completed online lessons, with attached tasks, and learned
              everything HTML, CSS, JavaScript, and now React. Efficiently
              worked on weekly projects to practice and hone my problem-solving
              and analytical skill.
            </li>
            <li>
              Efficiently worked on weekly projects to practice and hone my
              problem-solving and analytical skill.
            </li>
          </ul>
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <div className="experience1">
            <h3>Genesys Tech Hub</h3>
            <h4>
              Frontend Engineering Intern - <span>Learnable '23</span>
            </h4>
            <p>Nov 2022 - July 2023</p>
            <ul>
              <li>
                Participated in brainstorming sessions to present a product or
                service that uses the blockchain to solve a problem.
              </li>
              <li>
                Collaborated with teammates, from different technical fields, in
                a design sprint to create an application that will solve
                real-world problems.
              </li>
              <li>
                Built weekly projects using front-end languages; improved team
                spirit, and enhanced soft skills to become a better developer
              </li>
            </ul>
          </div>

          <div className="experience2">
            <h3>Hotels.NG</h3>
            <h4>Frontend Development Intern - HNGX</h4>
            <p>Sept - Present</p>
            <ul>
              <li>Extensively learning and evolving</li>
              <li>Progressed to the 4th stage of the internship </li>
              <li>Actively working on the 4th task</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
