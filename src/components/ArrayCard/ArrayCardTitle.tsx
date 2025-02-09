interface Props {
    title: string;
}

function ArrayCardTitle(props: Props) {
    return (
        <div className="flex bg-slate-900 rounded-t-xl justify-center p-2 h-1/3">
            <h1 className="text-white text-xl text-center">{props.title}</h1>
        </div>
    )
}

export default ArrayCardTitle