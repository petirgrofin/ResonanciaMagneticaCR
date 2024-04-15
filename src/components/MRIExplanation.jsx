import React from 'react'
import { MRI, resonator, resonator2, original_resonator, original_resonator2, ResonanciaOriginal1} from '../assets'
import { AltCTAStyle } from '../styles'

const MRIExplanation = () => (
    <div className='ml-4 mr-4 p-16 xs:ml-8 xs:mr-8 sm:m-0 flex flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-[6rem]'>
        <div className='sm:w-[400px] xl:w-[550px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#2D5CFD] font-bold text-center lg:text-left uppercase text-[1.2em]'>Nuestra práctica</p>
            <h2 className='sm:ml-8 md:m-0 font-jakarta text-[#050C18] text-center lg:text-left text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Expertos en resonancias magnéticas</h2>
            <p className='m-auto lg:m-0 w-[75%] sm:w-full font-jakarta text-[#050C18] text-[16px] xl:text-[19px] leading-[1.8em] xl:w-[84%] text-justify'>La resonancia magnética permite obtener imágenes corporales avanzadas sin utilizar rayos x, permitiendo así obtener diagnósticos más acertados de manera segura. Nuestro experimentado personal médico provee estos servicios a un costo razonable y con tecnología de última generación.</p>
        </div>
        <img className='h-[250px] w-[250px] sm:w-[400px] sm:h-[400px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] rounded-2xl object-cover' src={ResonanciaOriginal1}/>
    </div>
)

export default MRIExplanation