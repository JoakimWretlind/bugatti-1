import { ModelsSection, TopSection, MiddleSection, BottomSection } from "../../styles/pageStyles/models.style"
import { OurModels } from "./OurModels";
import ModelCard from "./ModelCard";

const ModelsPage = () => {
    return (
        <>
            <ModelsSection>
                <TopSection>
                    <OurModels />
                </TopSection>
                <MiddleSection>
                    <ModelCard />
                </MiddleSection>
                <BottomSection />
            </ModelsSection>
        </>
    )
}

export default ModelsPage