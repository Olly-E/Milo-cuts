import styled from '@emotion/styled'
import React from 'react';
import schedule from '../assets/schedule.jpg';
import Image from 'next/image';
import {motion} from 'framer-motion'
import { BsCalendar2DateFill, BsClockFill, BsStopwatchFill } from 'react-icons/bs';
import { MdEditCalendar } from 'react-icons/md';
import { FaStopwatch } from 'react-icons/fa';
import { scheduleHeadingAnim, scheduleImageAnim, scheduleTextAnim, scheduleTextAnim2, scheduleTextAnim3, scheduleTextAnim4 } from './Animation';

export default function ThirdView() {


  return (
    <ThirdSection>
      <div className="overflow">
        <motion.div className="label"
          variants={scheduleHeadingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
              <h1>Scheduled cuts</h1>
        </motion.div>
        <div className='grid-container'>
            <div className='small-div first'>
                {/* <h1>First grid</h1> */}
                <motion.div
                   variants={scheduleImageAnim}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{once: true}}
                >
                  <Image src={schedule} alt="schedule" />
                </motion.div>
            </div>
            <motion.div className='small-div fifth'
              variants={scheduleTextAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
                <span className='drop-icons'><MdEditCalendar /></span>
                <h2>Flexible schedule adjustments</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, eaque!</p>
            </motion.div>
            <motion.div className='small-div second'
              variants={scheduleTextAnim2}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
                <span className='drop-icons'><BsClockFill /></span>
                <h2>Pre scheduled appointments</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum?</p>
            </motion.div>
            <motion.div className='small-div third'
              variants={scheduleTextAnim3}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
                <span className='drop-icons'><FaStopwatch /></span>
                <h2>Precise cut duration</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, nihil.</p>
            </motion.div>
            <motion.div className='small-div fourth'
              variants={scheduleTextAnim4}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
                <span className='drop-icons'><BsCalendar2DateFill /></span>
                <h2>Convinient reappoinments</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laborum.</p>
            </motion.div>
      </div>
        </div>
    </ThirdSection>
  )
}


const ThirdSection = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background: black;
    color: white;
    padding: 7rem 10rem;
    box-sizing: border-box;
    .overflow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;
    overflow: hidden;
    }
    
    .label {
      flex: 0.6;
      height: 38rem;
      width: 4rem;
      border-radius: 3rem;
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 4px;
      white-space: nowrap;

      h1 {
        font-size: 3rem;
        transform: rotate(90deg);
      }
    }
    
    .grid-container {
      display: grid;
      flex: 7;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      box-sizing: border-box;
      grid-template-areas:
            "one one two three"
            "one one four five";
      
    .small-div {
      width: 100%;
      height: 18rem;
      border-radius: 3rem;
      box-sizing: border-box;
      overflow: hidden;
      padding: 1rem;
      margin-bottom: auto;
      display: flex;
      justify-content: flex-end;
      align-items:flex-start;
      flex-direction: column;
      padding-bottom: 2rem;
      padding-left: 2rem;
      position: relative;

      .drop-icons {
        color: black;
        font-size: 5rem;
        transform: rotate(-30deg);
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
      }

      h2 {
        color: black;
        font-weight: 900;
        text-align: left;
        width: 90%;
        font-size: 1.5rem;
      }

      p {
        color: var(--primary);
        font-weight: 700;
        font-size: 1.1rem;
      }
      
      &:nth-of-type(1){
        grid-area: one;
        height: 38rem;
        overflow: hidden;
        padding: 0;

        span {
          width: 200%;
          height: 100%;
          transform: translateY(10px);
          img {
            object-fit: cover;
          }
        }
      }
      &:nth-of-type(2){
        grid-area: two;
        background: hsl(24deg 49% 94%);
      }
      &:nth-of-type(3){
        grid-area: three;
        background: hsl(24deg 49% 94%);
      }
      &:nth-of-type(4){
        grid-area: four;
        background: var(--primary);
        
        p {
          color: hsl(24deg 49% 94%);
        }
      }
      &:nth-of-type(5){
        grid-area: five;
        background: hsl(24deg 49% 94%);
      }
    }
    }
`;