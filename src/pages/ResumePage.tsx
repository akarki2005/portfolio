import ImageCard from "../components/ImageCard/ImageCard"

function ResumePage() {
    return (
        <>
        <h1 className="text-center text-slate-800 m-4 text-3xl font-bold">Resume</h1>
        <p className="text-center text-slate-800 m-4 text-xl">Click on the card below to download the latest version of my resume.</p>
        <div className="flex justify-center">
            <div className="md:w-1/2 w-5/6">
            <ImageCard imgurl="./assets/images/resume_march17.PNG" linkurl={"./assets/files/aayush_karki_resume_software_developer.pdf"}></ImageCard>
            </div>
        </div>
        <p className="text-center text-slate-800 m-4 text-xl">*Current as of February 3rd, 2025.</p>
        </>
    )
}

export default ResumePage