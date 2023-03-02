import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../Style/Button';
import styled from 'styled-components';

const ListItems = ({listItems}) => {
  return (
    <ListBody>
    <div className='member-list'>
    <ul>
      {listItems.map((listElm)=>{
        const{images,content}=listElm;
        return(
          <li>
                <div><img src={images} alt=""/></div>
                <p>{content}</p>
          </li>
        )
      })}
    </ul>
    <Button className='d-flex'>
      <NavLink to='/' className='button'>Join Now</NavLink>
    </Button>
    </div>
   </ListBody>
  )
}

const ListBody = styled.section`
.member-list{
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 25px;
    li{
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 25px;
      svg{
        path{
          fill: ${({theme})=>theme.colors.orange};
        }
      }
      img{
        width:40px;
      }
    }
  }
  .button{
    margin-top:55px;
    margin-left:72px;
  }
}
`;


export default ListItems