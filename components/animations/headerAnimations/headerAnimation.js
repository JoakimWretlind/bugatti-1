import { motion } from 'framer-motion';
import { TitleHolder, Title } from '../../../styles/pageStyles/home.style';
// import { TitleHolder, Title } from '../../../styles/pageStyles/home.style';
import { myTitle } from '../../HomePage';

export const HeaderAnimation = (myTitle) => {
    //  console.log(myTitle)
    // const myArr = { ...myTitle }
    // console.log(myArr)
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
            {
                myTitle.map((header, index) => (
                    <Title
                        key={index}
                        as={motion.li}
                        variants={listVariant}
                        transition={{
                            type: "tween",
                            damping: "40"
                        }}
                    >
                        {header}
                    </Title>
                ))
            }

        </TitleHolder>
    )
}
/*
{
    myTitle.map((header, index) => (
        <Title
            key={index}
            as={motion.li}
            variants={listVariant}
            transition={{
                type: "tween",
                damping: "40"
            }}
        >
            {header}
        </Title>
    ))
}
*/