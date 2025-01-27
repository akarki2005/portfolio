interface Props {
    image_path: string;
}

function ITLCardImage(props: Props) {
    return (
        <div className="flex justify-center bg-slate-800 rounded-xl w-full h-2/5 p-2">
            <img className="rounded-xl object-fit w-full h-full" src={props.image_path}></img>
        </div>
    )
}

export default ITLCardImage