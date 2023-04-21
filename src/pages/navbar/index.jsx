function Navbar() {
    return (
        <div>
            <div>
                <header className="top-0 fixed m-auto w-full bg-neutral-800">
                    <nav className="flex items-center justify-between max-w-5xl my-5 m-auto px-10 lg:px-0">
                        <div className="text-4xl font-bold text-indigo-600">
                            <a href="/"> M </a>
                        </div>
                        <div className="sm:flex text-white hidden">
                            <div className="mx-2 hover:text-gray-600">
                                <a href='#aboutMe'><p>About</p></a>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <a href='#education'><p>Education</p></a>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <a href='#experience'><p>Experience</p></a>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <a href='#skill'><p>Skill</p></a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Navbar;
