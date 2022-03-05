import styled from 'styled-components';

export const MainWrapper = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${props => props.theme.black};
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
    height: 14vh;
    width: 70vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 2rem;
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
    height: 74vh;
    width: 70vw;
    min-width: 42rem;
    padding: 3rem 0 5rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
`;

export const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
`;

export const Card = styled.div`
    height: 100%;
    min-height: 64vh;
    width: clamp(18rem, 22vw, 30rem);
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModelName = styled.h2`
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: clamp(2.4rem, 2vw, 2.4rem);
    font-weight: 300;
    letter-spacing: clamp(.3rem, 1.5vw, 1.6rem);
    margin-top: 2rem;
    white-space: nowrap;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 58vh;
    width: 100%;
`;

/*********** BOTTOM SECTION ************/
export const BottomSection = styled.div`
    height: 12vh;
    width: 100%;
`;