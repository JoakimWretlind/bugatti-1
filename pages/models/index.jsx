import Image from "next/image"
import {
    MainWrapper,
    TopSection, Header,
    InnerWrapper, MiddleSection, CardWrapper, Card, ImageContainer, ModelName,
    BottomSection
} from '../../styles/pageStyles/models.style'
import chiron from '../../components/assets/images/chiron1.png'
import concept from '../../components/assets/images/concept1.png'
import oneoff from '../../components/assets/images/oneoff1.png'
import veyron from '../../components/assets/images/veyron1.png'

const ModelsPage = () => {
    return (
        <MainWrapper>
            <InnerWrapper>
                <TopSection>
                    <Header>our models</Header>
                </TopSection>
                <MiddleSection>
                    <CardWrapper>
                        <Card className="card">
                            <ImageContainer>
                                <Image
                                    className='cars'
                                    src={chiron}
                                    alt="Red Chiron Front"
                                    layout="fill"
                                />
                            </ImageContainer>
                            <ModelName>chiron</ModelName>
                        </Card>
                        <Card className="card">
                            <ImageContainer>
                                <Image
                                    className='cars'
                                    src={concept}
                                    alt="Blue Concept Car"
                                    layout="fill"
                                />
                            </ImageContainer>
                            <ModelName>concept</ModelName>
                        </Card>
                        <Card className="card">
                            <ImageContainer>
                                <Image
                                    className="cars"
                                    src={oneoff}
                                    alt="Black OneOff Car"
                                    layout="fill"
                                />
                            </ImageContainer>
                            <ModelName>one off</ModelName>
                        </Card>
                        <Card className="card">
                            <ImageContainer>
                                <Image
                                    className='cars'
                                    src={veyron}
                                    alt="Black/Red Veyron Car"
                                    layout="fill"
                                />
                            </ImageContainer>
                            <ModelName>veyron</ModelName>
                        </Card>
                    </CardWrapper>
                </MiddleSection>
                <BottomSection />
            </InnerWrapper>
        </MainWrapper>
    )
}

export default ModelsPage