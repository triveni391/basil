import styled from "styled-components";
import { media } from "../../constants/breakpoint";
import Title from "../title";
import StyledLink from "../UI/styledLink";

const Container = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 2px solid #B9E4C9;
    width: 100%;
    i {
        padding-right: 2rem;
        font-size: 2em;
    }
    ${media.mobileOnly} {
        padding: 0 1rem;
    }
`;

const RestuarantTitle = styled.h2`
    text-transform: capitalize;
    color: #fd5533;
    padding-right: 1rem;
`

const BackButtonContainer = styled.span`
    color: #37966F;
`

const IconContainer = styled(BackButtonContainer)`
    height: 20px;
    width: 20px;
    font-size: 8px;
    display: flex;
    align-items: flex-end;
`
const Header = ({ restuarant }) => {
    return <Container>
        <BackButtonContainer>
            <StyledLink to='/'>
                <i class="fas fa-home"></i>
            </StyledLink>
        </BackButtonContainer>
        {/* <Title size="3em" /> */}
        {/* <RestuarantTitle size="3em">restuarant</RestuarantTitle>
        <IconContainer>
            <i class="fas fa-chevron-right"></i>
        </IconContainer> */}
        <RestuarantTitle size="3em">{restuarant}</RestuarantTitle>
    </Container>
}

export default Header;