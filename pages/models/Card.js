import Image from "next/image"
import { CardWrapper, Card, ImageContainer, ModelName } from "../../styles/pageStyles/models.style"
import { cardData1, cardData2 } from "./cardData"

const ModelCard = () => {
    return (
        <>
            <CardWrapper>
                {cardData1.map(item => {
                    const { id, title, alt, source } = item
                    return (
                        <Card key={id} className="card">
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
            <CardWrapper>
                {cardData2.map(item => {
                    const { id, title, alt, source } = item
                    return (
                        <Card key={id} className="card">
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