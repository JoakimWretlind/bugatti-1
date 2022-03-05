import styled from 'styled-components';

export const ScrollContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    will-change: transform;
`;

export const MainWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #333;
`;

export const Hero = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rebeccapurple;
`;

export const Content = styled.div`
    height: 80vh;
    width: 100%;
    max-width: 150rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: violet;
`;

export const Legacy = styled.div`
    height: 210vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: darkorchid;
`;

export const Footer = styled.footer`
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkmagenta;
`;