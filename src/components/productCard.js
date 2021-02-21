import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/img/samosa.jpg";
import { media } from "../constants/breakpoint";


const Container = styled.div`
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 2rem;
    height: 100%;
    ${media.mobileOnly} {
        height: fit-content;
    }
`

const Image = styled.img`
    width: 100%;
    height: 70%;
`

const Para = styled.h4`
    width: 100%;
    font-family: 'Lekton', sans-serif;
    color: #fd5533;
    font-size: 3em;
    text-align: center;
    text-decoration: none;
    padding-top: 1rem;
    margin: 0;
    border: #FFFBE6;
`
const ProductCard = ({ index, name }) => {
    return <Link to={`/${index}`}>
        <Container>
            <Image src={img} />
            <Para>{name}</Para>
        </Container>
    </Link>
}

export default ProductCard;