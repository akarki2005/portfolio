import ITLCardImage from "./ITLCardImage";
import ITLCardLink from "./ITLCardLink";
import ITLCardText from "./ITLCardText";

interface Props {
    image_path: string;
    text: string;
    link_path: string;
    link_description: string;
}

function ITLCard(props: Props) {
    return (
        <div className="flex justify-center flex-col bg-slate-800 w-1/4 h-1/2 rounded-xl m-4 hover:scale-105 transition delay-100 duration-300 p-2">
            <ITLCardImage image_path={props.image_path}></ITLCardImage>
            <ITLCardText text={props.text}></ITLCardText>
            <ITLCardLink link_path={props.link_path} link_description={props.link_description}></ITLCardLink>
        </div>
    )
}

export default ITLCard