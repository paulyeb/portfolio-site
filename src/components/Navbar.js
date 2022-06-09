import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DropdownContext } from "../store/dropdown-context";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const {state, dispatch} = useContext(DropdownContext);

    return <div className="py-3 px-5 sticky top-0 z-10 w-full text-gray-700 font-medium text-xl bg-gray-100 mb-2">
        <div className="lg:container flex justify-between items-center">
            <p className="xl:text-4xl xl:py-0 py-2"><a href="/">Paul Yeboah Asamoah</a> | <span className="md:inline-block block font-light">Software Developer</span></p>
            <ul className="ml-64 2xl:flex hidden">
                <li className="mx-3 my-3 hover:font-bold cursor-pointer"><a href="#projects">Projects</a></li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer"><a href="#services">Services</a></li>
                <li className="mx-3 my-3 hover:font-bold cursor-pointer"><a href="#contact_me">Contact Me</a></li>
            </ul>
            <ul>
                <li className="2xl:hidden mx-5 my-3 hover:font-bold cursor-pointer">
                    <button onClick={() => dispatch({
                        type: "toggle"
                    })}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </li>
            </ul>
        </div>
        {state.dropdown && <Dropdown />}
    </div>
    
}

export default Navbar;