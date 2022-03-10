import Image from "next/image"
import { FadeInTransition } from '../components/animations/pageTransitions/fadeInTransition'
import { MainWrapper, Hero, Overlay, LandingHeader, Content, InnerContent, Footer, TitleHolder, Title } from '../styles/pageStyles/home.style'
import { Header } from "../styles/common.style"
import landingCar from '../components/assets/images/landing.png'

export const myTitle = [
    "B", "u", "G", "A", "T", "T", "I"
]

const HomePage = () => {
    return (
        <FadeInTransition>
            <MainWrapper>
                <Hero>
                    <LandingHeader>
                        Bugatti
                    </LandingHeader>
                    <Image
                        className="car"
                        src={landingCar}
                        alt="Red Bugatti Chiron"
                        priority
                    />
                    <Overlay />
                </Hero>
                <Content>
                    <Header>content</Header>
                </Content>
                <Footer>
                    <Header>footer</Header>
                </Footer>
            </MainWrapper>
        </FadeInTransition>
    )
}

export default HomePage