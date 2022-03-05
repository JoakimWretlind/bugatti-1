import styled from 'styled-components';

export const MainWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    //background: #020203;
    background: linear-gradient(#020203, #212223);
`;
/********* HERO ***********/
export const Hero = styled.div`
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(hsl(0, 0%, 0%), rgba(0, 0, 0, 0) 55%, hsl(0, 0%, 0%) 70%);
    @media (min-width: 767px){
        background: linear-gradient(hsl(0, 0%, 0%), rgba(0, 0, 0, 0) 55%, hsl(0, 0%, 0%) 93%);
    }  
`;

export const LandingHeader = styled.h1`
    position: absolute;
    top: 20vh;
    padding-left: 7%;
    text-transform: uppercase;
    font-size: clamp(1.2rem, 6vw, 5rem);
    letter-spacing: clamp(.3rem, 6vw, 8rem);
    font-weight: 300;
    color: ${props => props.theme.white};
    z-index: 2;
`;

/********** VALUES **********/
export const Content = styled.div`
    height: 80vh;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;

export const InnerContent = styled.div`
    height: 100%;
    width: 100%;
    max-width: 150rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: aqua;
`;

export const Footer = styled.footer`
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
`;