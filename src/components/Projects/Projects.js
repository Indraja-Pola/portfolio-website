import React from 'react'
import './project.css';
import flowers_img from '../../assets/flowers.png';
import login_img from '../../assets/login.png';
import audio_img from '../../assets/audio.png';
import world1_img from '../../assets/world1.png';
import mywork_data from '../../assets/mywork_data';

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <h3>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, React Js</h3>
        </div>
        <div className='mywork-container'>
          {/* {mywork_data.map((work,index) => {
          
            return <img className='image' key={index} src={work.w_img} alt='img'/>
          })} */}
           <div className='mywork-box'>
            <img src={flowers_img} alt=''/>
            <div className='mywork-layer'>
              <h4>Web Design</h4>
              <p>web designing using tools like html , css and javascript</p>
              <a href='https://flower-shop-git-main-indraja-polas-projects.vercel.app/' target='blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='mywork-box'>
            <img src={login_img} alt=''/>
            <div className='mywork-layer'>
              <h4>Web Design</h4>
              <p>web designing using tools like html , css and javascript</p>
              <a href='https://login-page-git-main-indraja-polas-projects.vercel.app/' target='blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='mywork-box'>
            <img src={audio_img} alt=''/>
            <div className='mywork-layer'>
              <h4>Web Design</h4>
              <p>web designing using tools like html , css and javascript</p>
              <a href='https://music-app-git-main-indraja-polas-projects.vercel.app/' target='blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
         
          <div className='mywork-box'>
            <img src={world1_img} alt=''/>
            <div className='mywork-layer'>
              <h4>Web Design</h4>
              <p>web designing using tools like html , css and javascript</p>
              <a href='https://exploring-world-git-main-indraja-polas-projects.vercel.app/' target='blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          
        </div>
      
    </div>
  )
}

export default Projects
