import {
    MainWrapper,
    TopSection, Header,
    InnerWrapper, MiddleSection,
    BottomSection
} from '../../styles/pageStyles/models.style'
import ModelCard from "./Card"

const ModelsPage = () => {
    return (
        <MainWrapper>
            <InnerWrapper>
                <TopSection>
                    <Header>our models</Header>
                </TopSection>
                <MiddleSection>
                    <ModelCard />
                </MiddleSection>
                <BottomSection />
            </InnerWrapper>
        </MainWrapper>
    )
}

export default ModelsPage