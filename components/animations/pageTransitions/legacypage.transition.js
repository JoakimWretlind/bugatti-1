import { motion } from "framer-motion"

const fadeBack = {
    initial: { scale: 0.4, opacity: 0, originY: 0.5 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0.4, opacity: 0, originY: 0.5 },
    //  transition: { duration: 2 }
}


const LegacyPageTransition = ({ children }) => {
    return (
        <motion.div variants={fadeBack}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .5 }}
        >
            {children}
        </motion.div>
    )
}

export default LegacyPageTransition

/**
 * 
 * const fadeBack = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.4
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.4
    }
  },
  transition: {
    duration: 0.7
  }
};
 * 
 */