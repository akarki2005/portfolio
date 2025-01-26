import NavBarOptions from "./NavBarOptions"

function NavBar() {
    return (
        <>
        <div className="flex bg-slate-800 w-full justify-between p-3">
            <a className="flex items-center text-white text-2xl p-2">Aayush Karki</a>
            <NavBarOptions></NavBarOptions>
        </div>
        </>
    )
}

export default NavBar