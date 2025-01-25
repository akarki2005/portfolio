function NavBar() {
    return (
        <>
        <div className="flex bg-black w-full justify-between p-3">
            <div className="basis-1/10"><a className="text-white p-3">Aayush Karki</a></div>
            <div className="flex space-x-3">
                <div className="bg-blue-950"><a className="text-white p-3">Resume</a></div>
                <div className="bg-blue-950"><a className="text-white p-3">Projects</a></div>
                <div className="bg-blue-950"><a className="text-white p-3">Contact</a></div>
            </div>
        </div>
        </>
    )
}

export default NavBar