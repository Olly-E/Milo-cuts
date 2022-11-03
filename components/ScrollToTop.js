import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FaChevronUp} from 'react-icons/fa';



const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
        })
    }, [])
    useEffect(() => {

    })

  return (
    <Div>
      <a href="#"className={`${visible ? 'block' : 'none'}`}>
      <FaChevronUp />
      </a>
    </Div>
  );
}


const Div = styled.div`
    max-width: 100vw;
    .none {
        opacity: 0;
        visibility: hidden;
    }
    a {
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: var(--primary);
        padding: 1rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000000;
        transition: 0.4s ease-in-out;
        svg {
            color: #fff;
            font-size: 1.3rem;
        }
    }
`;

export default ScrollToTop;
