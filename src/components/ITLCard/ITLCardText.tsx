interface Props {
    text: string;
}

function ITLCardText(props: Props) {
    return (
        <div className="flex justify-center bg-slate-800 w-full h-2/5 text-sm text-white p-2">
            <p className="text-center">{props.text}</p>
        </div>
    )
}

export default ITLCardText