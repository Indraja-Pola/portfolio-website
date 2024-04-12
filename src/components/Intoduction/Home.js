import React from "react";
import "./home.css";
import bg from '../../assets/icon-portfolio.png'
import {Link} from 'react-scroll';
import img from '../../assets/icon-portfolio.png';
import { DownloadOutlined } from '@ant-design/icons';
import resumeFile from '../../assets/ExperiencedResume.pdf'

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.setAttribute('download', 'Resume_IndrajaPola.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div  id='home' className="intro">
        {/* <img src={img} alt=""></img> */}
        <h3>Hello,</h3>
        <h2><span>I'm Indraja Pola</span></h2>
        <h1>Frontend Developer</h1>
        <p>I specialize in creating engaging and user-friendly interfaces that meet both user needs and business goals.</p>
        <div className="intro-resume" type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>My Resume</div>
    </div>
    
   
  );
};

export default Home;
