import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { NavToggler, Nav, NavUL, NavLi, NavA, IconContainer, Line, LeftArrow } from "./navbar.style"
import { navbarData } from './navbarData'
import { FaBars, FaTimes } from 'react-icons/fa'
import { toggleNavOpenSmall, toggleNavCloseSmall, toggleNavOpenBig } from "../animations/navAnimations/navAnimations"

const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    // navicon    
    const line0Ref = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)

    // bigger refs
    const navRef = useRef(null)
    const ulRef = useRef(null)
    const linkRefs = useRef([])
    linkRefs.current = []

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
        if (isOpen !== true) {
            if (window.innerWidth < 767) {
                toggleNavOpenSmall(navRef, ulRef, linkRefs)
            }
            if (window.innerWidth > 767) {
                const tl = gsap.timeline()
                toggleNavOpenBig(line1Ref, line2Ref, linkRefs)
                tl.to('.leftArrow', { y: '4.3rem', ease: 'elastic.out(1.4)', duration: 1.4 }, .6)
            }
        } else {
            if (window.innerWidth < 767) {
                toggleNavCloseSmall(navRef, ulRef, linkRefs)
            }
            if (window.innerWidth > 767) {
                setIsOpen(!isOpen)
            }
        }
    }

    const closeNavbar = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline()
        tl.to(".line", { x: 0, rotate: 0, y: 0, scale: 1, opacity: 1, duration: 0.6, }, .2)
        tl.to(linkRefs.current, { x: 0, duration: 0.7 }, 0)
        tl.to('.leftArrow', { y: '0', ease: "power4.out", duration: 0.7 }, 0)
    }

    // populate the linkrefs array by checking if e is already there, else push
    const addToRefs = (e) => {
        if (e && !linkRefs.current.includes(e)) {
            linkRefs.current.push(e)
        }
    }

    return (
        <>
            <NavToggler onClick={toggleNavbar} isOpen={isOpen}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </NavToggler>

            <IconContainer onMouseOver={toggleNavbar}>
                <Line className="line" ref={line0Ref} />
                <Line className="line" ref={line1Ref} />
                <Line className="line" ref={line2Ref} />
            </IconContainer>

            <Nav isOpen={isOpen} ref={navRef}>
                <NavUL ref={ulRef}>
                    {navbarData.map((item, index) => (
                        <NavLi key={item.id}>
                            <Link href={item.path}>
                                <NavA
                                    ref={addToRefs}
                                    onClick={() => {
                                        toggleNavbar();
                                        setIsActive(index);
                                    }}
                                    className={`${index === isActive && 'active'}`}
                                    className={`${index === 2 && 'card'}`}
                                >
                                    {item.title}
                                </NavA>
                            </Link>
                        </NavLi>
                    ))}
                </NavUL>
            </Nav>
            <LeftArrow className="leftArrow" onClick={closeNavbar} />
        </>
    )
}

export default Navbar