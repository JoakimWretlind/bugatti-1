import { motion } from "framer-motion"

const fadeIn = {
    initial: { scale: 0.9, opacity: 0, y: "-5vh" },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: "-5vh" },
}


export const FadeInTransition = ({ children }) => {
    return (
        <motion.div variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .5 }}
        >
            {children}
        </motion.div>
    )
}