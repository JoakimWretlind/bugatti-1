import Image from "next/image"
import { MainWrapper, Hero, Overlay, LandingHeader, Content, InnerContent, Footer } from '../styles/pageStyles/home.style'
import { Header } from "../styles/common.style"
import HomePageTransition from './animations/pageTransitions/homepage.transition'
import landingCar from '../components/assets/images/landing.png'


const HomePage = () => {

    return (
        <HomePageTransition>
            <MainWrapper>
                <Hero>
                    <LandingHeader>bugatti</LandingHeader>
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
        </HomePageTransition>
    )
}

export default HomePage