import InfoCard from "../components/InfoCard/InfoCard"
import ITLCard from "../components/ITLCard/ITLCard"
import ArrayCard from "../components/ArrayCard/ArrayCard"

function HomePage() {

    const Technologies = [
        ["/src/assets/images/react.png", "https://react.dev/", "React"],
        ["/src/assets/images/tailwind.png", "https://tailwindcss.com/", "Tailwind"],
        ["/src/assets/images/godot.png", "https://godotengine.org/", "Godot"],
        ["/src/assets/images/unity.png", "https://unity.com/", "Unity"],
        ["/src/assets/images/pandas.ico", "https://pandas.pydata.org/", "Pandas"]
    ]

    const Languages = [
        ["/src/assets/images/javalogo.png", "https://www.java.com/en/", "Java"],
        ["/src/assets/images/pythonlogo.png", "https://www.python.org/", "Python"],
        ["/src/assets/images/clogo.png", "", "C"],
        ["/src/assets/images/csharplogo.png", "", "C#"],
        ["/src/assets/images/typescriptlogo.png", "https://www.typescriptlang.org/", "Typescript"],
    ]

    return (
        <>
        <h1 className="text-center text-slate-800 mt-4 text-3xl font-bold">Home</h1>
        <div className="flex flex-row h-full justify-center">
            <InfoCard></InfoCard>
            <div className="flex flex-col justify-center w-3/5 h-full mr-4">
                <ArrayCard title={"Technologies 💻🛠️"} content={Technologies}></ArrayCard>
                <ArrayCard title={"Languages 🧾"} content={Languages}></ArrayCard>
                <div className="flex flex-row w-3/4 h-4/5">
                    <ITLCard image_path="/src/assets/images/Barn_Burner_title_screen.png" text="Barn Burner: A retro multiplayer air hockey game developed in the Godot game engine" link_path="https://github.com/akarki2005/barn-burner" link_description="Github"></ITLCard>
                    <ITLCard image_path="/src/assets/images/Farmsburner_title_screen.png" text="Farmsburner: A farming game incorporating real-world weather data, made with Java" link_path="https://github.com/akarki2005/FarmsBurner" link_description="Github"></ITLCard>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage