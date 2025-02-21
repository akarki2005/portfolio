import ILCardImage from "./ILCardImage";
import ILCardLink from "./ILCardLink";

interface Props {
    image_path: string;
    link: string;
    link_name: string;
}

function ILCard(props: Props) {
    return (
        <div className="flex flex-col justify-center bg-slate-900 rounded-xl h-20 w-20 md:h-24 md:w-24 m-2 hover:scale-105 hover:bg-slate-950 transition delay-50 duration-200">
            <ILCardImage image_path={props.image_path}></ILCardImage>
            <ILCardLink link={props.link} link_name={props.link_name}></ILCardLink>
        </div>
    )
}

export default ILCard