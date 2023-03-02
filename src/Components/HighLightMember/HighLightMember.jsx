import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import List from './List'

const HighLightMember = () => {
  const headingData = {
    fHead:'Take a look at our',
    lHead:'member highlights...',
  }
  return (
   <HightLightMemberSec>
    <div className='row'>
        <Heading headingCss='primery' headingData={headingData}/>
        <List/>
    </div>
   </HightLightMemberSec>
  )
}

const HightLightMemberSec = styled.section``;

export default HighLightMember