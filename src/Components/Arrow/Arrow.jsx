import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Arrow = () => {
  return (
    <ArrowSec>
        <NavLink to='/' className='arrow'><img src='images/arrow.svg' alt='Arrow'/></NavLink>
    </ArrowSec>
  )
}

const ArrowSec = styled.section`
.arrow{
    display:flex;
flex-wrap:wrap;
justify-content:center;
font-size:30px;
cursor:pointer;
animation: gototop 1.2s linear infinite alternate-reverse;
@keyframes gototop {
  0% {
    transform: translateY(-0.5px);
  }
  100% {
    transform: translateY(10px);
  }
}
}
`;

export default Arrow