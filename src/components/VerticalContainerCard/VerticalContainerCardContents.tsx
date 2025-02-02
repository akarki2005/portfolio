import ProjectCard from "../ProjectCard/ProjectCard"

interface Props {
    contents: string[][];
}

function VerticalContainerCardContents(props: Props) {
    return (
        <div className="flex flex-col justify-center bg-slate-800 rounded-b-xl items-center">
            {props.contents.map(card =>
                <ProjectCard title={card[0]} imgurl={card[1]} content={card[2]} linkname={card[3]} linkurl={card[4]}></ProjectCard>
            )}
        </div>
    )
}

export default VerticalContainerCardContents