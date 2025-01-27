import ILCard from "../components/ILCard/ILCard"
import InfoCard from "../components/InfoCard/InfoCard"
import ITLCard from "../components/ITLCard/ITLCard"
import TechStackCard from "../components/TechStackCard/TechStackCard"

function HomePage() {
    return (
        <div className="flex flex-row h-full justify-center">
            <InfoCard></InfoCard>
            <div className="flex flex-col justify-center w-3/5 h-full mr-4">
                <TechStackCard></TechStackCard>
                <div className="flex flex-row w-3/4 h-4/5">
                    <ITLCard image_path="/src/assets/images/Barn_Burner_title_screen.png" text="Barn Burner: A retro multiplayer air hockey game developed in the Godot engine using GDScript" link_path="https://github.com/akarki2005/barn-burner" link_description="Github"></ITLCard>
                    <ITLCard image_path="/src/assets/images/Farmsburner_title_screen.png" text="Farmsburner: A farming game incorporating real-world weather data, made with Java" link_path="https://github.com/akarki2005/FarmsBurner" link_description="Github"></ITLCard>
                </div>
            </div>
        </div>
    )
}

export default HomePage