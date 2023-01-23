import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import barb1 from '../assets/barb1.jpg';
import barb4 from '../assets/barb4.jpg';
import barb3 from '../assets/barb3.jpg';
import barb2 from '../assets/barb2.jpg';
import barb1modified from '../assets/barb1modified.png';
import barb2modified from '../assets/barb2modified.png';
import barb3modified from '../assets/barb3modified.png';
import barb4modified from '../assets/barb4modified.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { IconButton } from '@mui/material';
import { modalAnimation } from './Animation';

export default function FourthView() {
  const [teamShowIndex, setTeamShowIndex] = useState(0);
  
  const teamInfo = [
    {
      name: 'Echo',
      jobTitle: 'Speed barber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb1,
      avatar: barb1modified,
      id: 0,
    },
    {
      name: 'Beta',
      jobTitle: 'Stylist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb2,
      avatar: barb2modified,
      id: 1,
    },
    {
      name: 'Dima',
      jobTitle: 'Carver',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb3,
      avatar: barb3modified,
      id: 2,
    },
    {
      name: 'Jaw',
      jobTitle: 'Liquid',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb4,
      avatar: barb4modified,
      id: 3,
    },
    {
      name: 'Periwinkle',
      jobTitle: 'Consultant',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb2,
      avatar: barb2modified,
      id: 4,
    },

  ]
  
  

  const next = () => {
    if(teamShowIndex >= teamInfo.length - 1) {
      setTeamShowIndex(0)
    } else {
      setTeamShowIndex(teamShowIndex + 1)
    }
  }

  const prev = () => {
    if(teamShowIndex < 1) {
      setTeamShowIndex(4)
    } else {
      setTeamShowIndex(teamShowIndex - 1)
    }
  }
  const handleAvatar = (id) => {
    setTeamShowIndex(id)
  }
  
  const teamShow = teamInfo[teamShowIndex]


  return (


    <TeamSec>
        <h2 className='heading'> The Lineup</h2>
            <IconButton aria-label="delete" size="small" onClick={prev} sx={{position: 'absolute', top: '50%', left: '50px'}}>
                <NavigateBeforeIcon sx={{color: 'white', background: 'black',fontSize: '2rem', padding: '0.5rem', borderRadius: '50%'}} fontSize="inherit" />
            </IconButton>
            <IconButton onClick={next} sx={{position: 'absolute', top: '50%', right: '50px'}}>
                <NavigateNextIcon sx={{color: 'white', background: 'black',fontSize: '2rem', padding: '0.5rem', borderRadius: '50%'}} fontSize="inherit" />
              </IconButton>
        <div className='carousel__display'>
            <div className="carousel__display__text">
              <AnimatePresence>
                <motion.div
                key={teamShow.id}
                  exit={{opacity: 0, y: -30, transition:{ease: 'easeInOut'}}}
                >
                    <motion.h2
                      key={teamShow.id}
                      initial={{opacity: 0, y: 10, transition:{ease: 'easeInOut'}}}
                      whileInView={{opacity: 1, y: 0, transition:{delay: 0.6, ease: 'easeInOut'}}}
                      viewport={{once: true}}
                      // exit={{opacity: 0, transition:{ease: 'easeInOut'}}}
                    >{teamShow.name}</motion.h2>
                    <motion.h3
                      key={teamShow.id}
                      initial={{opacity: 0, y: 10 }}
                      whileInView={{opacity: 1, y: 0, transition:{delay: 0.8, ease: 'easeInOut'}}}
                      viewport={{once: true}}
                      // exit={{opacity: 0, transition:{ ease: 'easeInOut'}}}
                    >{teamShow.jobTitle}</motion.h3>
                    <motion.p
                      key={teamShow.id}
                      initial={{opacity: 0, y: 10}}
                      whileInView={{opacity: 1, y: 0, transition:{delay: 1, ease: 'easeInOut'}}}
                      viewport={{once: true}}
                      // exit={{opacity: 0, transition:{ease: 'easeInOut'}}}
                    >{teamShow.description}</motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.div className='carousel__display__img'
                  key={teamShow.id}
                 initial={{opacity: 0, scale: 1.5}}
                 whileInView={{opacity: 1, scale: 1, transition:{delay: 0.5,type:'tween', durtion: 2, ease:'easeInOut'}}}
                 viewport={{once: true}}
                 exit={{opacity: 0, scale: 1.5}}
            >
              <Image src={teamShow.img} alt=""  objectFit='hidden'/>
            </motion.div>


        </div>
        <div className='avatar-carousel'>
              {teamInfo.map((team) => {
                return (
                  <div key={team.id} className={team.id == teamShowIndex ? `active` : `avatar-container`} onClick={() => handleAvatar(team.id)}>
                      <Image 
                        src={team.avatar}
                        alt="team-avatar"
                      />
                      <small>{team.name}</small>
                      <small>{team.jobTitle}</small>
                  </div>
                      )
                    })}
        </div>
    </TeamSec>

  )
}


const TeamSec = styled(motion.section)`
    color: white;
    background: black;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    
    .heading {
      width: fit-content;
      background: black;
      padding: 1rem 2rem;
      font-size: 3rem;
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
      border-radius: 0.5rem 2rem 1rem 0
    }

    .carousel__display {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      /* position: relative; */
      margin-top: 15rem;

      &__text {
        width: 30%;
        margin-right: 40rem;
        /* position: absolute; */
        h2 {
          font-size: 3rem;
        }
        h3 {
          margin-bottom: 1rem;
          color: var(--primary);
        }
        p {
          line-height: 1.6rem;
        }
      }

      &__img {
        width: 40rem;
        height: 50rem;
        position: absolute;
        right: 10%;
        img {
              -webkit-mask-image: radial-gradient(ellipse 90% 100% at 48% 45%, black 40%, transparent 50%);
              mask-image: radial-gradient(ellipse 90% 100% at 48% 45%, black 40%, transparent 50%);
        }
      }
    }

    .avatar-carousel {
      display: flex;
      position: absolute;
      z-index: 3;
      bottom: 0;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 7rem;
      padding: 1.5rem 2.5rem;
      gap: 5rem;
      border-radius: 2rem 2rem 0 0;
      margin-left: 50%;
      transform: translateX(-50%);
      backdrop-filter: blur(15px);
      background: rgba(0,0,0,.3);
      color: white;
      text-align: center;

      .active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        small{
          scale: 1.1;
          transition: all 300ms ease-in-out;

          &:nth-of-type(1) {
            margin-top: 1rem;
            font-weight: 700;
          }
          &:nth-of-type(2) {
            font-weight: 500;
            font-size: 0.6rem;
          }
        }

            span {
              scale: 1.2;
              transition: all 300ms ease-in-out;
            }
        }

      .avatar-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        small{
          transition: all 300ms ease-in-out;

          &:nth-of-type(1) {
            margin-top: 1rem;
            font-weight: 700;
          }
          &:nth-of-type(2) {
            font-weight: 500;
            font-size: 0.6rem;
          }
        }

        :hover {
          span {
            scale: 1.2;
            transition: all 300ms ease-in-out;
          }
          
          small {
            scale: 1.1;
            transition: all 300ms ease-in-out;
          }
        }
      }

      span {
        transition: all 300ms ease-in-out;
        img {
          max-width: 50px;
          max-height: 50px;
        }
      }

      
    }
`;