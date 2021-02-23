import styled from "styled-components"
import NavBar from "../navBar";
import Title from "../title";

const Container = styled.div`
    width: 40%;
    margin: auto;
    text-align: center;
    padding: 1rem 0;
`;

const items = ["Top Rated", "Offers", "Near By"]
const Header = ({ active, onClick }) => {
    return <Container>
        <Title size="6em" />
        {/* <NavBar active={active} items={items} onClick={(index) => onClick(index)} /> */}
    </Container>
}

export default Header;