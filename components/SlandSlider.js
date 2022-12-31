import React from 'react'
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import show20 from '../assets/show20.jpg';
import show21 from '../assets/show21.jpg';
import style5 from '../assets/style5.jpg';
import show12 from '../assets/show12.jpg';
import styled from "styled-components";
import Image from 'next/image';

export default function SlandSlider() {

    const imagesSlide = [
        {
            id: 1,
            title: show20,
        },
        {
            id: 2,
            title: show21
        },
        {
            id: 3,
            title: style5,
        },
        {
            id: 4,
            title: show12,
        }
    ]

  return (
    <>
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
       <ImageContainer>
                  <Image width={400} height={550} objectFit='cover' src={style5}/>
     </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
       <ImageContainer>
                  <Image width={400} height={550} objectFit='cover' src={show21}/>
     </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
       <ImageContainer>
                  <Image width={400} height={550} objectFit='cover' src={show20}/>
     </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
       <ImageContainer>
                  <Image width={400} height={550} objectFit='cover' src={show12}/>
     </ImageContainer>
      </SwiperSlide>
      
    </Swiper>
  </>
  )
}




const ImageContainer = styled.div`
    /* margin-left: 1rem;
    position: relative;
    margin-top: 2.8rem; */
    /* transform: rotate(-8deg); */
`;

