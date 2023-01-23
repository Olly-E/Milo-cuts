import { Button, TextField } from '@mui/material';
import Script from 'next/script';
import React, { useRef } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from 'react-icons/bs';
import { IconAnim, iconAnim1, iconAnim2, iconAnim3, iconAnim4, miloAnim, newsLetterContainer, newsletterElme1, newsletterElme2, newsText1, newsText2, newsText3 } from './Animation';
import { useScroll } from './useInScroll';

export default function FooterView() {
    const [element, controls] = useScroll();

    return (
        <Foot ref={element}>
        <Script src="https://cdn.lordicon.com/fudrjiwc.js"></Script>

        <FirstDi >
            <motion.div
                 variants={IconAnim}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true}}
                 style={{originY: 'bottom', originX: 'left'}}
            >
            <lord-icon
                src="https://cdn.lordicon.com/pkmkagva.json"
                trigger="hover"
                colors="primary:#0fa98d"
                style={{width:'250px', height:"250px"}}>
            </lord-icon>
            </motion.div>
            <div className='firstDi__text'>
                <motion.h3
                    variants={newsText1}
                    initial="hidden"
                    whileInView="visible"
                 viewport={{once:true}}
                >Can't find what you're looking for </motion.h3>
                <motion.p
                    variants={newsText2}
                    initial="hidden"
                    whileInView="visible"
                 viewport={{once:true}}
                >Milo takes resposibility of his own we are here to serve and would very much like to be of help if you'd have us, that said you can reach us by clicking on any of those links below or stay updated by subscribing to our newslettes and product launch</motion.p>
                <motion.p
                    variants={newsText3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                >direct mail</motion.p>
            </div>
        </FirstDi>
        <SecondDi
            variants={newsLetterContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
        >
            <motion.h3
                variants={newsletterElme1}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
            >Get Access to exclusive updates</motion.h3>
            <motion.div className='text__area'
                variants={newsletterElme2}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
            >
                <input type="text" placeholder='drop email here'/>
                <Button variant="contained" sx={{background: '#0fa98d', height: '2.7rem', width:'17rem',  borderRadius: '4rem', fontSize: '0.7rem', textTransform:'inherit', whiteSpace:'nowrap', padding: '0.5rem', boxSizing: 'border-box', '&:hover': {
                    backgroundColor: '#fff', color: '#0fa98d'} }}>Subscribe to the Newsletter</Button>
            </motion.div>
        </SecondDi>
        <ThirdDi>
        <motion.h2
             variants={miloAnim}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}}
        >
            Milo
        </motion.h2>
        <motion.div className="footer__social__icons">
            <motion.span
                variants={iconAnim1}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            ><BsFacebook /></motion.span>
            <motion.span
                variants={iconAnim2}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            ><BsTwitter /></motion.span> 
            <motion.span
                variants={iconAnim3}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            ><BsYoutube /></motion.span>
            <motion.span
                variants={iconAnim4}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            ><BsBehance /></motion.span>
        </motion.div>
        </ThirdDi>
    </Foot>
  );
}


const Foot =  styled.div`
    background-color: black; 
    color: white;
`;

const FirstDi =  styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10rem 20rem 5rem;
        gap: 6rem;
        box-sizing: border-box;
        margin-bottom: 150px;

        .firstDi__text {
            h3 {
                margin-bottom: 1.5rem;
            }
            p {
                line-height: 1.2rem;

                :nth-of-type(2) {
                    margin-top: 1rem;
                }
            }
        }
`;

const SecondDi =  styled(motion.div)`
    background: white;
    border-radius: 2rem;
    margin-top: -180px;
    width: 1100px;
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    transform-origin: top top;
    display: flex;
    margin-left: 50%;
    transform: translateX(-50%);
    align-items: center;
    flex-direction: column;
    box-shadow: 4px 2px 5px 0px rgba(0,0,0,0.45);

    h3 {
        color: black;
        margin-bottom: 3rem;
        text-align: center;
        margin-top: 5rem;
    }
    .text__area {
        display: flex;
        overflow: hidden;
        border-radius: 8rem;
        align-items: center;
        padding: 0.2rem 0.3rem;
        background-color: black;
        width: 68%;
        input {
            width: 100%;
            background: black;
            height: 3rem;
            padding: 1rem;
            box-sizing: border-box;
            outline: none;
            color: white;
            border: none;
        }

    }
`;

const ThirdDi = styled.div`
    background: #0fa98d;
    display: flex;
    justify-content: space-between;
    padding: 15rem 10rem 2rem;
    height: 20rem;
    box-sizing: border-box;
    margin-top: 20px;
    .footer__social__icons{
        display: flex;
        gap: 2rem;
    }
    svg {
        font-size: 1.4rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover{
            color: black;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
`;