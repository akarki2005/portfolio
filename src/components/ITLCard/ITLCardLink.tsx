import { Link } from "react-router-dom";

interface Props {
    link_path: string;
    link_description: string;
}

function ITLCardLink(props: Props) {
    return (
        <div className="flex bg-slate-900 rounded-xl w-full h-1/5 justify-center p-2 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200">
            <Link className="w-full h-full text-white text-center" to={props.link_path}>{props.link_description}</Link>
        </div>
    )
}

export default ITLCardLink