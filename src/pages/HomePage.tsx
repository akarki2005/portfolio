import InfoCard from "../components/InfoCard/InfoCard"
import ITLCard from "../components/ITLCard/ITLCard"
import TechStackCard from "../components/TechStackCard/TechStackCard"

function HomePage() {
    return (
        <div className="flex flex-row">
            <InfoCard></InfoCard>
            <div className="flex flex-col justify-center w-3/4 h-full">
                <TechStackCard></TechStackCard>
                <div className="flex flex-row w-3/4 h-8/10">
                    <ITLCard image_path="/src/assets/images/Barn_Burner_title_screen.png" text="Barn Burner: A multiplayer hockey game developed in the Godot Engine" link_path="https://github.com/akarki2005/barn-burner" link_description="Github"></ITLCard>
                    <ITLCard image_path="/src/assets/images/Farmsburner_title_screen.png" text="Farms Burner: An farming game incorporating real-time weather data" link_path="https://github.com/akarki2005/FarmsBurner" link_description="Github"></ITLCard>
                </div>
            </div>
        </div>
    )
}

export default HomePage