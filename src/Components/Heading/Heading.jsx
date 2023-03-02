import React from 'react'
import styled from 'styled-components'

const Heading = ({headingCss,headingData}) => {
  const{fHead,lHead}=headingData;
  return (
    <HeadingSec>
        <div className={`heading ${headingCss}-heading`}>
            {fHead} <br/><span>{lHead}</span></div>
    </HeadingSec>
  )
}

const HeadingSec = styled.section`
width:100%;

.primery-heading, .last-heading {
  font-size: 50px;
  line-height: 55px;
  font-family: var(--helvetica-bold);
}
.listPrimery-heading{
  font-size:30px;
  font-family: var(--helvetica-bold);
}
.listLast-heading{
  font-size:30px;
}
.member-heading{
  font-size:30px;
  font-family: var(--helvetica-bold);
}
.member-heading span{
  font-family: var(--helvetica-normal);
}

@media(max-width:${({theme})=> theme.media.mobile}){
  .heading{
    padding-bottom:20px;
  }
  .primery-heading{
    font-size:35px;
    line-height:35px;
  }
}
`;

export default Heading