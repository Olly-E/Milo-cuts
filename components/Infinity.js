import React from 'react';
import styled from "styled-components";
import {GiDiamonds} from 'react-icons/gi'


export default function Infinity() {
  return (
    
<>
      <FirstInf>
      <div className='ribbon-div'>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
      </div>
      <div className='ribbon-div'>
        {/* <GiDiamonds style={{color: 'black', flexShrink: 0}}/> */}
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'black', flexShrink: 0}}/>
      </div>
      </FirstInf>
      <SecondInf>
      <div className='ribbon-div'>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
      </div>
      <div className='ribbon-div'>
        {/* <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/> */}
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Spa & Massage</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Barbaring</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Manicure & and Pedicure</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
        <p>Internship and Mentorship</p>
        <GiDiamonds style={{color: 'var(--primary)', flexShrink: 0}}/>
      </div>
      </SecondInf>
      </>
    
  );
}





const FirstInf = styled.div`
  transform: rotate(2deg);
  width: 110%;
  background: var(--primary);
  position: absolute;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 10000;
  bottom: 0;
  margin-bottom: -80px;
  margin-left: -1rem;
    .ribbon-div {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: white;
      font-weight: 500;
      font-size: 2rem;
      height: 5.5rem;
      animation: animate 30s linear infinite;
    }
    @keyframes animate {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%)
      }
      
    }
    p{
      white-space: nowrap;
    }
`;

const SecondInf = styled.div`
  transform: rotate(-2deg);
  width: 110%;
  background: black;
  position: absolute;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;

  z-index: 10000;
  bottom: 0;
  margin-bottom: -80px;
  margin-left: -1rem;
    .ribbon-div {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: white;
      font-weight: 500;
      font-size: 2rem;
      height: 5.5rem;
      animation: animate2 30s linear infinite;
    }
    @keyframes animate2 {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%)
      }
      
    }
    p{
      white-space: nowrap;
    }
`;