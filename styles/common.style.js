import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: palevioletred;
`;

export const Header = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-family: 'oswald', sans-serif;
    font-size: clamp(3rem, 12vw, 14rem);
    letter-spacing: clamp(.3rem, 2vw, 2rem);
`;