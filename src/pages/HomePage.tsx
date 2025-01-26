import InfoCard from "../components/InfoCard/InfoCard"
import TechStackCard from "../components/TechStackCard/TechStackCard"

function HomePage() {
    return (
        <div className="flex flex-row justify-center">
            <InfoCard></InfoCard>
            <TechStackCard></TechStackCard>
        </div>
    )
}

export default HomePage