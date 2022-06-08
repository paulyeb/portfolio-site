import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBar, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return <div className="py-3 px-5 sticky top-0 z-10 w-full text-gray-700 font-medium text-xl bg-gray-100">
        <div className="container flex justify-between items-center">
            <p className="xl:text-4xl xl:py-0 py-2">Paul Yeboah Asamoah | <span className="font-light">Software Developer</span></p>
            <ul className="ml-32 xl:flex hidden">
                <li className="mx-3 my-3 hover:font-bold cursor-pointer">My Life</li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer">Resume</li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer">Projects</li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer">Services</li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer">Contact Me</li>
            </ul>
            <ul>
                <li className="xl:hidden mx-5 my-3 hover:font-bold cursor-pointer">
                    <FontAwesomeIcon icon={faBars} />
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;