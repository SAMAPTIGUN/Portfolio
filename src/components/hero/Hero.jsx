import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Samapti Gun ,</span> fullstack developer based in INDIA.</h1>
      <p>Aspiring Software Engineer | Full Stack Developer.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
