import { MainWrapper, Hero, Legacy } from "../../styles/scrolling.style"
import { Header } from "../../styles/common.style"
import LegacyPageTransition from "../../components/animations/pageTransitions/legacypage.transition"

const LegacyPage = () => {
    return (
        <>
            <LegacyPageTransition>
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
            </LegacyPageTransition>
        </>
    )
}

export default LegacyPage