import { FadeInTransition } from "../../components/animations/pageTransitions/fadeInTransition"
import { Section, Header } from "../../styles/common.style"

const ContactPage = () => {
    return (
        <FadeInTransition>
            <Section>
                <Header>Contact</Header>
            </Section>
        </FadeInTransition>
    )
}

export default ContactPage