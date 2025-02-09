import ArrayCardContent from "./ArrayCardContent"
import ArrayCardTitle from "./ArrayCardTitle"

interface Props {

    // the title of the array card
    title: string;

    // the content inside the array card
    content: string[][];
}

function ArrayCard(props: Props) {
    return (
        <div className="bg-slate-900 rounded-xl flex flex-col m-4 w-full h-1/6 hover:scale-105 transition delay-100 duration-300">
            <ArrayCardTitle title={props.title}></ArrayCardTitle>
            <ArrayCardContent content={props.content}></ArrayCardContent>
        </div>
    )
}

export default ArrayCard