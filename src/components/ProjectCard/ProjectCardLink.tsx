import { Link } from "react-router-dom";

interface Props {
    link_name: string;
    link_url: string;
}

function ProjectCardLink(props: Props) {
    return (
        <div className="flex bg-slate-800 rounded-xl w-full p-2 hover:scale-105 transition delay-100 duration-300">
            <Link className="w-full h-full text-white text-center" to={props.link_url}>{props.link_name}</Link>
        </div>
    )
}

export default ProjectCardLink