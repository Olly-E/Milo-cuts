import React from 'react';
import Infinity from './Infinity';
import styled from "styled-components";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import services from '../assets/services.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { featureCardConatinerAnim, feautreCardAnim } from './Animation';

export default function SecondView() {

  const feauturesCard = [
    {
      icon: img1,
      head: 'Blazing fast services',
      desc1: 'Lorem ipsum',
      desc2: 'Lorem dolor (N1000)',
      price: '200$',
    },
    {
      icon: img2,
      head: 'State of the art tools',
      desc1: 'Lorem ipsum',
      desc2: 'Lorem dolor (N1000)',
      price: '200$',
    },
    {
      icon: img3,
      head: 'Superb customer service',
      desc1: 'Lorem ipsum',
      desc2: 'Lorem dolor (N1000)',
      price: '200$',
    }
    
  ]
  return (
    <SecondVieww>
      <Container1
        
      >
        <h2 className='conH1'>HAIR TREATMENT</h2>
        <h1 className='conH2'>Our Feautured Hair Treatment</h1>
        <p className='conp'>
          Our Feuatured hair treatment services is second to none and absolutley top notch, with experts and hands-on attention, it'll leave you wanting for more...
        </p>
        <motion.div className='cat-card-con'
          variants={featureCardConatinerAnim}
          initial="hidden"
          whileInView="show"
        viewport={{once: true}}
        >
          {feauturesCard.map((feature) => {
            return (
            <motion.div className='cat-card'
              variants={feautreCardAnim}
            >
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}><Image src={feature.icon} height={64} width={64}/></div>
              <h3>{feature.head}</h3>
              <ul>
                <li><span>{feature.desc1}</span></li>
                <li><span>{feature.desc2}</span></li>
              </ul>
              <h2>{feature.price}</h2>
            </motion.div>  
            )
          })}
        </motion.div>
          <p className='all-services'>All Services</p>
      </Container1>
         <div className='div-dec' />
      <Container2>
         <Image src={services} width={550}  height={700} objectFit='cover' tabIndex={7}/>
      </Container2>
    </SecondVieww>
  );
}

// const Div = styled(motion.div)`

const SecondVieww = styled(motion.div)`
  position: relative;
  padding: 2rem 14rem 10em;
  .all-services {
    font-weight: 600;
    border: 2px solid black;
    border-radius: 1.3rem;
    width: fit-content;
    padding: 0.3rem 0.8rem;
    margin-top: 2.5rem;
  }
  .div-dec {
      width: 40rem;
      margin-top: -38rem;
      margin-left: 35rem;
      height: 37rem;
      z-index: 1;
      position: absolute;
      border-radius: 0 0 0 3rem;
      border: 8px solid var(--primary);
      
    }
  `;

  const Container1 =  styled(motion.div)`
    margin-top: 14rem;
    max-width: 50rem;
    z-index: 5;
    position: relative;
    .conH1 {
      font-size: 1.4rem;
      color: var(--primary)
    }
    .conH2 {
      font-size: 2.5rem;
      max-width: 20rem;
      margin-top: 0.4rem;
      line-height: 3rem;
    }
    .conp {
      font-size: 1rem;
      max-width: 30rem;
      margin-top: 1rem;
    }
    .cat-card-con{
      display: flex;
      gap: 1rem;
      align-items: stretch;
      line-height: 2rem;
      margin-top: 1.7rem;
      .cat-card{
        padding: 2rem 1.5rem;
        border-radius: 0.6rem;
        box-shadow: -1px 1px 5px 0px rgb(145 145 145 / 67%);
        -webkit-box-shadow: -1px 1px 5px 0px rgb(145 145 145 / 67%);
        width: fit-content;
        background: white;
        z-index: 1;
        h3 {
          font-size: 1rem;
        }
        ul {
          padding-inline-start: 15px;
          color: var(--primary);
          span {
            font-size: 0.9rem;
            color: black;
          }
        }
        h2 {
          color: var(--primary);
          margin: 0.8rem 0 0 0;
          text-align: center;
        }
      }

    }
  ` ;

  const Container2 =  styled.div`
    position: absolute;
    top: 0;
    margin-top: 13.5rem;
    margin-left: 38.5rem;
    z-index: 2;
  `;
