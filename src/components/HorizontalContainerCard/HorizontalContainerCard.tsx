import HorizontalContainerCardContents from "./HorizontalContainerCardContents";
import HorizontalContainerCardTitle from "./HorizontalContainerCardTitle";

interface Props {
    title: string;
    contents: string[][];
}

function HorizontalContainerCard(props: Props) {
    return (
        <div className="flex flex-col h-fit bg-slate-800 rounded-xl m-4 text-white w-full hover:scale-105 transition delay-100 duration-300">
            <HorizontalContainerCardTitle title={props.title}></HorizontalContainerCardTitle>
            <HorizontalContainerCardContents contents={props.contents}></HorizontalContainerCardContents>
        </div>
    )
}

export default HorizontalContainerCard