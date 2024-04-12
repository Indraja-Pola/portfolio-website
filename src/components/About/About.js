import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-para">
          <p>
            With one year of frontend development experience, I've cultivated a
            passion for crafting user-centric web experiences. My journey is
            marked by continuous learning and collaboration, striving to strike
            the perfect balance between creativity and functionality.{" "}
          </p>
          <p>
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication i
            bring to each project
          </p>
        </div>
        <div className="about-skills">
            <div className="about-skill" ><p>HTML</p><hr style={{width:'90%', contain:'90%'}}></hr></div>
            <div className="about-skill"><p>CSS</p><hr style={{width:'70%'}}></hr></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:'70%'}}></hr></div>
            <div className="about-skill"><p>REACTJS</p><hr style={{width:'80%'}}></hr></div>
            <div className="about-skill"><p>TYPESCRIPT</p><hr style={{width:'50%'}}></hr></div>
            <div className="about-skill"><p>C</p><hr style={{width:'50%'}}></hr></div>
            <div className="about-skill"><p> PYTHON</p><hr style={{width:'60%'}}></hr></div>


        </div>
      </div>
    </div>
  );
};

export default About;
