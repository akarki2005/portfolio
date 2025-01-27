import { Link } from "react-router-dom";

interface Props {
    link: string;
    link_name: string;
}

function ILCardLink(props: Props) {
    return (
        <div className="flex rounded-b-xl justify-center h-12 p-2">
            <Link className="text-white" to={props.link}>{props.link_name}</Link>
        </div>
    )
}

export default ILCardLink