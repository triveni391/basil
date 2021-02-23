import { media } from "../constants/breakpoint";

const { default: styled } = require("styled-components")

const Container = styled.div`
    padding: 1rem;
    background-color: #FFFBE6;
    width: 100%;
    height: auto;
    min-height: 100vh;
    ${media.mobileOnly} {
        padding: 0rem;
    }
`

const Layout = ({ children }) => {
    return <Container>{children}</Container>
}

export default Layout;