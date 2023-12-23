import {links} from "../constants";
import {logo} from "../assets";
import {HoverLink} from "../styles";

const Navbar = () => (
    <nav id="navbar" className="px-2 absolute w-full z-[2] flex justify-center items-center transition-all duration-[500ms]">
        <div className="flex flex-row justify-evenly items-center w-full">
            <img src={logo} alt="Resonancia Magnética" className="w-[270px] h-[140px] xl:mr-[1em] 2xl:mr-[13.5em]"/>
            <ul className="flex flex-row justify-center items-center">
                {links.map((link, index) => (
                    <a key={index} className={`navbar-links mr-[24px] text-white font-poppins xl:text-[1em] 2xl:text-[1.1rem] ${index == links.length - 1 ? "font-bold transition-all duration-500 bg-[#527bec] hover:bg-[#3a549c] p-4 rounded-lg studies-link" : ""} ${index == links.length - 1 ? "" : HoverLink}`} href={`${index == links.length - 1 ? "//201.192.249.18:8083/" : ""}`}>{link}</a>
                ))}
            </ul>
        </div>
    </nav>
)

export default Navbar