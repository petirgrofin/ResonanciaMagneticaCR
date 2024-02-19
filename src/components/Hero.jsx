import {resonancia_imagen} from "../assets"
import {Separator} from ".";
import { AltCTAStyle, CTAStyle } from "../styles";

const Hero = () => (
    
    <div className="w-full h-[920px] bg-[url('/src/assets/Resonancia.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">

        <div className="relative w-full h-full bg-black/[0.7] hover:bg-black/[0.6] transition-all duration-1000">
            <img src={resonancia_imagen} alt="resonador" className="brightness-[0.5] hover:brightness-[0.7] transition-all duration-1000 w-full hidden"/>
            <div className="absolute lg:top-[25%] xl:top-[22%] 2xl:top-[17%] left-[10%] transition-all duration-1000 w-[57%] xl:w-[47%] 2xl:w-[45%]">
                <h1 className="text-white font-regular text-[3em] xl:text-[3.8em] 2xl:text-[5em] font-montserrat w-fit">
                    A su servicio <br /> <span className="font-[900]">desde 1994</span>
                </h1>
                <p className="pl-12 list-disc space-y-2 text-white font-light text-[1.3em] xl:text-[1.4em] border-l-4 border-l-[#4c62c7] px-4 rounded-md mt-12 xl:w-[100%] 2xl:w-[90%] text-justify">
                    <li>Equipos Philips 1.5 Tesla que producen la mejor calidad y resolución de imagen</li>
                    <li>Personal médico y técnico con experiencia de más de 30 años</li>
                    <li>Servicio ininterrumpido con 4 equipos instalados y 3 clínicas a su servicio</li>
                    <li>Servidor de imágenes Apple que permite la inmediata visualización de exámenes</li>
                    <li>Somos la empresa preferida por la mayoría del cuerpo médico nacional y ofrecemos garantía de servicio</li>
                </p>
                <div className="flex flex-row gap-8">
                    <a href="#trust" className={`${CTAStyle} mt-12`}>
                        Acerca de nosotros
                    </a>
                </div>
            </div>
        </div>

    </div>

)

export default Hero