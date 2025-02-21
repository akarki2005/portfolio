interface Props {
    title: string;
}

function ProjectCardTitle(props: Props) {
    return (
        <div className="flex bg-slate-900 rounded-t-xl w-full justify-center text-xl mb-4 text-center">
            {props.title}
        </div>
    )
}

export default ProjectCardTitle