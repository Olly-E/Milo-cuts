import styled from "styled-components";
import {FiSearch}  from 'react-icons/fi';
import {motion} from 'framer-motion';
import { navAnim,  navContainerAnim } from "./Animation";


export default function Navbar() {

    const navLinks = [
        {
            name: 'Home',
            id: '1'
        },
        {
            name: 'Gallery',
            id: '2'
        },
        {
            name: 'AboutUs',
            id: '3'
        },
        {
            name: 'Services',
            id: '4'
        },
    ]
  return (
    <Nav 
        variants={navAnim}
        initial="hidden"
        animate="visible"
    >
        <motion.div className="navs">
        {navLinks.map((navs) => {
            return  (<motion.p>{navs.name}</motion.p>)
                })}
        </motion.div>
        <LogoName>
            <h1>Milo</h1>
            <h1>Cuts</h1>
        </LogoName>
        <Search>
            <FiSearch />
            <p>Book Now</p>
        </Search>
    </Nav>
  );
}

const Nav = styled(motion.div)`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    padding: 1.5rem 13rem;
    justify-content: space-between;
    box-sizing: border-box;
    user-select: none;
    z-index: 600;
    .navs {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-weight: 600;
    p {
        display: flex;
        flex-direction: column;
        
        :after{
            content: '';
            width: 0;
            border-bottom: 2px solid var(--primary);
            transition: all 200ms ease-in-out;
            
        }
        :hover:after {
            width: 20px;
            
        }
    }

    .singleNav {
        display: flex;
        justify-content: start;
        span {
            width: 2rem;
            height:0;
            border-bottom: 2px solid black;
        }
    }
  }
`;
const LogoName = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.5rem;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    p{
        font-weight: 600;
        text-decoration: underline;
        padding-left :1rem;
        margin-left: 1rem;
        border-left: 1px solid black;
    }
`;