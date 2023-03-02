import React from 'react'
import styled from 'styled-components'
import ListItems from './ListItems'
import { itemsFirst, itemsSecond, itemsThird, itemsFourth } from '../../Json/HighLightListItems'

const List = () => {
    
  return (
    <ListSec>
      <div className='listItmes'>
        <ListItems topBg='' bottomBg='lightBlue' items={itemsFirst}/>
        <ListItems topBg='green' bottomBg='lightGreen' items={itemsSecond}/>
        <ListItems topBg='orange' bottomBg='lightOrange' items={itemsThird}/>
        <ListItems topBg='brown' bottomBg='lightBrown' items={itemsFourth}/>
        </div>
    </ListSec>
  )
}

const ListSec = styled.section`
.listItmes{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 20px;
  padding-top: 55px;
  margin-bottom: 150px;
}

@media(max-width:${({theme})=>theme.media.mobile}){
  .listItmes{
    justify-content: center;
    margin-bottom:20px;
  }
}
`;

export default List