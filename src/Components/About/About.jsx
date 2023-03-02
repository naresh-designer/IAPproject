import React from 'react'
import styled from 'styled-components'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const About = () => {
  return (
    <AboutSec>
    <div className='row d-flex'>
        <div className='col col-6'><AboutLeft/></div>
        <div className='col col-6'><AboutRight/></div>
    </div>
    </AboutSec>
  )
}

const AboutSec = styled.section`
padding-top:30px;
padding-bottom:100px;
`;

export default About