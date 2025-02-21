import ITLCard from "../ITLCard/ITLCard";

interface Props {
    contents: string[][];
}

function HorizontalContainerCardContents(props: Props) {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-slate-800 rounded-b-xl items-center">
            {props.contents.map(card =>
                <ITLCard image_path={card[0]} text={card[1]} link_path={card[2]} link_description={card[3]} ></ITLCard>
            )}
        </div>
    )
}
export default HorizontalContainerCardContents