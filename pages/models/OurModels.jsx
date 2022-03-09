import { motion } from 'framer-motion';
import { TitleHolder, ModelsHeader } from '../../styles/pageStyles/models.style'

export const OurModels = () => {
    const boxVariant = {
        hidden: { delay: 2 },
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: .05
            }
        }
    }

    const listVariant = {
        hidden: { x: -100, scale: 0.3, opacity: 0 },
        visible: { x: 0, scale: 1, opacity: 1 }
    }
    return (
        <TitleHolder
            as={motion.div}
            variants={boxVariant}
            animate="visible"
            initial="hidden"
        >

            {["O", "U", "R", " ", "M", "O", "D", "E", "L", "S"].map((header, index) => (
                <ModelsHeader
                    key={index}
                    as={motion.li}
                    variants={listVariant}
                    transition={{
                        type: "tween",
                        damping: "40"
                    }}
                >
                    {header}
                </ModelsHeader>
            ))}
        </TitleHolder>
    )
}