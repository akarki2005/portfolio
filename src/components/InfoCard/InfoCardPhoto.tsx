import profilePhoto from "/assets/images/profile_photo.jpg"

function InfoCardPhoto() {
    return (
        <div className="flex flex-col bg-slate-800 justify-center p-2 rounded-t-xl">
            <img className="scale-75 rounded-xl border-8 border-white" src={profilePhoto}></img>
            <h1 className="text-white text-3xl text-center">&#128075; Hey! I'm Aayush.</h1>
        </div>
    )
}

export default InfoCardPhoto