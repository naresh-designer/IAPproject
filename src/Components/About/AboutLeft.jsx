import React from 'react'
import styled from 'styled-components'

const AboutLeft = () => {
  return (
    <AboutLeftSec>
      <div className='about-left'>
        At IAP2 Australasia, we are about strengthening engagement and advancing
        the practice.
      </div>
    </AboutLeftSec>
  )
}

const AboutLeftSec = styled.section`
.about-left{
  padding-right: 76px;
  font-size:30px;
}

@media(max-width:${({theme})=>theme.media.mobile}){
  .about-left{
    padding-right: 0;
    padding-bottom:30px;
  }
}
`;

export default AboutLeft