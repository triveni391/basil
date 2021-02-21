import styled from "styled-components"
import { media } from "../constants/breakpoint"

const NavBarContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    transition: 1s;
    .active {
        border-bottom: 2px solid #37966F;
        font-weight: 600;
    }
    ${media.mobileOnly} {
        display: none;
    }
`

const NavBarItem = styled.li`
    font-size: 17px;
    color: #37966F;
    text-transform: uppercase;
    cursor: pointer;
`


const NavBar = ({ active, items, onClick }) => {
    return <NavBarContainer>
        {items.map((item, index) => (<NavBarItem className={active === index ? "active" : null} onClick={() => onClick(index)}>{item}</NavBarItem>))}
    </NavBarContainer>
}

export default NavBar;