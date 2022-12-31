import { Button, TextField } from '@mui/material';
import Script from 'next/script';
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from 'react-icons/bs';

export default function FooterView() {
    return (
        <Foot>
        <Script src="https://cdn.lordicon.com/fudrjiwc.js"></Script>

        <FirstDi>
            <div>
            <lord-icon
                src="https://cdn.lordicon.com/pkmkagva.json"
                trigger="hover"
                colors="primary:#0fa98d"
                style={{width:'250px', height:"250px"}}>
            </lord-icon>
            </div>
            <div className='firstDi__text'>
                <h3>Can't find what you're looking for </h3>
                <p>Milo takes resposibility of his own we are here to serve and would very much like to be of help if you'd have us, that said you can reach us by clicking on any of those links below or stay updated by subscribing to our newslettes and product launch</p>
                <p>direct mail</p>
            </div>
        </FirstDi>
        <SecondDi>
            <h3>Get Access to exclusive updates</h3>
            <div className='text__area'>
                <input type="text" placeholder='drop email here'/>
                <Button variant="contained" sx={{background: '#0fa98d', height: '2.7rem', width:'17rem',  borderRadius: '4rem', fontSize: '0.7rem', textTransform:'inherit', whiteSpace:'nowrap', padding: '0.5rem', boxSizing: 'border-box', '&:hover': {
                    backgroundColor: '#fff', color: '#0fa98d'} }}>Subscribe to the Newsletter</Button>
            </div>
        </SecondDi>
        <ThirdDi>
        <motion.h2>
            Milo
        </motion.h2>
        <motion.div className="footer__social__icons">
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
            <BsBehance />
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

const SecondDi =  styled.div`
    background: white;
    border-radius: 2rem;
    margin: 0 15rem;
    padding: 5rem 15rem;
    margin-bottom: -10rem;
    z-index: 1;
    position: relative;
    box-shadow: 4px 2px 5px 0px rgba(0,0,0,0.45);

    h3 {
        color: black;
        margin-bottom: 3rem;
        text-align: center;
    }
    .text__area {
        display: flex;
        overflow: hidden;
        border-radius: 8rem;
        align-items: center;
        padding: 0.2rem 0.3rem;
        background-color: black;
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