import Image from "next/image"
import { CardWrapper, Card, ImageContainer, ModelName } from "../../styles/pageStyles/modelss.style"
import { cardData } from "./cardData"

const ModelCard = () => {
    return (
        <>
            <CardWrapper className='container'>
                {cardData.map(item => {
                    const { id, title, alt, source } = item
                    return (
                        <Card key={id} className="hover">
                            <ImageContainer>
                                <Image
                                    className="cars"
                                    src={source}
                                    alt={alt}
                                    layout="fill"
                                />
                            </ImageContainer>
                            <ModelName>{title}</ModelName>
                        </Card>
                    )
                })}
            </CardWrapper>
        </>
    )
}

export default ModelCard
