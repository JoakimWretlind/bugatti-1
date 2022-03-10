import { FadeInTransition } from "../../components/animations/pageTransitions/fadeInTransition"
import { MainWrapper, Hero, Legacy } from "../../styles/scrolling.style"
import { Header } from "../../styles/common.style"

const LegacyPage = () => {
    return (
        <>
            <FadeInTransition>
                <MainWrapper>
                    <Hero>
                        <Header>legacy</Header>
                    </Hero>
                    <Legacy>
                        <Header>content 1</Header>
                        <Header>content 2</Header>
                        <Header>content 3</Header>
                    </Legacy>
                </MainWrapper>
            </FadeInTransition>
        </>
    )
}

export default LegacyPage