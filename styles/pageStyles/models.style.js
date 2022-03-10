import styled from 'styled-components';

export const ModelsSection = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 18vh auto-fit(minmax(70vh, 100%)) 12vh;
    grid-template-columns: 1fr minmax(28rem, 156rem) 1fr;
    background: #000;
`;

/******* TOP-SECTION *******/
export const TopSection = styled.div`
    grid-row: 1;
    grid-column: 2;
    height: 14vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const TitleHolder = styled.ul`
    display: flex;
    padding-left: 3rem;
    @media (min-width: ${props => props.theme.mediumScreen}){
        padding-left: 0rem;
    }
`;

export const ModelsHeader = styled.h1`
    color: #fff;
    font-size: clamp(3rem, 3vw, 4rem);
    font-weight: 300;
    white-space: nowrap;
    padding-left: 2rem;
`;

/******* Middle-SECTION *******/
export const MiddleSection = styled.div`
    grid-row: 2;
    grid-column: 2;   
    display: flex;
    justify-content: center;
    align-items: center;  
    
`;

export const Wrapper = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    pointer-events: none; // important
    color: white;    
    &:hover > li:not(:hover){
        opacity: 0.6;
        color: #999;
        transform: translateY(5rem);
        transition: .5s ease-in-out;
    }
    @media (min-width: 540px){
        margin: 7rem 0;
        padding: 0 1rem;
    }
    @media (min-width: 767px){        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;        
    }     
`;

export const Card = styled.li`
    position: relative;
    height: 64vh;
    width: 80vw;
    min-width: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    cursor: pointer;
    pointer-events: auto;  // important
    transition: .5s ease-in-out;
    &::before{
        content: "";
        position:absolute;
        top: 0; left: 0; right: 0; bottom:0; 
    }
    @media (min-width: 540px){
        width: 40vw;
        min-width: 24rem;
    }
    @media (min-width: 767px){
        width: 21vw;
        min-width: 16.8rem;        
        margin: 0 .2rem;
    } 
    @media (min-width: 956px){    
        height: 64vh; 
        width: clamp(22rem, 22vw, 28rem);
        margin: 0 .2rem;      
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    height: 85%;
    width: 100%;
`;

export const ModelName = styled.h2`
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: 2.8rem;
    font-weight: 300;
    letter-spacing: .5rem;
    margin: 1rem 0 1rem 1.6rem;
    white-space: nowrap;
    @media (min-width: 767px){
        margin: 1.6rem 0 1rem 1.6rem;
        font-size: 2rem;
        letter-spacing: 1rem;
    }
    @media (min-width: 956px){
        margin: 1.8rem 0 1rem 1.6rem;
        font-size: 2.4rem;
        letter-spacing: 1.6rem;
    }
`;

/******* BOTTOM-SECTION *******/
export const BottomSection = styled.div`
    grid-row: 3;
    grid-column: 2;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;