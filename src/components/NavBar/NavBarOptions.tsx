function NavBarOptions() {
    return (
        <div className="flex bg-slate-900 rounded-md">
            <a className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-l-md p-3 text-white">Resume</a>
            <a className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Projects</a>
            <a className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 p-3 text-white">Contact</a>
            <a className="flex items-center bg-slate-900 hover:bg-slate-950 hover:scale-105 transition delay-50 duration-200 rounded-r-md p-3 text-white">&#9728;</a>
        </div>
    )
}

export default NavBarOptions