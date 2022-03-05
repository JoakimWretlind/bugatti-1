import { motion } from "framer-motion"

const homePageTransition = {
    initial: { x: "90vw", opacity: 0.3 },
    animate: { x: 0, opacity: 1, },
    exit: { x: "-90vw", opacity: 0.3, }
}

const HomePageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{
                delay: 0.2,
                default: { duration: 1 },
            }}
        >
            {children}
        </motion.div>
    )
}

export default HomePageTransition