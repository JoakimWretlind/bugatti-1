import styled from 'styled-components';

export const Span = styled.span`
    font-size: clamp(2rem, 5vw, 3rem);
    text-transform: capitalize;
    padding: .3rem 1.2rem;
    border-radius: .6rem;
    letter-spacing: clamp(.1rem, 2vw, .3rem);
    background: rgba(0,0,0,.5);
    &:hover{
        background: rgba(0,0,0,.8);
    }
`;