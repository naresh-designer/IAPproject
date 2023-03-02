import React from 'react'
import About from '../About/About'
import Hero from '../Hero/Hero'
import HighLightMember from '../HighLightMember/HighLightMember'
import Line from '../Line/Line'
import MemberList from '../MemberList/MemberList'
import { listItems, listItems_two } from '../../Json/MemberList'
import FooterIcon from '../FooterIcon/FooterIcon'

const Home = () => {
  return (
    <>
    <Hero/>
    <Line/>
    <About/>
    <HighLightMember/>
    <Line/>
    <MemberList listItems={listItems}/>
    <Line/>
    <MemberList listItems={listItems_two}/>
    <FooterIcon/>
    </>
  )
}

export default Home