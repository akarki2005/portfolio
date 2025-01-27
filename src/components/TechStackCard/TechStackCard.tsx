import TechStackCardContent from "./TechStackCardContent"
import TechStackCardTitle from "./TechStackCardTitle"

function TechStackCard() {
    return (
        <div className="bg-slate-900 rounded-xl flex flex-col m-4 w-full h-1/6 hover:scale-105 transition delay-100 duration-300">
            <TechStackCardTitle></TechStackCardTitle>
            <TechStackCardContent></TechStackCardContent>
        </div>
    )
}

export default TechStackCard