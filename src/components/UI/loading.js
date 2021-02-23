import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`
const LoadingContainer = styled.div`
    font-size: 10em;
    width: 100%;
    height: 100vh;
    color: ;
    display: flex;
    justify-content: center;
    color: #356859;
    align-items: center;
    animation: ${rotate} 3s infinite;
`

function Loading() {
    return <LoadingContainer>
        <i class="fas fa-spinner"></i>
    </LoadingContainer>
}

export default Loading;