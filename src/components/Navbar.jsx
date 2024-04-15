import {links, studies_link} from "../constants";
import {logo, menu} from "../assets";
import {HoverLink} from "../styles";
import {useState, useEffect} from "react";

function getLinkStyle(index){

    return `navbar-links mr-8 font-jakarta text-[14px] xl:text-[16px] xl:text-[1em] ${HoverLink}`

}

const SmallScreenNavbarElement = ({main_link_text, href, dropdown_links, index, onClick}) => {
        
    return (
        <div onClick={onClick} className={`ml-10 ${index == 0 ? "pt-8" : "pt-4"} rounded-[24px] lg:m-0 lg:rounded-0 lg:p-0`}>
            <a className={`${getLinkStyle(index)}`} href={href}>
                {main_link_text}
            </a>
            <div className={`${dropdown_links.length > 0 ? "flex" : "hidden"} flex-col mt-4 ml-6 gap-4`}>
                {Object.keys(dropdown_links).map((key) => (
                    <a className={`text-[15px] ${HoverLink} text-[#3e3e3e] font-jakarta`} key={key} href={dropdown_links[key].href}>{dropdown_links[key].text}</a>
                ))}
            </div>
        </div>
    )

}

const NavbarElement = ({main_link_text, href, dropdown_links, index, is_nav_background_visible, is_ad_visible, scrolled}) => {

    const [elementHovered, setElementHovered] = useState(false);
        
    return (

        <div className="p-4 rounded-[24px] mr-8 lg:m-0 lg:rounded-0 lg:p-0 ">
            <a className={`${getLinkStyle(index)} ${is_nav_background_visible || scrolled ? 'text-black': 'text-white'} pb-[47px] transition-all duration-[500ms]`} href={href} onMouseEnter={() => setElementHovered(true)} onMouseLeave={() => setElementHovered(false)}>
                {main_link_text}
            </a>
            <div className={`${elementHovered ? "" : "pointer-events-none"} border-t-4 border-[#527bec] w-[300px] bg-[#f8f8f8] shadow-lg mt-[47px] absolute hidden sm:flex flex-col ${elementHovered && !dropdown_links.length == 0 ? `opacity-1 ${is_ad_visible ? "top-[89px] xl:top-[112px]" : "top-[53px] xl:top-[73px]"}` : `opacity-0 ${is_ad_visible ? "top-[96px] xl:top-[120px]" : "top-[60px] xl:top-[80px]"}`} transition-all`} onMouseEnter={() => setElementHovered(true)} onMouseLeave={() => setElementHovered(false)}>
                {Object.keys(dropdown_links).map((key) => (
                    <a className={`${elementHovered ? "" : "pointer-events-none"} text-[12px] xl:text-[16px] border-t text-black p-4 hover:bg-[#cccccc] font-jakarta`} key={key} href={dropdown_links[key].href}>{dropdown_links[key].text}</a>
                ))}
            </div>
        </div>

    )

}

const Navbar = ({background_visible_always = false}) => {

    let smallScreenMatch = window.matchMedia("(max-width: 768px)");
    const [adVisibility, setAdVisibility] = useState(false); // useState takes default value of adVisibility variable as argument. We are hiding it for now
    const [isBackgroundVisible, setBackgroundVisibility] = useState(background_visible_always);
    const [isMenuToggled, setMenuToggled] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    let is_navbar_background_always_visible = false

    const updateNavbarBackground = () => {
        if (window !== undefined){
            let windowHeight = window.scrollY;
            if (windowHeight > 550 && !smallScreenMatch.matches && windowHeight || windowHeight > 0 && smallScreenMatch.matches || is_navbar_background_always_visible){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }

        }
    };

    window.addEventListener('scroll', updateNavbarBackground);
    smallScreenMatch.addEventListener("change", function(){
        setMenuToggled(smallScreenMatch.matches && isMenuToggled);
    });

    function onMenuToggle(){
        if (isMenuToggled){
            document.body.style.overflow = "visible";
        }
        else{
            document.body.style.overflow = "hidden";
        }
        setMenuToggled(!isMenuToggled)
    }

    return (
        <nav id="navbar" className={`${isBackgroundVisible || scrolled || background_visible_always ? "shadow-sm bg-[#fefefe]" : ""} fixed w-full z-[3] flex flex-col transition-all duration-[300ms]`} onMouseEnter={() => setBackgroundVisibility(true)} onMouseLeave={() => setBackgroundVisibility(background_visible_always || isMenuToggled)}>
            
            <div className={`w-full bg-[#2549c4] p-2 flex justify-center items-center ${adVisibility ? "": "hidden"}`}>
                <p className='font-poppins text-center m-auto text-white text-[10px] xl:text-[15px]'>Promoción: 50% de descuento en <span className='font-bold'>todos</span> los servicios</p>
                <button onClick={() => {setAdVisibility(!adVisibility)}} className='absolute right-6 text-[12px] xl:text-[14px] text-[#d3d3d3]'>X</button>
            </div>
            
            <div className={`${isMenuToggled ? "border-b-[#ececec] border-b" : "border-none"} flex flex-row items-center justify-center sm:justify-evenly w-full`}>

                <a href="index.html">
                    <img src={logo} alt="Resonancia Magnética" className="h-[100px] xl:h-[120px]"/>
                </a>
                
                <div className="ml-8 flex flex-row lg:hidden justify-center items-center">
                    <img onClick={onMenuToggle} src={menu} className="w-[20px]" alt="" />
                </div>

                <div className="border-t-black hidden lg:flex flex-row justify-center items-center">
                    {links.map((link, index) => (
                        <NavbarElement is_ad_visible={adVisibility} is_nav_background_visible={isBackgroundVisible} key={index} main_link_text={link.text} href={link.href} dropdown_links={link.dropdown_links} index={index} scrolled={scrolled}></NavbarElement>
                    ))}
                    <a className="navbar-links mr-[24px] font-jakarta text-[14px] xl:text-[1em] 2xl:text-[16px] font-bold transition-all duration-500 bg-[#2D5CFD] hover:bg-[#2549c4] p-4 rounded-lg text-white" href={studies_link}>Revise sus estudios</a>
                </div>

            </div>

            <div className={`flex-col gap-4 font-jakarta transition-[height,opacity] flex w-full bg-[#fefefe] ${isMenuToggled ? "opacity-1 h-[100vh]": "opacity-0 h-[0vh] pointer-events-none"}`}>
                {links.map((link, index) => (
                    <SmallScreenNavbarElement onClick={onMenuToggle} key={index} main_link_text={link.text} href={link.href} dropdown_links={link.dropdown_links} index={index}></SmallScreenNavbarElement>
                ))}
                <a className="ml-10 mt-4 p-4 navbar-links w-[72%] xs:w-[55%] sm:w-[24%] text-center font-jakarta text-[16px] font-bold transition-all duration-500 bg-[#527bec] hover:bg-[#3a549c] rounded-lg text-white" href={studies_link}>Revise sus estudios</a>
            </div>

        </nav>
    )
}

export default Navbar