import React from 'react'
import { Link } from 'react-router-dom'
import Section3 from '../Home/Section3'
import Section6 from '../Home/Section6'
import AboutusCarousal from '../../assets/components/About_us_Carousel/AboutusCarousal'
import CommonHead from '../../assets/components/CommonHead/CommonHead'

function About() {
    return (
        <div>

          
            <CommonHead name= "ABOUT US"/>
            <AboutusCarousal />
            <Section3 />
            <Section6/>
        </div>
    )
}

export default About
