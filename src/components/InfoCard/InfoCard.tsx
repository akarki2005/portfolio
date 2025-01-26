import InfoCardPhoto from "./InfoCardPhoto"
import InfoCardText from "./InfoCardText"

function InfoCard() {
    return (
        <div className="bg-slate-900 rounded-xl flex flex-col justify-center w-1/4 m-4 h-8/10 hover:scale-105 transition delay-100 duration-300">
            <InfoCardPhoto></InfoCardPhoto>
            <InfoCardText></InfoCardText>
        </div>
    )
}

export default InfoCard