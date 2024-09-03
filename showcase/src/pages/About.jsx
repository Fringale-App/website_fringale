import React from 'react'
import Introduction from '../components/Introduction'
import Header from '../components/Header'
import WhyUs from '../components/WhyUs'
import History from '../components/History'
import Founder from '../components/Founder'
import bevragebg from '../../Images/bevragebg.png'
import Team from '../components/Team'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
      <Introduction/>
      <WhyUs/>
      <History/>
      <Founder bg={bevragebg}/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default About
