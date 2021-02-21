import styled from "styled-components"
import Title from "../title";

const Container = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid #B9E4C9;
    i {
        padding-right: 2rem;
        font-size: 2em;
    }
`;

const IconContainer = styled.span`
    color: #37966F
`
const Header = () => {
    return <Container>
        <IconContainer>
            <i class="fas fa-long-arrow-alt-left"></i>
        </IconContainer>
        <Title size="3em" />
    </Container>
}

export default Header;