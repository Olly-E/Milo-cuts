import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { itemImg, modalAnimation } from './Animation';
import styled from "styled-components";
import { ImageList, ImageListItem } from '@mui/material';
import style1 from '../assets/style1.jpg';
import style2 from '../assets/style2.jpg';
import style5 from '../assets/style5.jpg';
import style6 from '../assets/style6.jpg';
import Image from 'next/image';
import {MdKeyboardBackspace} from 'react-icons/md'


export default function GridModal({setShowModal}) {

  const itemData = [
    {
    imgTitle: 'img1',
    img: style1
  },
  {
    imgTitle: 'img2',
    img: style2
  },
  {
    imgTitle: 'img3',
    img: style5
  },
  {
    imgTitle: 'img4',
    img: style6
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
      <div>
        <div className='back' onClick={() => setShowModal(false)}><MdKeyboardBackspace/></div>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                 <Image
                  src={item.img}
                  // component={motion.div}
                  variants={itemImg}
                  initial="hidden"
                  animate="visible"
                  // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.imgTitle}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
      </div>
    </DivModal>
    </AnimatePresence>
  );
}

const DivModal = styled(motion.div)`
  background: black;
  width: 3%;
  height: 3%;
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