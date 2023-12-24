import {resonancia_imagen} from "../assets"
import {Separator} from ".";
import { AltCTAStyle, CTAStyle } from "../styles";

const Hero = () => (
    
    <div className="w-full xl:h-[800px] 2xl:h-[900px] bg-sky-500 bg-[url('src/assets/Resonancia.jpg')] bg-no-repeat bg-fixed bg-center bg-cover backdrop-brightness-50">

        <div className="relative w-full h-full bg-black/[0.55] hover:bg-black/[0.4] transition-all duration-1000">
            <img src={resonancia_imagen} alt="resonador" className="brightness-[0.5] hover:brightness-[0.7] transition-all duration-1000 w-full hidden"/>
            <div className="absolute top-[20%] left-[10%] transition-all duration-1000 w-[40%]">
                <h1 className="text-white font-regular xl:text-[4em] 2xl:text-[6em] font-montserrat w-fit">
                    Un resonador <br/> <span className="font-bold"> magnético</span>
                </h1>
                <p className="text-white font-light xl:text-[1.1em] 2xl:text-[1.5em] border-l-4 border-l-[#4c62c7] px-4 rounded-md mt-12 w-[90%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio eos aliquam consequuntur, magni voluptatum quisquam qui perferendis harum repellendus, enim quo rem, voluptatibus quis totam sint dignissimos velit repellat.
                </p>
                <div className="flex flex-row gap-8">
                    <button className={`${AltCTAStyle} mt-12`}>
                        Agende una cita
                    </button>
                    <button className={`${CTAStyle} mt-12`}>
                    Aprenda más acerca de nosotros
                    </button>
                </div>
            </div>
        </div>

    </div>

)

export default Hero