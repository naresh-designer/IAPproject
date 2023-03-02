import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import ListItems from './ListItems';

const MemberList = ({listItems}) => {
    const headingData = {
      fHead:'Membership benefits',
      lHead:'IAP2 Australasia...',
    }
  return (
    <MemberListSec>
        <div className='row d-flex member-List' >
            <div className='col col-6'> <Heading headingCss='member' headingData={headingData}/></div>
            <div className='col col-6'><ListItems listItems={listItems}/></div>
        </div>
    </MemberListSec>
  )
}

const MemberListSec = styled.section`
.member-List{
    padding-top:30px;
    padding-bottom:80px;
}
`;

export default MemberList