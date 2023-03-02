import React from 'react'
import styled from 'styled-components'
import IconList from './IconList';

const FooterIcon = () => {
  return (
    <Footer>
        <div className='row d-flex'><IconList/></div>
    </Footer>
  )
}

const Footer = styled.section`
margin-top:70px;
background-color:${({theme})=>theme.colors.lightCyan};
padding:50px 0;
.d-flex{
    justify-content:center;
}
`;

export default FooterIcon