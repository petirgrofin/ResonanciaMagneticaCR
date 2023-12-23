import {AbdomenPelvis, Cerebral, MusculoEsqueletico, Torax, Mamas, brain2} from "../assets";
import { brain_icon } from "../assets";
import { AltCTAStyle } from "../styles";

const Service = ({img_src, title, text}) => (
    
    <div className="flex flex-col gap-4 w-[380px] rounded-tl-[4em] rounded-br-[4em] bg-[#fbfbfb] p-8 hover:shadow-lg hover:shadow-[#dcdcdc] relative hover:translate-y-[-0.5em] transition-all duration-[350ms]">
        <img src={img_src} className="w-[100%] rounded-tl-[4em] rounded-br-[4em]" alt=""/>
        <p className="font-poppins font-bold text-[1.3em]">{title}</p>
        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quis et itaque molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum ea deserunt quasi omnis.</p>
        <p className="font-poppins uppercase font-bold text-[#527bec]">Leer más &gt;</p>
    </div>

)

const MRI = () => (
    
    <div className="flex flex-col justify-center items-center">

        <div className="flex flex-col gap-4">
            <p className="text-[#527bec] font-bold font-poppins text-[1.2em] uppercase text-center">Nuestros servicios</p>
            <h2 className='mb-12 text-black font-bold font-poppins text-[3.5em]'>Todo tipo de resonancias magnéticas</h2>
        </div>

        <div className="flex flex-row items-center justify-center gap-8 max-w-[1600px] flex-wrap">
            <Service img_src={Cerebral} title={"Cerebro"}></Service>
            <Service img_src={MusculoEsqueletico} title={"Músculo-Esquelético"}></Service>
            <Service img_src={Torax} title={"Tórax"}></Service>
        </div>

        <button className={`mt-12 ${AltCTAStyle} w-[150px]`}>Ver todos</button>

    </div>

)

export default MRI