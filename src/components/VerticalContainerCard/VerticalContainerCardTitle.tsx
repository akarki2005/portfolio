interface Props {
    title: string;
}

function VerticalContainerCardTitle(props: Props) {
    return (
        <div className="flex bg-slate-900 p-4 rounded-t-xl w-full justify-center text-xl">
            {props.title}
        </div>
    )
}

export default VerticalContainerCardTitle