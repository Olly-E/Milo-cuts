import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import aboutus from '../assets/aboutus.jpg'
import barber_about from '../assets/barber_about.png'

export default function Aboutus() {
  return (
    <BigSection>
      <SmallSec>
            <div className='fancy-grid'>

              <div className='fancy-grid__image'>
                <h1 className='about__us'>WHY WE <span>ROCK</span></h1>
                <Image 
                  src={barber_about}
                  alt="aboutus"
                /> 
              </div>
          </div>
      </SmallSec>
      <div className='about__us__text'>
                <p> 
                    We could write on here that we've got the most amazing service ever, consistency and staff experience that supases every other for amazing prices... of course we do.. we're not capping about that, but what could be better than you dropping by and getting the ultimate experience yourself which of course, beats reading about all of it here... 
                <span>because why not?</span>
                </p>
              </div>
    </BigSection>
  );
}


const BigSection = styled.div`
  padding:1rem 4rem 5rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  .about__us__text {
    font-size: 1.1rem;
    padding: 3rem;
    border-radius: 1rem 5rem 3rem 6rem;
    background: var(--primary);
    font-weight: 700;
    color: white;
    margin-top: 7rem;
    box-shadow: -1px 5px 5px 0px rgb(145 145 145 / 67%);
    line-height: 1.8rem;
    width: 22rem;


    span {
      background: black;
      padding: 0.2rem 0.6rem;
      border-radius: 1rem;
      margin-left: 0.2rem;
    }
  }
`

const SmallSec = styled.div`
  position: relative;
  margin-top: 4rem;

  .about__us {
    position: absolute;
    margin-top: -2.5rem;
    margin-left: -4.8rem;
    z-index: 1;
    padding: 2rem 4rem;
    color: var(--primary);
    font-size: 3rem;

    span {
      font-weight: 900;
      color: white;
      display: block;
      background: black;
      text-align: center;
      padding: 1rem 2rem;
      border-radius: 0.2rem;
      width: fit-content;
      margin-top: 1rem;
    }
  }

  .fancy-grid {
   
    &__image {
      width: 45rem;
      margin-top: 2rem;
    }
  }

  
  
`;