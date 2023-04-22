import resume from './resume.pdf'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div>
            <div>
                <header className="top-0 fixed m-auto w-full bg-neutral-800">
                    <nav className="flex items-center justify-between max-w-5xl my-5 m-auto px-10 lg:px-0">
                        <div className="text-4xl font-bold text-indigo-600">
                            <a href="/"> M </a>
                        </div>
                        <div className="sm:flex text-white hidden items-center">
                            <div className="mx-2 hover:text-gray-600">
                                <Link to="aboutMe" spy={true} smooth={true} offset={50} duration={500}><p>About</p></Link>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <Link to="experience" spy={true} smooth={true} offset={50} duration={500}><p>Experience</p></Link>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <Link to="skill" spy={true} smooth={true} offset={50} duration={500}><p>Skill</p></Link>
                            </div>
                            <div className="mx-2 hover:text-gray-600">
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
                            </div>
                            <div className="mx-2">
                                <a href={resume} target="_blank">
                                    <div className="px-5 py-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                        Resume
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Navbar;
