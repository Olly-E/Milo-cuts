import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FaChevronUp} from 'react-icons/fa';
import { motion, useViewportScroll } from 'framer-motion';



const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
        })
    }, [])
  

  return (
    <Div>
        <div className={`${visible ? 'scroll-circle' : 'none'}`}>
            <FaChevronUp />
            <motion.a href="#"className={`${visible ? 'block' : 'none'}`}
                style={{
                    scaleY: scrollYProgress
                }}
            >
            </motion.a>
        </div>
    </Div>
  );
}


const Div = styled(motion.div)`
   
    .none {
        opacity: 0;
        display: none;
    }
    .scroll-circle {
        overflow: hidden;
        border-radius: 50%;
        height: 3.3rem;
        background: black;
        width: 3.2rem;
        position: fixed;
        bottom: 40px;
        right: 40px;
        z-index: 10000;
        svg {
            color: white;
            position: absolute;
            height: 1.3rem;
            width: 1.3rem;
            z-index: 100000;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 30%;
        }
    }
    a {
        bottom: 60px;
        right: 40px;
        width: 1.6rem;
        height: 2rem;
        background-color: var(--primary);
        padding: 1.5rem;
        margin-top: -1.7rem;
        display: flex;
        transform-origin: 50% 100%;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: 0.4s ease-in-out;
        
    }

`;

export default ScrollToTop;
