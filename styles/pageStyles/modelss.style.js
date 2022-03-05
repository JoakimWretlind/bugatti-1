import styled from 'styled-components';

export const MainWrapper = styled.div`
    overflow: hidden;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.black};
    @media (min-width: ${props => props.theme.largeScreen}){
        height: 100vh;
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }    
`;

export const InnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    max-width: 152rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

/*********** TOP SECTION ************/
export const TopSection = styled.div`
    height: 18vh;
    width: 85vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media (min-width: ${props => props.theme.smallScreen}){
        height: 14vh;
        width: 80vw;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 2rem;        
    }
    @media (min-width: ${props => props.theme.largeScreen}){
        height: 14vh;
        width: 80vw;
    }
`;

export const Header = styled.h1`
    text-transform: uppercase;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: clamp(3rem, 3vw, 4rem);
    font-weight: 300;
    letter-spacing: clamp(.3rem, 2vw, 2.4rem);
    white-space: nowrap;
`;

/*********** MIDDLE SECTION ************/
export const MiddleSection = styled.div`
    height: 100%;
    min-height: 74vh;
    width: 100vw;
    min-width: 42rem;
    padding: 3rem 0 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: ${props => props.theme.largeScreen}){
        height: 74vh;
        width: 80vw;
        padding: 3rem 0 5rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
    }
`;

export const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    &.container:not(:focus-within):not(:hover) {
    .hover { 
    background: transparent;
    transform: translateY(0);
    opacity: 1;
        }
    }
    @media (min-width: ${props => props.theme.largeScreen}){
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
    }
`;

export const Card = styled.div`
    height: 100%;
    min-height: 64vh;
    min-width: 29rem;
    width: clamp(18rem, 22vw, 30rem);
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
        transition: .4s ease-in-out;
        transform: translateY(3rem);
        opacity: .5;
    &:focus,
    &:hover {
        background: transparent;
        transform: translateY(0rem);
        opacity: 1;
    }
    &:focus ~ &,
    &:hover ~ & {
        transform: translateY(3rem); 
        opacity: .5;
    }
    
    @media (min-width: ${props => props.theme.largeScreen}){
        margin: 0 1rem;
        min-width: 20rem;
        max-width: 26rem;
        
    }    
`;


export const ModelName = styled.h2`
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: clamp(2.4rem, 2vw, 2.4rem);
    font-weight: 300;
    letter-spacing: clamp(.3rem, 1.5vw, 1.6rem);
    margin: 1rem 0 1rem 1.6rem;
    white-space: nowrap;
    @media (min-width: ${props => props.theme.largeScreen}){
        margin-top: 2rem;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 58vh;
    width: 100%;
`;

/*********** BOTTOM SECTION ************/
export const BottomSection = styled.div`
    height: 7vh;
    width: 100%;
    @media (min-width: ${props => props.theme.largeScreen}){
        height: 12vh;
        width: 100%;
    }
`;

