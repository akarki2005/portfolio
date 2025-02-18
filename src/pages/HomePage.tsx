import InfoCard from "../components/InfoCard/InfoCard"
import ITLCard from "../components/ITLCard/ITLCard"
import ArrayCard from "../components/ArrayCard/ArrayCard"
import HorizontalContainerCard from "../components/HorizontalContainerCard/HorizontalContainerCard"

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

    const Projects = [
        ["/src/assets/images/Barn_Burner_title_screen.png", "Barn Burner: A retro multiplayer air hockey game developed within Godot", "https://github.com/akarki2005/barn-burner", "Github"],
        ["/src/assets/images/Farmsburner_title_screen.png", "Farmsburner: A farming game incorporating real-world weather data, made with Java", "https://github.com/akarki2005/FarmsBurner", "Github"]
    ]

    return (
        <>
        <h1 className="text-center text-slate-800 mt-4 text-3xl font-bold">Home</h1>
        <div className="flex flex-row h-full justify-center">
            <InfoCard></InfoCard>
            <div className="flex flex-col justify-center 2xl:w-2/5 w-1/2 h-full mr-4">
                <ArrayCard title={"Technologies 💻🛠️"} content={Technologies}></ArrayCard>
                <ArrayCard title={"Languages 🧾"} content={Languages}></ArrayCard>
                <HorizontalContainerCard title={"Notable Projects"} contents={Projects}></HorizontalContainerCard>
            </div>
        </div>
        </>
    )
}

export default HomePage