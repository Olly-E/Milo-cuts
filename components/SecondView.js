import React from 'react';
import Infinity from './Infinity';
import styled from "styled-components";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import services from '../assets/services.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { featureImage, featureVariant, featureVariantChild, feautreCardAnim, feautreTextAnim1, feautreTextAnim2, feautreTextAnim3, feautreTextAnim4, frameAnimation, imageFrameAnimation} from './Animation';

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
        <motion.h2 className='conH1'
            variants={feautreTextAnim1}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >HAIR TREATMENT</motion.h2>
        <motion.h1 className='conH2'
          variants={feautreTextAnim2}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >Our Feautured Hair Treatment</motion.h1>
        <motion.p className='conp'
          variants={feautreTextAnim3}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          Our Feuatured hair treatment services is second to none and absolutley top notch, with experts and hands-on attention, it'll leave you wanting for more...
        </motion.p>
        <motion.div className='cat-card-con'
          variants={featureVariant}
          initial="hidden"
          whileInView="visible"
        viewport={{once: true}}
        >
          {feauturesCard.map((feature) => {
            return (
            <motion.div className='cat-card'
              variants={featureVariantChild}
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
          <motion.p className='all-services'
              variants={feautreTextAnim4}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
          >All Services</motion.p>
      </Container1>
      <Container2>
         <motion.div className='div-dec' 
         variants={frameAnimation}
         initial="hidden"
         whileInView="visible"
         viewport={{once: true}}
         />
         <motion.div
          variants={featureImage}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
         >
            <Image src={services} width={550}  height={700} objectFit='cover' tabIndex={7}/>
         </motion.div>
      </Container2>
    </SecondVieww>
  );
}

// const Div = styled(motion.div)`

const SecondVieww = styled(motion.div)`
  position: relative;
  padding: 2rem 14rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
  .all-services {
    font-weight: 600;
    border: 2px solid black;
    border-radius: 1.3rem;
    width: fit-content;
    padding: 0.3rem 0.8rem;
    margin-top: 2.5rem;
  }
  `;

  const Container1 =  styled(motion.div)`
    margin-top: 5rem;
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
    position: relative;
    top: 0;
    margin-top: 5rem;
    margin-left: -7rem;
    z-index: 2;

    .div-dec {
      width: 40rem;
      margin-top: 2rem;
      margin-left: -3.3rem;
      height: 37rem;
      z-index: -1;
      position: absolute;
      border-radius: 0 0 0 3rem;
      border: 8px solid var(--primary);
    }
  `;
