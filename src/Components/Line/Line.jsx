import React from 'react'
import styled from 'styled-components'

const Line = () => {
  return (
    <Divider>
    <div className='row'>
        <div className='col col-12'>
            <div className='line'></div>
        </div>
    </div>
    </Divider>
  )
}

const Divider =styled.section`
.line{
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
    height:1px;
    background-color:#94979C;
}
`;

export default Line