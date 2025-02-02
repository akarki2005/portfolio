interface Props {
    content: string;
}

function ProjectCardContent(props: Props) {
    return (
        <div className="flex bg-slate-900 w-full text-center justify-center mb-4">
            {props.content}
        </div>
    )
}

export default ProjectCardContent