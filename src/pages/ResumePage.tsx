import ImageCard from "../components/ImageCard/ImageCard"

function ResumePage() {
    return (
        <>
        <h1 className="text-center text-slate-800 m-4 text-3xl font-bold">Resume</h1>
        <p className="text-center text-slate-800 m-4 text-xl">Click on the card below to download the latest version of my resume.</p>
        <div className="flex flex-row w-full justify-center">
            <ImageCard imgurl="/src/assets/images/resume.png" linkurl={"/src/assets/files/AayushKarki_Resume.pdf"}></ImageCard>
        </div>
        <p className="text-center text-slate-800 m-4 text-xl">*Current as of February 3rd, 2025.</p>
        </>
    )
}

export default ResumePage