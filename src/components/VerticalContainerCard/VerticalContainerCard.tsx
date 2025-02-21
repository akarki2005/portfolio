import VerticalContainerCardContents from "./VerticalContainerCardContents";
import VerticalContainerCardTitle from "./VerticalContainerCardTitle";

interface Props {
    // the title of the card
    title : string;
    // props for the subcards contained within the container
    contents: string[][];
}

function VerticalContainerCard(props: Props) {
    return (
        <div className="flex flex-col h-fit bg-slate-800 rounded-xl m-4 2xl:w-1/4 md:w-1/3 w-4/5 text-white md:self-start self-center">
            <VerticalContainerCardTitle title={props.title}></VerticalContainerCardTitle>
            <VerticalContainerCardContents contents={props.contents}></VerticalContainerCardContents>
        </div>
    )
}

export default VerticalContainerCard