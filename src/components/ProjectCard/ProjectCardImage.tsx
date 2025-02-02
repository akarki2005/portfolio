interface Props {
    imgurl: string;
}

function ProjectCardImage(props: Props) {
    return (
        <div className="flex bg-slate-900 w-3/4 justify-center mb-4">
            <img className="w-full object-fill rounded-lg" src={props.imgurl}></img>
        </div>
    )
}

export default ProjectCardImage