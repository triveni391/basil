import { Link } from "react-router-dom"
import styled from "styled-components"
import { media } from "../constants/breakpoint"

const HeaderComponent = styled.h1`
    font-family: 'Lekton', sans-serif;
    letter-spacing: 10px;
    font-size: ${props => props.size};
    padding: 0;
    margin: 0;
    font-weight: 900;
    a {
    color: #356859;
        text-decoration: none;
    }
    ${media.mobileOnly} {
        font-size: 2em;
    }
`
const Title = ({ size }) => {
    return <HeaderComponent size={size}>
        <Link to="/">BASiL</Link>
    </HeaderComponent>
}

export default Title;