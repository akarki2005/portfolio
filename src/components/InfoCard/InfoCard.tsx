import InfoCardPhoto from "./InfoCardPhoto"
import InfoCardText from "./InfoCardText"

function InfoCard() {
    return (
        <div className="bg-slate-900 rounded-xl flex flex-col justify-center 2xl:w-1/5 w-4/5 m-4 h-4/5 hover:scale-105 transition delay-100 duration-300 lg:self-start self-center lg:w-1/4 md:w-1/2">
            <InfoCardPhoto></InfoCardPhoto>
            <InfoCardText></InfoCardText>
        </div>
    )
}

export default InfoCard