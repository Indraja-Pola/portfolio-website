

import React, { useState } from "react";
import "./project.css";
import flowers_img from "../../assets/flowers.png";
import login_img from "../../assets/login.png";
import audio_img from "../../assets/audio.png";
import world1_img from "../../assets/Screenshot 2026-01-22 at 15-43-05 github-explorer.png";

const projects = [
  {
    img: flowers_img,
    desc: "A React-based e-commerce application featuring product listings, cart functionality, and page navigation using React Router, with a fully responsive UI built using modern CSS.",
    link: "https://flower-shop-git-main-indraja-polas-projects.vercel.app/"
  },
  {
    img: login_img,
    desc: "A responsive login interface built with React.js, implementing controlled components and client-side form validation for improved user experience.",
    link: "https://login-page-git-main-indraja-polas-projects.vercel.app/"
  },
  {
    img: audio_img,
    desc: "An interactive React application that plays audio sounds using JavaScript event handling and the HTML Audio API, providing a smooth and responsive user experience.",
    link: "https://music-app-git-main-indraja-polas-projects.vercel.app/"
  },
  {
    img: world1_img,
    desc: "React application that integrates the GitHub REST API to search users and dynamically display profile and repository data using asynchronous JavaScript.",
    link: "https://github-explorers.vercel.app/"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h3>
          I am skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites. I have a strong
          understanding of design and a keen eye for detail. I am proficient in
          HTML, CSS, JavaScript, and React.js
        </h3>
      </div>

      <div className="mywork-container">
        {projects.map((project, index) => (
          <div className="mywork-box" key={index}>
            <img src={project.img} alt="project" />

            <div
              className={`mywork-layer ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={() => toggleOverlay(index)}
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
