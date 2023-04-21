function Navbar() {
    return (
        <div className="text-1xl py-3 shadow-md">
            <div className="flex justify-between items-center max-w-5xl mx-10 lg:m-auto">
                <div className="text-4xl font-bold text-indigo-600">
                    <a href="/"> M </a>
                </div>
                <div className="sm:flex text-white hidden">
                        <div className="mx-2 hover:text-gray-600">
                            <a href='#'><p>About</p></a>
                        </div>
                        <div className="mx-2 hover:text-gray-600">
                            <a href='#'><p>Education</p></a>
                        </div>
                        <div className="mx-2 hover:text-gray-600">
                            <a href='#'><p>Experience</p></a>
                        </div>
                        <div className="mx-2 hover:text-gray-600">
                            <a href='#'><p>Skill</p></a>
                        </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
