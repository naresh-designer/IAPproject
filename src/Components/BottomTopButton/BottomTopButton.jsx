import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa";


const BottomTopButton = () => {

    const[isVisible, setIsVisible]=useState(false);

    const goTop = () =>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    const listenScroll = () => {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScroll)
    }, [])
    
  return (
    <BottomTop>
        {isVisible && (
        <div className="topButton" onClick={goTop}>
          <FaArrowUp className="icon" />
        </div>
        )}
    </BottomTop>
  )
}

const BottomTop = styled.section`
position: fixed;
  bottom: 20px;
  right: 20px;
  color: #000;
  .topButton {
    border:2px solid ${({theme})=>theme.colors.darkBlue};
    width: 50px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  }
  .icon {
    animation: gototop 1.3s linear infinite alternate-reverse;
    color: ${({theme})=>theme.colors.darkBlue};
  }
  @keyframes gototop {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  `;

export default BottomTopButton