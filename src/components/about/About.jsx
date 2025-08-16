import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

function About() {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I specialize in Java, MERN stack, and building efficient, scalable, and user-friendly web applications.</p>
                <p>Passionate about solving real-world problems and continuously learning new technologies.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}} /></div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Academic & Competitive</h1>
            <p>GATE Qualified (2025) in Computer Science|Consistently scored above 80% in academics | SGPA: 8.64</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Coding Platforms</h1>
            <p>Solved 100+ problems on GeeksforGeeks & LeetCode|Secured 26th rank in GeeksforGeeks contest out of 871 participants</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Certifications & Training</h1>
            <p>CodeChef Certification: Java|HackerRank Certificate: Java Programming|Great Learning: MySQL|Completed 6-month Google Cloud Program|Industrial Training: Java Full Stack (Wipro), MERN Full Stack (Ardent)</p>
        </div>
      </div>
    </div>
  )
}

export default About
