import styled from 'styled-components';

export const Ring = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    border: .1rem solid rgba(255,255,255,.5);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    will-change: width, height, transform, border;
    z-index: 10000;
    pointer-events: none;
    transition: 0.05s ease-out; // This transition affects the smoothness of the cursor
    &.link-hovered{
        transform: translate(-50%, -50%) scale(1.4);
        border: .1rem solid rgba(255,255,255,1);
        background: white;
        mix-blend-mode: difference;
    }
    &.clicked{
        border: .1rem solid violet;
    }
`;

export const Dot = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1.2rem;
    height: 1.2rem;
    mix-blend-mode: difference;
    background: radial-gradient(rgba(155, 28, 31,1),rgba(0,0,0,.3));
    border: .1rem solid rgba(255,255,255,.7);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    pointer-events: none;   
    opacity: 1;
    transition: 0.05s ease-out; // this will also affect the delay of the movement of the cursor
    &.link-hovered{
        opacity: 0;
        height: 3.4rem;
        width: 3.4rem;
        border: .1rem solid #fff;
        mix-blend-mode: lighten;
        background: transparent;
    }
     &.clicked{
        opacity: 1;
        background: hsl(359, 69%, 36%);
    }
`;