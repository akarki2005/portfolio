import ImageCard from "../components/ImageCard/ImageCard"

function ResumePage() {
    return (
        <>
        <h1 className="text-center text-slate-800 m-4 text-3xl font-bold">Resume</h1>
        <p className="text-center text-slate-800 m-4 text-xl">Click on the card below to download the latest version of my resume.</p>
        <div className="flex justify-center">
            <div className="md:w-1/2 w-4/5">
            <ImageCard imgurl="./assets/images/resume.png" linkurl={"./assets/files/AayushKarki_Resume.pdf"}></ImageCard>
            </div>
        </div>
        <p className="text-center text-slate-800 m-4 text-xl">*Current as of February 3rd, 2025.</p>
        </>
    )
}

export default ResumePage