import { Link } from "react-router-dom"

function NavBarOptions() {
    return (
        <div className="flex bg-slate-900 rounded-md">
            <Link to="/resume" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-l-md p-3 text-white">Resume</Link>
            <Link to="/projects" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Projects</Link>
            <Link to="https://github.com/akarki2005" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">
            <img className="w-6" src="/src/assets/images/github.256x249.png"></img>
            </Link>
            <Link to="https://www.linkedin.com/in/aayushkarki05/" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-r-md p-3 text-white">
            <img className="w-6" src="/src/assets/images/linkedin.256x256.png"></img>
            </Link>
        </div>
    )
}

export default NavBarOptions