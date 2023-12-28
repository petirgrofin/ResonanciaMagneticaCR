import {links, studies_link} from "../constants";
import {logo} from "../assets";
import {HoverLink} from "../styles";
import { useState, useEffect } from "react";

function getLinkStyle(index){

    return `navbar-links mr-[24px] font-poppins lg:text-[12px] xl:text-[1em] 2xl:text-[16px] ${HoverLink}`

}

const NavbarElement = ({main_link_text, href, dropdown_links, index, is_nav_background_visible, is_ad_visible}) => {

    const [elementHovered, setElementHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const updateNavbarColor = () => {
        if (window !== undefined){
            let windowHeight = window.scrollY;
            windowHeight > 600 ? setScrolled(true) : setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateNavbarColor);
        return () => {
            window.removeEventListener('scroll', updateNavbarColor);
        }
    }, []);
        
    return (

        <div>
            <a className={`${getLinkStyle(index)} ${is_nav_background_visible || scrolled ? 'text-black': 'text-white'} pb-[47px] transition-all duration-[500ms]`} href={href} onMouseEnter={() => setElementHovered(true)} onMouseLeave={() => setElementHovered(false)}>
                {main_link_text}
            </a>
            <div className={`${elementHovered ? "" : "pointer-events-none"} border-t-4 border-[#527bec] w-[300px] bg-[#f8f8f8] shadow-lg mt-[47px] absolute flex flex-col ${elementHovered && !dropdown_links.length == 0 ? `opacity-1 ${is_ad_visible ? "top-[112px]" : "top-[73px]"}` : `opacity-0 ${is_ad_visible ? "top-[105px]" : "top-[80px]"}`} transition-all`} onMouseEnter={() => setElementHovered(true)} onMouseLeave={() => setElementHovered(false)}>
                {Object.keys(dropdown_links).map((key) => (
                    <a className={`${elementHovered ? "" : "pointer-events-none"} border-t text-black p-4 hover:bg-[#cccccc] font-poppins`} key={key} href={dropdown_links[key].href}>{dropdown_links[key].text}</a>
                ))}
            </div>
        </div>

    )

}

const Navbar = ({background_visible_always = false}) => {

    const [adVisibility, setAdVisibility] = useState(true); // useState takes default value of adVisibility variable as argument
    const [isBackgroundVisible, setBackgroundVisibility] = useState(background_visible_always);
    const [scrolled, setScrolled] = useState(false);

    const updateNavbarBackground = () => {
        if (window !== undefined){
            let windowHeight = window.scrollY;
            if (windowHeight > 600 || background_visible_always){
                setBackgroundVisibility(true);
                setScrolled(true);
            }
            else{
                setBackgroundVisibility(false);
                setScrolled(false);
            }

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateNavbarBackground);
        return () => {
            window.removeEventListener('scroll', updateNavbarBackground);
        }
    }, []);

    return (
        <nav id="navbar" className={`${isBackgroundVisible || scrolled || background_visible_always ? "bg-[#f8f8f8] fixed" : "absolute"} hidden w-full z-[2] lg:flex flex-col transition-all duration-[500ms]`} onMouseEnter={() => setBackgroundVisibility(true)} onMouseLeave={() => setBackgroundVisibility(background_visible_always)}>
            
            <div className={`w-full bg-[#3642af] p-2 flex justify-center items-center ${adVisibility ? "": "hidden"}`}>
                <p className='font-poppins text-center m-auto text-white text-[15px]'>Promoción: 50% de descuento en <span className='font-bold'>todos</span> los servicios de resonancia magnética | <span className="underline">VER PRECIOS</span></p>
                <button onClick={() => {setAdVisibility(!adVisibility)}} className='absolute right-6 text-[14px] text-[#d3d3d3]'>Cerrar</button>
            </div>
            
            <div className="flex flex-row justify-evenly items-center w-full">
                <a href="index.html">
                    <img src={logo} alt="Resonancia Magnética" className="lg:h-[80px] xl:h-[120px]"/>
                </a>
                <div className="flex flex-row justify-center items-center">
                    {links.map((link, index) => (
                        <NavbarElement is_ad_visible={adVisibility} is_nav_background_visible={isBackgroundVisible} key={index} main_link_text={link.text} href={link.href} dropdown_links={link.dropdown_links} index={index}></NavbarElement>
                    ))}
                    <a className="navbar-links mr-[24px] font-poppins lg:text-[12px] xl:text-[1em] 2xl:text-[16px] font-bold transition-all duration-500 bg-[#527bec] hover:bg-[#3a549c] p-4 rounded-lg text-white" href={studies_link}>Revise sus estudios</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar