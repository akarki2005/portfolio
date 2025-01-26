import { Link } from "react-router-dom"

function NavBarOptions() {
    return (
        <div className="flex bg-slate-900 rounded-md">
            <Link to="/resume" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-l-md p-3 text-white">Resume</Link>
            <Link to="/projects" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Projects</Link>
            <Link to="/contact" className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Contact</Link>
            <a className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-r-md p-3 text-white">&#9728;</a>
        </div>
    )
}

export default NavBarOptions