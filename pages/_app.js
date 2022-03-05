import React, { useRef, useState, useCallback, useEffect } from "react"
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from "styled-components"
import { bugattiTheme, GlobalStyle } from '../styles/globalStyle'
import Layout from '../components/layout/Layout'
import { ScrollContainer } from '../styles/scrolling.style'
import CustomCursor from '../components/customCursor/index'

function MyApp({ Component, pageProps, router }) {
  // Scroll container
  const scrollRef = useRef(null)

  // Page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // Update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // Observe when browser is resizing
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  // Measures how many pixels the user has scrolled vertically.
  // As scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const { scrollY } = useViewportScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 12, mass: 0.25, stiffness: 80 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value

  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <ThemeProvider theme={bugattiTheme}>
        <Layout>
          <ScrollContainer
            as={motion.div}
            ref={scrollRef}
            style={{ y: spring }} // translateY of scroll container using negative scroll value
            className="scroll-container" >
            <AnimatePresence exitBeforeEnter initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps} router={router} key={router.pathname} />
            </AnimatePresence>
          </ScrollContainer>
          <div style={{ height: pageHeight }} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
