import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/productCard";
import Header from "../components/home/header";
import { getRestuarants } from "../actions/restuarants";
import { connect, useDispatch } from "react-redux";
import { media } from "../constants/breakpoint";

const Container = styled.div`
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 2rem;
    width: 100%;
    height: 100%;
    ${media.mobileOnly} {
        grid-template-columns: 100%;
        grid-column-gap: 5rem;
        padding: 2rem;
    }
`


const Home = (props) => {
    const [active, setActive] = useState(0);
    const dispatch = props.dispatch;
    const restuarants = props.restuarants

    useEffect(() => {
        dispatch(getRestuarants())
    }, []);

    return <>
        <Header active={active} onClick={(index) => setActive(index)} />
        <Container>
            {(restuarants || []).map((restuarant, index) => <ProductCard {...restuarant} index={index} />)}
        </Container>
    </>
}

function mapStateToProps(store) {
    return {
        restuarants: store.restuarants.data
    }

}

export default connect(mapStateToProps)(Home);