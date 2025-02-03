interface Props {
    imgurl: string;
    linkurl: string
}

function ImageCardImage(props: Props) {
    return (
        <a href={props.linkurl} download>
            <img className="w-full object-fill rounded-lg" src={props.imgurl}></img>
        </a>
    )
}

export default ImageCardImage