import ImageCardImage from "./ImageCardImage";

interface Props {
    imgurl: string;
    linkurl: string;
}

function ImageCard(props: Props) {
    return (
        <div className="flex bg-slate-800 rounded-xl m-4 p-8 justify-center">
            <div className="flex bg-slate-900 rounded-xl p-6 hover:scale-105 transition delay-100 duration-300"> 
                <ImageCardImage imgurl={props.imgurl} linkurl={props.linkurl}></ImageCardImage>
            </div>
        </div>
    )
}

export default ImageCard