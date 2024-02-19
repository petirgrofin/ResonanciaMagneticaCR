import React, {useState, useEffect} from 'react'
import { resonancia_imagen2, logo, resonancia_imagen, resonancia_imagen3, original_resonator2} from '../assets'

let service_id_to_img = {
    0: resonancia_imagen2,
    1: resonancia_imagen,
    2: resonancia_imagen3,
    3: original_resonator2
}

const Service = ({onClick, img_src, title, text, selected, id}) => {
    
    return (
    <div onClick={onClick} className={`flex cursor-pointer flex-col rounded-2xl ${selected == id ? 'bg-[#12141A]' : 'bg-[#000000]'} gap-4 p-12 w-[600px]`}>
        <div className='flex flex-row gap-4'>
            <img className='w-[70px]' src={img_src} alt="" />
            <p className={`font-poppins text-[1.5em] text-white`}>{title}</p>
        </div>
        <p className={`text-white font-poppins ${selected == id ? "opacity-100 h-full translate-y-0 transition-all": "opacity-0 h-0 translate-y-[-16px] transition-none"} text-[16px] duration-300`}>{text}</p>
    </div>
    )
}

const MRITypes = () => {

    const [selectedItem, setSelectedItem] = useState(0);

    return (
    <div className="pt-36 pb-36 bg-[#000000] flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col gap-4 items-center justify-center">
            <p className=" text-[#527bec] font-bold font-poppins text-[1.2em] uppercase text-center">Nuestros servicios</p>
            <h2 className='text-white mb-12 font-semibold font-poppins text-[2.5em] xl:text-[3.5em]'>Ofrecemos todo tipo de resonancias magnéticas</h2>
            <div className='flex flex-row gap-12'>
                <div className='flex flex-col'>
                    <Service onClick={() => {setSelectedItem(0)}} id={0} selected={selectedItem} img_src={logo} title={"Cerebro"} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie porta hendrerit. Cras gravida, mauris ac accumsan tincidunt.`}></Service>
                    <Service onClick={() => {setSelectedItem(1)}} id={1} selected={selectedItem} img_src={logo} title={"Columna"} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie porta hendrerit. Cras gravida, mauris ac accumsan tincidunt.`}></Service>
                    <Service onClick={() => {setSelectedItem(2)}} id={2} selected={selectedItem} img_src={logo} title={"Hombros"} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie porta hendrerit. Cras gravida, mauris ac accumsan tincidunt.`}></Service>
                    <Service onClick={() => {setSelectedItem(3)}} id={3} selected={selectedItem} img_src={logo} title={"Tórax"} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie porta hendrerit. Cras gravida, mauris ac accumsan tincidunt.`}></Service>
                </div>
                <div className=''>
                    <img id='service_img' src={service_id_to_img[selectedItem]} className={`w-[800px] transition-all duration-300 object-cover h-[665px] rounded-2xl`} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default MRITypes