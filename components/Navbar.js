import styled from "styled-components";
import {FiSearch}  from 'react-icons/fi';


export default function Navbar() {
  return (
    <Nav>
        <div className="navs">
                <p>Home</p>
                <p>Galley</p>
                <p>Services</p>
                <p>AboutUs</p>
        </div>
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

const Nav = styled.div`
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