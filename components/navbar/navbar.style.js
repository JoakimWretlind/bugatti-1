import styled, { keyframes } from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";

export const NavToggler = styled.div`
    position: absolute;
    top: 3rem;
    left: 2rem;
    display: block;
    color: ${props => props.theme.white};
    font-size: 2rem;
    transition: .4s ease-out;
    z-index: 2000;
    @media (min-width: ${props => props.theme.smallScreen}){
        display: none;
    }
`;

export const Nav = styled.nav`
    overflow: hidden;
    position: fixed;
    top: -110vh;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(3deg);
    background: ${props => props.theme.red};
    z-index: 100;
    @media (min-width: ${props => props.theme.smallScreen}){
        top: 0;
        left: 0;
        height: 6rem;
        width: 50rem;
        transform: skewY(0);
        background: transparent;
    }
`;

export const NavUL = styled.ul`
    margin-top: -30vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: skewY(6deg);
    background: ${props => props.theme.black};
    @media (min-width: ${props => props.theme.smallScreen}){
        overflow: hidden;
        margin-top: 0;
        margin-left: 3rem;
        transform: skewY(0deg);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 5rem;
        background: transparent;
    }
`;

export const NavLi = styled.li`
    padding: 1rem;
`;

const lineAnimation = keyframes`
    0%{
        width: 0;
    }
    75%{
        width: 0;
    }
    100% {
        width: 120%;
    }
`

export const NavA = styled.a`  
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: .3rem;
    color: ${props => props.theme.white};
    &.active{
        color: ${props => props.theme.white};
        &::after{
            content:'';
            display: block;
            position: relative;
            border-bottom-style: solid;
            border-color: ${props => props.theme.white};
            border-width: thin;
            width: 120%;
            margin-top: .8rem;
            left: 50%;
            transform: translateX(-50%); 
            animation: ${lineAnimation} 1.4s linear;
            animation-delay: 1.4s;
        }
        
    }
    @media (min-width: ${props => props.theme.smallScreen}){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        left: -12rem;
        font-size: ${props => props.theme.xsmall};
        padding: 1rem;
        border-bottom: none;
        &.active{
            font-weight: 700;
            font-size: 1.1rem;
            color: ${props => props.theme.white};
            letter-spacing: .4rem;
            margin-top: .4rem;
            border-bottom: none;
            &::after{
                content: '';
                border-bottom: none;
            }
        }
    }
`;

////////// Icon-Part //////////
// This holds the lines for opening the full screen navbar
export const IconContainer = styled.div`
    display: none;
   @media (min-width: ${props => props.theme.smallScreen}){
        position: fixed;
        top: 1.8rem;
        left: 3rem;
        height: 2.6rem;
        width: 2.8rem;
        padding: .2rem .3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 250;
    }
`;

// These are the lines that makes up the icon
export const Line = styled.div`
    height: 2.2rem;
    width: .1rem;
    background: #fff;
`;

// Close Navbar
export const LeftArrow = styled(BsArrowLeft)`
    position: absolute; 
    visibility: hidden;
    @media (min-width: ${props => props.theme.smallScreen}){
        visibility: visible;
        font-size: 1.6rem;
        top: -2rem;
        left: 42.5rem;
        z-index: 200;
        color: #fff;
        &:hover{
            color: #fff;
        }
    }
`;