import { FadeInTransition } from "../../components/animations/pageTransitions/fadeInTransition";
import { ModelsSection, TopSection, MiddleSection, BottomSection } from "../../styles/pageStyles/models.style"
import { OurModels } from "./OurModels";
import ModelCard from "./ModelCard";

const ModelsPage = () => {
    return (
        <>
            <FadeInTransition>
                <ModelsSection>
                    <TopSection>
                        <OurModels />
                    </TopSection>
                    <MiddleSection>
                        <ModelCard />
                    </MiddleSection>
                    <BottomSection />
                </ModelsSection>
            </FadeInTransition>
        </>
    )
}

export default ModelsPage