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

import Image from 'next/image';
import { IconButton } from '@mui/material';

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
      jobTitle: 'Speed barber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb2,
      avatar: barb2modified,
      id: 1,
    },
    {
      name: 'Dima',
      jobTitle: 'Speed barber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb3,
      avatar: barb3modified,
      id: 2,
    },
    {
      name: 'Jaw',
      jobTitle: 'Speed barber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae laboriosam et. Quis repudiandae et iste quod alias accusantium illo corporis debitis deleniti, dolore libero iure amet praesentium doloribus beatae autem pariatur? Sunt earum nihil libero laboriosam dicta, commodi, maxime eum doloremque ad quia laborum veritatis ipsam debitis vitae iure quas provident animi! Dicta voluptate ad accusamus provident eaque natus et eum aspernatur sapiente, ipsa laborum repellendus? Reiciendis nesciunt pariatur ab? Libero praesentium optio, temporibus harum ipsa suscipit quasi et!',
      img: barb4,
      avatar: barb4modified,
      id: 3,
    },
    {
      name: 'Periwinkle',
      jobTitle: 'Speed barber',
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
        <h1>The Lineup</h1>
        <div className='carousel__display'>
            <IconButton aria-label="delete" size="small" onClick={prev}>
                <NavigateBeforeIcon sx={{color: 'white', background: 'black',fontSize: '2rem', padding: '0.5rem', borderRadius: '50%'}} fontSize="inherit" />
            </IconButton>
            <div className="carousel__display__text">
              <h2>{teamShow.name}</h2>
              <h3>{teamShow.jobTitle}</h3>
              <p>{teamShow.description}</p>
            </div>
            <div className='carousel__display__img'>
              <Image src={teamShow.img} alt=""  objectFit='hidden'/>
            </div>
              <IconButton onClick={next}>
                <NavigateNextIcon sx={{color: 'white', background: 'black',fontSize: '2rem', padding: '0.5rem', borderRadius: '50%'}} fontSize="inherit" />
              </IconButton>
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


const TeamSec = styled.section`
    color: white;
    background: black;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    

    .carousel__display {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;

      &__text {
        width: 30%;
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