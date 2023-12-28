import React from 'react'
import { MRI, resonator, resonator2} from '../assets'
import { AltCTAStyle } from '../styles'

const MRIExplanation = () => (
    <div className='flex justify-center items-center gap-16'>
        <div className='max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Nuestra práctica</p>
            <h2 className='font-poppins text-black text-[3em] font-semibold'>Expertos en resonancias magnéticas</h2>
            <p className='font-poppins text-black text-[18px] leading-[1.8em] w-[90%] text-justify'>La resonancia magnética permite obtener imágenes corporales avanzadas <b>sin utilizar rayos x</b>, permitiendo así obtener diagnósticos más acertados <b>de manera segura</b>. Nuestro experimentado personal médico provee estos servicios a un <b>costo razonable y con tecnología de última generación</b>.</p>
            <button className={`${AltCTAStyle} self-start mt-4`}>Aprenda más</button>
        </div>
        <img className='h-[600px] w-[700px] rounded-[8em] object-cover' src={resonator2}/>
    </div>
)

export default MRIExplanation