import {resonancia_imagen} from "."
import {Separator} from "../components";
import { AltCTAStyle, CTAStyle } from "../styles";

/*function revealText(){
    let carousel_text = document.getElementById("carousel_text");
    carousel_text.className = carousel_text.className.replace("opacity-0", "opacity-100").replace("top-[45%]", "top-[50%]")
}

function hideText(){
    let carousel_text = document.getElementById("carousel_text");
    carousel_text.className = carousel_text.className.replace("opacity-100", "opacity-0").replace("top-[50%]", "top-[45%]")
}*/
    {/*<img src={resonancia_imagen} alt="resonador" classNameName="brightness-[0.25] hover:brightness-[0.50] transition-all duration-1000 w-full"/>
    <div id="carousel_text" className="opacity-0 w-full absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-1000">
        <h2 className="text-white font-regular text-[5em] font-montserrat text-center">
            Esta es una resonadora <br/> <span className="font-bold"> magnética</span>
        </h2>
    </div>*/}

/*function onSlideChange(index){

    let texts = document.getElementsByClassName("carousel_text")

    for (let i = 0; i < texts.length; i++){
        texts[i].className = texts[i].className.replace("top-[50%]", "top-[40%]").replace("opacity-100", "opacity-0")
    }

    if (index > texts.length){
        return
    }

    let carousel_text = document.getElementsByClassName("carousel_text")[index];
    carousel_text.className = carousel_text.className.replace("top-[40%]", "top-[50%]").replace("opacity-0", "opacity-100")
}*/

{/*<div className="relative">
    <img src={resonancia_imagen2} alt="resonador" className="brightness-[0.25] hover:brightness-[0.50] transition-all duration-1000 w-full"/>
    <div className="carousel_text opacity-0 w-full absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-1000">
        <h2 className="text-white font-regular text-[5em] font-montserrat text-center">
            Este es otro resonador <br/> <span className="font-bold">magnético</span>
        </h2>
    </div>
</div>

<div className="relative">
    <img src={resonancia_imagen3} alt="resonador" className="brightness-[0.25] hover:brightness-[0.50] transition-all duration-1000 w-full"/>
    <div className="carousel_text opacity-0 w-full absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-1000">
        <h2 className="text-white font-regular text-[5em] font-montserrat text-center">
            Finalmente, un resonador <br/> <span className="font-bold">magnético</span>
        </h2>
    </div>
</div>*/}

const Hero = () => (
    
    <div className="w-full xl:h-[800px] 2xl:h-[900px] bg-sky-500 bg-[url('src/assets/Resonancia.jpg')] bg-no-repeat bg-fixed bg-center bg-cover backdrop-brightness-50">

        <div className="relative w-full h-full bg-black/50 hover:bg-black/20 transition-all duration-1000">
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
                    Aprenda más acerca de nosotros
                    </button>
                    <button className={`${AltCTAStyle} mt-12`}>
                        Agende una cita
                    </button>
                </div>
            </div>
        </div>

    </div>

)

export default Hero