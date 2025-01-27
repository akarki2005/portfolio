interface Props {
    image_path: string;
}

function ILCardImage(props: Props) {
    return (
        <div className="flex h-full b-slate-100 pt-4">
            <img className="w-full h-12 object-scale-down" src={props.image_path}></img>
        </div>
    )
}

export default ILCardImage