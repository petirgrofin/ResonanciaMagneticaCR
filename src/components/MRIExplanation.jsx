import React from 'react'
import { MRI } from '../assets'
import { AltCTAStyle } from '../styles'

const MRIExplanation = () => (
    <div className='bg-[#f2f2f2] flex justify-center items-center'>
        <div className='max-w-4xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Nuestra práctica</p>
            <h2 className='font-poppins text-black text-[3.5em] font-bold'>Expertos en resonancias magnéticas</h2>
            <p className='font-poppins text-black text-[1.2em] leading-[1.8em] w-[78%] text-justify'>La resonancia magnética permite obtener imágenes corporales avanzadas <b>sin utilizar rayos x</b>, permitiendo así obtener diagnósticos más acertados <b>de manera segura</b>. Nuestro experimentado personal médico provee estos servicios a un <b>costo razonable y con tecnología de última generación</b>.</p>
            <button className={`${AltCTAStyle} self-start`}>Aprenda más</button>
        </div>
        <div>
            <img src={MRI} alt="" />
        </div>
    </div>
)

export default MRIExplanation