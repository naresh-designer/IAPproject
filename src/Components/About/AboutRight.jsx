import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../Style/Button'

const AboutRight = ({headingData}) => {
  return (
    <AboutRightSec>
      <p>
        Our members work in both the public and private sectors, in
        infrastructure, construction, transport, health, disaster and emergency
        services, non-profit, indigenous and intercultural community and
        stakeholder engagement.
      </p>

      <p>
        Join us now and connect with a vast community of engagement
        professionals across Australia and New Zealand, and the globe.
      </p>

      <p>
        As a member, you will enjoy member-only access to free and discounted
        professional development courses, webinars and networking events; and
        our growing library of free online resources, tools, case studies,
        research and templates.
      </p>
      <Button className='d-flex'>
        <NavLink to='/' className='button'>Join Now</NavLink>
      </Button>
    </AboutRightSec>
  )
}

const AboutRightSec = styled.section``;

export default AboutRight