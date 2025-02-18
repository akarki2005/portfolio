import VerticalContainerCard from "../components/VerticalContainerCard/VerticalContainerCard"

function ProjectsPage() {
    const BarnBurnerInfo = [
        "Barn Burner",
        "/src/assets/images/Barn_Burner_title_screen.png",
        "A multiplayer air hockey game developed in the Godot game engine.",
        "Github",
        "https://github.com/akarki2005/barn-burner"
    ]

    const FarmsburnerInfo = [
        "Farmsburner",
        "/src/assets/images/Farmsburner_title_screen.png",
        "A farming simulation game incorporating real-world weather data, made with Java.",
        "Github",
        "https://github.com/akarki2005/FarmsBurner"
    ]

    const PortfolioInfo = [
        "Portfolio Website (this one!)",
        "/src/assets/images/portfoliowebsite.png",
        "My personal portfolio website, developed using React and Tailwind.",
        "Github",
        "https://github.com/akarki2005/portfolio"
    ]

    const IntersectionInfo = [
        "Intersection",
        "/src/assets/images/INT-icon.png",
        "A game about traffic management, developed in Unity using C#.",
        "Coming soon (fall 2025)",
        ""
    ]

    const SwoleStatsInfo = [
        "Swole Stats",
        "/src/assets/images/dumbell.jpg",
        "A web-based workout progress tracking application.",
        "Coming soon (summer 2025)",
        ""
    ]

    return (
        <>
        <h1 className="text-center text-slate-800 m-4 text-3xl font-bold">Projects</h1>
        <p className="text-center text-slate-800 m-4 text-xl">Here you'll find a collection of my side projects, including past, present and future work.</p>
        <div className="flex flex-row w-full justify-center">
            <VerticalContainerCard title={"Complete ☑️"} contents={[PortfolioInfo, BarnBurnerInfo, FarmsburnerInfo]}></VerticalContainerCard>
            <VerticalContainerCard title={"In the Works ⚙️"} contents={[SwoleStatsInfo, IntersectionInfo]}></VerticalContainerCard>
        </div>
        </>
    )
}

export default ProjectsPage