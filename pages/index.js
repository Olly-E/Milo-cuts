import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import styled from "styled-components";
import {BsPlayFill} from 'react-icons/bs';
import style1 from '../assets/style1.jpg'
import style2 from '../assets/style2.jpg'
import style5 from '../assets/style5.jpg'
import SecondView from '../components/SecondView';
import Infinity from '../components/Infinity';
import ScrollToTop from '../components/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import GridModal from '../components/GridModal';



export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // const { scrollYProgress } = useScroll();


    // showModal ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'auto'


  return (
    <BigDiv >
      <div className={showModal ? `modal-on`: ``}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeDiv >
      <Navbar />
      <div className='flow flowSwitch' >
          <FirstView>
          {/* <motion.div
        className="progress-bar"
        // style={{ scaleX: scrollYProgress }}
      /> */}
            <Div1>
              <div>
                <h1>Find The best
                Barber Shop</h1> 
                <ForYou>For You</ForYou>
                <section>
                <Description>
                  haircut Services For men and women. Where here the customers hair, saclp, Face and body can be 
                  pampered, with the best servicess and facilities
                </Description>
                <ActionBut>
                  <p>Book Now</p>
                  <Watchvideo>
                    <span>
                      <BsPlayFill />
                    </span>
                    <p>Watch Video</p>
                  </Watchvideo>
                  
                </ActionBut>
                <Acheivement>
                  <div className='acheivment'>
                    <div className='plusDiv'><span style={{fontSize: '1.2rem', color: 'hsl(169deg 84% 36%)' }}>+</span><span>20</span></div>
                    <p>Years Of Experience</p>
                  </div>
                  <span style={{borderLeft: '3px solid hsl(24deg 49% 94%)', height: '5rem', width: '0'}}/>
                  <div className='acheivment'>
                    <div className='plusDiv'><span  style={{fontSize: '1.2rem', color: 'hsl(169deg 84% 36%)' }}>+</span><span>80</span></div>
                    <p>Our Awesome Expert</p>
                  </div>
                  <span style={{borderLeft: '3px solid hsl(24deg 49% 94%)', height: '5rem', width: '0'}}/>
                  <div className='acheivment'>
                    <div className='plusDiv'><span style={{ fontSize: '1.2rem', color: 'hsl(169deg 84% 36%)'}}>+</span><span>20K</span></div>
                    <p>Happy Customer</p>
                  </div>
                </Acheivement>
                </section>
              </div>
            </Div1>
            <Div2>
              <BigContainer>
                <ImageContainer1>
                  <Image width={400} height={550} className="image1" objectFit='cover' src={style2}/>
                </ImageContainer1>
                <ImageContainer2>
                  <Image width={400} height={550} className="image1" objectFit='cover' src={style1}/>
                </ImageContainer2>
                <ImageContainer3>
                  <Image width={400} height={550} className="image1" objectFit='cover' src={style5}/>
                </ImageContainer3>
                {!showModal && <div className='circle' onClick={() => setShowModal(true)}><h3>Show more</h3></div>}
                
            
              </BigContainer>
            </Div2>
            <ScrollToTop />
            <Infinity />
          </FirstView>
          <Second>
            <SecondView />
          </Second>
    </div>
      </HomeDiv>
      </div>
      <AnimatePresence>
        {showModal &&  <motion.div className='gridModal' exit={{opacity: 0, transition: {durtion: 2}}}><GridModal setShowModal={setShowModal} /> </motion.div>}</AnimatePresence>
    </BigDiv>
  )
}

const BigDiv = styled.div`

.modal-on {
  height: 100vh;
  overflow: hidden;
}
`;

const HomeDiv = styled.div`
  overflow-x: hidden;

  .progress-bar {
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--red);
  transform-origin: 0%;
  }
`;
const FirstView = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  

  .gridModal {
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    /* border: 3px solid purple; */
    top: 0;
    left: 0;
    z-index: 40000;
    /* background: black; */
  }
`;

const Div1 = styled.div`
    background: white;
    width: 50%;
    padding-left: 13rem;
    box-sizing: border-box;
    z-index: 300;
    section {
      position: absolute;
      left: 1rem;
      width: max-content;
      background: transparent;
    }
    h1{
      margin-top: 10rem;
      color: black; 
      font-size: 7rem;
      font-weight: 500;
      line-height: 7rem;
      width: 1000px;
      word-spacing: 5px;
      letter-spacing: 1px;
      margin-bottom: 0;
      z-index: 10;
    }
`;


const ForYou = styled.p` 
  font-family: 'Qwigley';
  font-weight: 500;
  font-size: 9rem;
  color: var(--primary);
  margin: 0;
  margin-top: -4rem;
  margin-left: -1rem;
  /* text-decoration: underline; */
  /* text-decoration-thickness: 2px; */
`

const Description = styled.h5`
  width: 30rem;
  font-weight: 500;
  margin-top: -2rem;
  margin-left: 12.5rem;
  font-size: 1rem;
`;
const ActionBut = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: 12.5rem;
  box-sizing: border-box;
  margin-top: 1rem;
  p {
    background: var(--primary);
    color: black;
    padding: 1rem 2.2rem;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    color: white;
    box-shadow: 1px 0px 1px gray;
  }
`;

const Watchvideo =  styled.div`
  align-items: center;
  display: flex;
    span{
      padding: 0.5rem;
      border-radius: 100%;
      border: 3px solid hsl(24deg 49% 94%);
      display: flex;
      justify-self: center;
      align-items: center;
      font-size: 1.5rem;
    }
  p {
   background: white;
   box-shadow: none;
   font-weight: 600;
   color: black;
   margin-left: -0.5rem;
   padding: 0.4rem 0;
  }
`;
const Acheivement = styled.div`
  display: flex;
  margin-left: 12.5rem;
  box-sizing: border-box;
  gap: 1rem;
  margin-top: 2.5rem;
  align-items: center;
  
  .acheivment {
    width: 8rem;
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
    .plusDiv {
      display: flex;
      align-items: center;
    }
    span {
      font-weight: 600;
      font-size: 2rem;
    }
    p{
      margin-top: 0;
      font-weight: 500;
      line-height: 1.4rem;
      margin-right: auto;
      display: flex;
      justify-content: center;
    }
    
  }
`;
const Div2 = styled.div`
  background: hsl(24deg 49% 94%);
    width: 50%;
    padding-right: 10rem;
   display: flex; 
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
   .test {
    :hover {
      color:blue;
    }
   }
`;
const BigContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  
  
  .circle {
    padding: 2.3rem;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    background-color: #040404;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='250' height='30' patternUnits='userSpaceOnUse' patternTransform='rotate(49) scale(0.62)'%3E%3Cpath id='a' data-color='outline' fill='none' stroke='%23323232' stroke-width='1.43' d='M-62.5-15C-31.3-15 0-7.5 0-7.5S31.3 0 62.5 0 125-7.5 125-7.5s31.3-7.5 62.5-7.5S250-7.5 250-7.5 281.3 0 312.5 0'%3E%3C/path%3E%3Cuse xlink:href='%23a' y='15'%3E%3C/use%3E%3Cuse xlink:href='%23a' y='30'%3E%3C/use%3E%3Cuse xlink:href='%23a' y='45'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 10rem;
    margin-right: 25rem;
    border: 8px solid hsl(24deg 49% 94%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms ease-in-out;
    z-index: 800;

    :hover {
      transform: scale(1.5);
      border: none;
      h3{
        display: none;
      }
    }
    
    
    h3 {
      line-height: 1rem;
      font-size: 0.8rem;
      font-weight: 600;
      transform: rotate(-30deg);
      color: white;
      transition: all 400ms ease-in-out;
    }
  }
`;
const ImageContainer1 =  styled.div`
  margin-left: 1rem;
 position: absolute;
 margin-top: 2.8rem;
  transform: rotate(-8deg);
`;
const ImageContainer2 =  styled.div`
  margin-left: 1rem;
 position: absolute;
 margin-top: 2.8rem;
`;
const ImageContainer3 =  styled.div`
  margin-left: 1rem;
   position: absolute;
   margin-top: 2.8rem;
   transform: rotate(8deg);
`;
const Second =  styled.div`
  box-sizing: border-box;
  z-index: 500;
  margin-top: -2rem;
`;