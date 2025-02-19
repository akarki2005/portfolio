import { Link } from "react-router-dom"
import NavBarOptions from "./NavBarOptions"

function NavBar() {

    return (
        <>
        <div className="flex bg-slate-800 w-full justify-between p-3">
            <Link to="/portfolio/" className="flex items-center text-white text-2xl p-2 font-bold">Aayush Karki</Link>
            <NavBarOptions></NavBarOptions>
        </div>
        </>
    )
}

export default NavBar