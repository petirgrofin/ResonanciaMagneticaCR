import React from 'react'
import { MRI, resonator, resonator2} from '../assets'
import { AltCTAStyle } from '../styles'

const MRIExplanation = () => (
    <div className='flex justify-center items-center gap-16'>
        <div className='w-[400px] xl:w-[550px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.1em]'>Nuestra práctica</p>
            <h2 className='font-poppins text-black text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Expertos en resonancias magnéticas</h2>
            <p className='font-poppins text-black text-[16px] xl:text-[18px] leading-[1.8em] w-full xl:w-[90%] text-justify'>La resonancia magnética permite obtener imágenes corporales avanzadas <b>sin utilizar rayos x</b>, permitiendo así obtener diagnósticos más acertados <b>de manera segura</b>. Nuestro experimentado personal médico provee estos servicios a un <b>costo razonable y con tecnología de última generación</b>.</p>
            <button className={`${AltCTAStyle} self-start mt-4`}>Aprenda más</button>
        </div>
        <img className='h-[350px] w-[350px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] rounded-[6em] 2xl:rounded-[8em] object-cover' src={resonator2}/>
    </div>
)

export default MRIExplanation