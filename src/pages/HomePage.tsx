import InfoCard from "../components/InfoCard/InfoCard"
import ArrayCard from "../components/ArrayCard/ArrayCard"
import HorizontalContainerCard from "../components/HorizontalContainerCard/HorizontalContainerCard"

function HomePage() {

    const Technologies = [
        ["./assets/images/react.png", "https://react.dev/", "React"],
        ["./assets/images/tailwind.png", "https://tailwindcss.com/", "Tailwind"],
        ["./assets/images/godot.png", "https://godotengine.org/", "Godot"],
        ["./assets/images/unity.png", "https://unity.com/", "Unity"],
        ["./assets/images/pandas.ico", "https://pandas.pydata.org/", "Pandas"]
    ]

    const Languages = [
        ["./assets/images/javalogo.png", "https://www.java.com/en/", "Java"],
        ["./assets/images/pythonlogo.png", "https://www.python.org/", "Python"],
        ["./assets/images/clogo.png", "", "C"],
        ["./assets/images/csharplogo.png", "", "C#"],
        ["./assets/images/typescriptlogo.png", "https://www.typescriptlang.org/", "Typescript"],
    ]

    const Projects = [
        ["./assets/images/Barn_Burner_title_screen.png", "Barn Burner: A retro multiplayer air hockey game developed within Godot", "https://github.com/akarki2005/barn-burner", "Github"],
        ["./assets/images/Farmsburner_title_screen.PNG", "Farmsburner: A farming game incorporating real-world weather data, made with Java", "https://github.com/akarki2005/FarmsBurner", "Github"]
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