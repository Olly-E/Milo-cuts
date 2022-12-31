import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { container, imagesAnim, itemImg, modalAnimation } from './Animation';
import styled from "styled-components";
import { ImageList, ImageListItem } from '@mui/material';
import style2 from '../assets/style2.jpg';
import style5 from '../assets/style5.jpg';
import style6 from '../assets/style6.jpg';
import show1 from '../assets/show1.jpg';
import show2 from '../assets/show2.jpg';
import show3 from '../assets/show3.jpg';
import show4 from '../assets/show4.jpg';
import show5 from '../assets/show5.jpg';
import show6 from '../assets/show6.jpg';
import show7 from '../assets/show7.jpg';
import show8 from '../assets/show8.jpg';
import show9 from '../assets/show9.jpg';
// import show10 from '../assets/show10.jpg';
import show11 from '../assets/show11.jpg';
import show12 from '../assets/show12.jpg';
import show13 from '../assets/show13.jpg';
import show14 from '../assets/show14.jpg';
import show15 from '../assets/show15.jpg';
import show16 from '../assets/show16.jpg';
import show17 from '../assets/show17.jpg';
import show19 from '../assets/show19.jpg';
import show20 from '../assets/show20.jpg';
import show21 from '../assets/show21.jpg';
import Image from 'next/image';
import {MdKeyboardBackspace} from 'react-icons/md'


export default function GridModal({setShowModal}) {
  

  const itemData = [
    {
    imgTitle: 'show1',
    img: show1
  },
    {
    imgTitle: 'show2',
    img: show2
  },
    {
    imgTitle: 'show3',
    img: show3
  },
    {
    imgTitle: 'show4',
    img: show4
  },
    {
    imgTitle: 'show12',
    img: show12
  },
    {
    imgTitle: 'show13',
    img: show13
  },
    
    {
    imgTitle: 'show14',
    img: show14
  },
    {
    imgTitle: 'show15',
    img: show15
  },
    {
    imgTitle: 'show5',
    img: show5
  },
    {
    imgTitle: 'show6',
    img: show6
  },
    {
    imgTitle: 'show7',
    img: show7
  },
  {
    imgTitle: 'show8',
    img: show8
  },
  {
    imgTitle: 'show9',
    img: show9
  },
  // {
  //   imgTitle: 'show10',
  //   img: show10
  // },
  {
    imgTitle: 'show11',
    img: show11
  },
  {
    imgTitle: 'show16',
    img: show16
  },
  {
    imgTitle: 'show17',
    img: show17
  },
  {
    imgTitle: 'show19',
    img: show19
  },
  {
    imgTitle: 'show20',
    img: show20
  },
  {
    imgTitle: 'show21',
    img: show21
  },
]



  return (
    <AnimatePresence>
    <DivModal
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        
      >
        <motion.div className='back' onClick={() => setShowModal(false)} 
          initial={{opacity: 0, x: '15px'}}
          animate={{opacity: 1, x: '0', transition:{delay: 0.5, duration: 0.5}}}
        >
        <MdKeyboardBackspace/></motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{padding: 0, margin: 0}}
        >
          <ImageList variant="masonry" cols={5} gap={0} style={{columnGap: '8px' }}>
            {itemData.map((item) => (
              <ImageListItem key={item.imgTitle}>
                <motion.div
                  variants={itemImg}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                >
                 <Image
                  src={item.img}
                  initial="hidden"
                  animate="visible"
                  object-fit="cover"
                  alt={item.imgTitle}
                  loading="lazy"
                />
                </motion.div>
              </ImageListItem>
            ))}
          </ImageList>
          </motion.div>
      </motion.div>
    </DivModal>
    </AnimatePresence>
  );
}

const DivModal = styled(motion.div)`
  background: black;
  width: 3%;
  height: 1%;
  background: black;
  padding: 8rem;
  overflow-y: scroll;
  position: absolute;
  border-radius: 50%;
  top: 30rem;
  left: 60rem;
  z-index: 10000;
  box-sizing: border-box;
  overflow-y: hidden;

  h1 {
    color: white;
  }
  .back {
    color: white;
    font-size: 3rem;
    cursor: pointer;
  }
`;
