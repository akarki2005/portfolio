import { Link } from "react-router-dom"
import linkedinLogo from "/assets/images/linkedin.256x256.png"
import githubLogo from "/assets/images/github.256x249.png"

function NavBarOptions() {
    return (
        <div className="flex bg-slate-900 rounded-md">
            <Link to="/portfolio/resume" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-l-md p-3 text-white">Resume</Link>
            <Link to="/portfolio/projects" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Projects</Link>
            <Link to="https://github.com/akarki2005" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">
            <div className="w-6 h-6">
            <img className="object-scale-down" src={githubLogo}></img>
            </div>
            </Link>
            <Link to="https://www.linkedin.com/in/aayushkarki05/" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-r-md p-3 text-white">
            <div className="w-6 h-6">
            <img className="object-scale-down" src={linkedinLogo}></img>
            </div>
            </Link>
        </div>
    )
}

export default NavBarOptions