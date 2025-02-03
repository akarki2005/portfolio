import ProjectCardContent from "./ProjectCardContent";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardLink from "./ProjectCardLink";
import ProjectCardTitle from "./ProjectCardTitle";

interface Props {
    title: string;
    imgurl: string;
    content: string;
    linkname: string;
    linkurl: string;
}

function ProjectCard(props: Props) {
    return (
        <div className="flex flex-col border-4 border-white bg-slate-900 rounded-xl text-white p-4 m-6 hover:scale-105 transition delay-100 duration-300 items-center w-4/5">
            <ProjectCardTitle title={props.title}></ProjectCardTitle>
            <ProjectCardImage imgurl={props.imgurl}></ProjectCardImage>
            <ProjectCardContent content={props.content}></ProjectCardContent>
            <ProjectCardLink link_name={props.linkname} link_url={props.linkurl}></ProjectCardLink>
        </div>
    )
}

export default ProjectCard