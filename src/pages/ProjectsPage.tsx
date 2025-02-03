import VerticalContainerCard from "../components/VerticalContainerCard/VerticalContainerCard"

function ProjectsPage() {
    const BarnBurnerInfo = [
        "Barn Burner",
        "/src/assets/images/Barn_Burner_title_screen.png",
        "A multiplayer air hockey game developed in the Godot game engine using GDScript.",
        "Github",
        "https://github.com/akarki2005/barn-burner"
    ]

    const FarmsburnerInfo = [
        "Farmsburner",
        "/src/assets/images/Farmsburner_title_screen.png",
        "An idle farming simulation game incorporating real-world weather data, made with Java.",
        "Github",
        "https://github.com/akarki2005/FarmsBurner"
    ]

    const PortfolioInfo = [
        "Portfolio Website (this one!)",
        "/src/assets/images/portfoliowebsite.png",
        "My personal portfolio website, developed using React and Tailwind CSS.",
        "Github",
        "https://github.com/akarki2005/portfolio"
    ]

    return (
        <>
        <h1 className="text-center text-slate-800 m-4 text-3xl font-bold">Projects</h1>
        <p className="text-center text-slate-800 m-4 text-xl">Here you'll find a collection of my side projects, including past, present and future work.</p>
        <div className="flex flex-row w-full justify-center">
            <VerticalContainerCard title={"Complete ☑️"} contents={[BarnBurnerInfo, FarmsburnerInfo]}></VerticalContainerCard>
            <VerticalContainerCard title={"In the Works ⚙️"} contents={[PortfolioInfo]}></VerticalContainerCard>
        </div>
        </>
    )
}

export default ProjectsPage