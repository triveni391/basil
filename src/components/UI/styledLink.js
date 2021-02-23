import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        color: inherit;
        text-decoration: inherit;

    }
`;
export default ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>