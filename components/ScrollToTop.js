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
         <div className={`${visible ? 'scroll-circle' : 'none'}`} >
            <a href="#">
            <FaChevronUp />
            <motion.p href="#"className={`${visible ? 'block' : 'none'}`}
                style={{scale: scrollYProgress}}
                animate={{rotate: ['0deg', '600deg'], transition:{duration: 6, repeat: Infinity}}}
            >
            </motion.p>
            </a>
        </div>
    </Div>
  );
}


const Div = styled(motion.div)`
:hover p {
    background: white;
}
   
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
        :hover svg {
            color: var(--primary);
        }
        svg {
            color: white;
            position: absolute;
            height: 1.3rem;
            width: 1.3rem;
            z-index: 100000;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 30%;
            transition: all 500ms ease-in-out;
        }
    }
    p {
        width: 1.6rem;
        height: 2.1rem;
        background-color: var(--primary);
        padding: 1.5rem;
        padding-bottom: 2.5rem;
        margin-top: -0.3px;
        margin-left: -0.7rem;
        border-radius: 2rem ;
        display: flex;
        /* transform-origin: 10% 100%; */
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }

`;

export default ScrollToTop;
