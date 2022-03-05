import gsap from "gsap";

export const toggleNavOpenSmall = (navRef, ulRef, linkRefs) => {
    const tl = gsap.timeline()
    tl.to(navRef.current, { duration: .7, y: "110vh", skewY: "-3deg", height: "100vh" }, 0)
    tl.to(ulRef.current, { duration: .4, skewY: "-6deg", height: "110vh", marginTop: "0" }, .1)
    tl.to(linkRefs.current[0], { y: "22vh", ease: "back.out(2.1)", duration: .8 }, 0.6)
    tl.to(linkRefs.current[1], { y: "35vh", ease: "back.out(2.1)", duration: .8 }, 0.5)
    tl.to(linkRefs.current[2], { y: "48vh", ease: "back.out(2.1)", duration: .8 }, 0.4)
    tl.to(linkRefs.current[3], { y: "61vh", ease: "back.out(2.1)", duration: .8 }, 0.3)
    tl.to(linkRefs.current[4], { y: "74vh", ease: "back.out(2.1)", duration: .8 }, 0.2)
}

export const toggleNavOpenBig = (line1Ref, line2Ref, linkRefs) => {
    const tl = gsap.timeline()
    tl.to(line1Ref.current, { x: 55, y: '1rem', rotate: '90deg', scale: "0.8", ease: "ease-in-out", duration: 0.5 }, 0)
    tl.to(line1Ref.current, { opacity: 0, ease: "ease-in-out", duration: 0.3 }, .5)
    tl.to(line2Ref.current, { x: 250, y: '1rem', rotate: '90deg', scale: "0.8", opacity: 0, ease: "ease-in-out", duration: 0.8 }, 0)
    tl.to(linkRefs.current[0], { x: 156, ease: "back.out(2.4)", duration: 0.9 }, 0.3)
    tl.to(linkRefs.current[1], { x: 227, ease: "back.out(2.4)", duration: 0.9 }, 0.2)
    tl.to(linkRefs.current[2], { x: 308, ease: "back.out(2.4)", duration: 0.9 }, 0.1)
    tl.to(linkRefs.current[3], { x: 380, ease: "back.out(2.4)", duration: 0.9 }, 0)
    tl.to(linkRefs.current[4], { x: 458, ease: "back.out(2.4)", duration: 0.9 }, 0)
}

export const toggleNavCloseSmall = (navRef, ulRef, linkRefs) => {
    const tl = gsap.timeline()
    tl.to(navRef.current, { y: "0", duration: .5, skewY: "3deg" }, .0)
    tl.to(navRef.current, { height: "0" }, .7)
    tl.to(ulRef.current, { duration: .4, skewY: "6deg", marginTop: "-110vh" }, .1)
    tl.to(linkRefs.current, { y: 0, duration: .8 }, 0)
}