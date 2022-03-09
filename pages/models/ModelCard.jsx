import Image from 'next/image'
import gsap from 'gsap'
import { Card, ImageWrapper, Wrapper, ModelName } from '../../styles/pageStyles/models.style'
import { modelData } from './modelData'

const ModelCard = () => {
    const onHover = (index) => {
        let targets = index.target;
        gsap.to(targets, { opacity: 0, });
    }

    const noHover = (index) => {
        let targets = index.target;
        gsap.to(targets, { opacity: 1, delay: .0 });
    }
    return (
        <Wrapper>
            {modelData.map(item => {
                const { id, title, img1, img2 } = item
                return (
                    <Card key={id}>
                        <ImageWrapper>
                            <Image className="cars" src={img2} alt={title} layout="fill" priority />
                            <Image className="cars" src={img1} alt={title} onMouseOver={(index) => { onHover(index) }} onMouseLeave={(index) => { noHover(index) }} alt={item.title} layout="fill" />
                        </ImageWrapper>
                        <ModelName>{title}</ModelName>
                    </Card>
                )
            })}
        </Wrapper>
    )
}

export default ModelCard