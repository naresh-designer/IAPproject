import React from 'react'
import styled from 'styled-components'
import footListContent from '../../Json/IconList'

const IconList = () => {
  return (
    <FooterListBody>
    <ul>
        {footListContent.map((footListElm)=>{
            const{footerImage,footerContent,link}=footListElm
            return(
        <li>
               <a href={link} target="_blank"> <img src={footerImage} alt=""/></a>
            <p>{footerContent}</p>
        </li>
            )
        })}
        
    </ul>
    </FooterListBody>
  )
}

const FooterListBody = styled.section`
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    column-gap: 73px;
    li{
        list-style: none;
        width: 150px;
        text-align: center;
        p{
            font-size:20px;
            padding-top:20px;
        }
        a{
            background-color: ${({theme})=>theme.colors.lighterCyan};
            width: 150px;
            height: 150px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s linear;
            &:hover{
                transform: scale(1.2);
            }
         }
    }
}
@media(max-width:${({theme})=>theme.media.mobile}){
    ul{
        li{
            margin-bottom:30px;
        }
    }
}
`;

export default IconList