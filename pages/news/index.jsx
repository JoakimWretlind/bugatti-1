import { FadeInTransition } from "../../components/animations/pageTransitions/fadeInTransition"
import { Section, Header } from "../../styles/common.style"

const NewsPage = () => {
    return (
        <FadeInTransition>
            <Section>
                <Header>news</Header>
            </Section>
        </FadeInTransition>
    )
}

export default NewsPage