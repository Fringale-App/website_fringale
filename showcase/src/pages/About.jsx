import React from 'react'
import Introduction from '../components/Introduction'
import Header from '../components/Header'
import WhyUs from '../components/WhyUs'
import History from '../components/History'
import Founder from '../components/Founder'
import bevragebg from '../../Images/bevragebg.png'
import Team from '../components/Team'
import Footer from '../components/Footer'
import VisionMission from '../components/VisionMission'
import AboutSection from '../components/AboutSection'

const About = () => {
  return (
    <div>
        <Header/>
        <AboutSection/>
      <Introduction/>
      <VisionMission/>
      <WhyUs/>
      <History/>
      <Founder bg={bevragebg}/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default About
