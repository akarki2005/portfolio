import ILCard from "../ILCard/ILCard"

interface Props {
    content: string[][];
}

function ArrayCardContent(props: Props) {
    return (
        <div className="flex flex-row justify-center bg-slate-800 rounded-b-xl p-2 h-2/3 grid md:grid-cols-5 grid-cols-3 place-items-center">
            {props.content.map(card =>
                <ILCard image_path={card[0]} link={card[1]} link_name={card[2]} ></ILCard>
            )}
        </div>
    )
}

export default ArrayCardContent