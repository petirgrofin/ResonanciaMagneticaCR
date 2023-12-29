import {resonancia_imagen} from "../assets"
import {Separator} from ".";
import { AltCTAStyle, CTAStyle } from "../styles";

const Hero = () => (
    
    <div className="w-full h-[900px] bg-[url('/src/assets/Resonancia.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">

        <div className="relative w-full h-full bg-black/[0.65] hover:bg-black/[0.5] transition-all duration-1000">
            <img src={resonancia_imagen} alt="resonador" className="brightness-[0.5] hover:brightness-[0.7] transition-all duration-1000 w-full hidden"/>
            <div className="absolute lg:top-[25%] xl:top-[22%] 2xl:top-[20%] left-[10%] transition-all duration-1000 w-[57%] xl:w-[47%] 2xl:w-[45%]">
                <h1 className="text-white font-regular text-[3em] xl:text-[3.8em] 2xl:text-[4.3em] font-montserrat w-fit">
                    Cuidado de calidad profesional a un <br />precio <span className="font-bold">inigualable</span>
                </h1>
                <p className="text-white font-light text-[1.3em] xl:text-[1.4em] border-l-4 border-l-[#4c62c7] px-4 rounded-md mt-12 xl:w-[100%] 2xl:w-[75%] text-justify">
                    Con nuestra tecnología de última generación y los mejores precios de la industria, podemos otorgarle <span className="font-bold">diagnósticos precisos</span> para que pueda tomar <span className="font-bold">decisiones informadas y tempranas</span> respecto a su salud.
                </p>
                <div className="flex flex-row gap-8">
                    <a href="#contact" className={`${AltCTAStyle} mt-12`}>
                        Agende una cita
                    </a>
                    <a href="#trust" className={`${CTAStyle} mt-12`}>
                        Aprenda más acerca de nosotros
                    </a>
                </div>
            </div>
        </div>

    </div>

)

export default Hero