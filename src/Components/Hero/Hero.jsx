import React from 'react'
import styled from 'styled-components'
import BannerTagLine from '../BannerTagLine/BannerTagLine'
import Logo from '../Logo/Logo'
import Arrow from '../Arrow/Arrow'

const Hero = () => {
  return (
    <HeroSec>
        <div className='row d-flex'>
            <div className='hero' style={{backgroundImage:'url(images/hero.png)'}}>
                <Logo/>
                <BannerTagLine/>
            </div>
        </div>
        <Arrow/>
    </HeroSec>
  )
}

const HeroSec = styled.section`
padding-bottom:100px;
.hero {
    height: calc(100vh - 40px);
    width: 100%;
    position: relative;
    background-position: top right;
    background-repeat: no-repeat;
  }
`;

export default Hero