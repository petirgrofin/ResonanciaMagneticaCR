import React from 'react'
import { MRI, resonator, resonador_about, mission} from '../assets'
import { AltCTAStyle } from '../styles'

{/*Ver si se puede reutilizar el MRIExplanation poniendole argumentos o parametros. Por ahora es un copy paste con diferente imagen y textos*/}

const Mission = () =>  (
    <div className='flex justify-center items-center gap-16'>
        <div className='w-[400px] xl:w-[550px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Nuestra misión</p>
            <h2 className='font-poppins text-black text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Innovar en el campo de la salud</h2>
            <p className='font-poppins text-black text-[16px] xl:text-[18px] leading-[1.8em] w-full xl:w-[94%] text-justify'>Como líderes en resonancias magnéticas, ofrecemos servicios de diagnóstico diversos e innovadores en forma confiable, amigable, con tecnología moderna y profesionales altamente capacitados y experimentados que brindan una excelente atención en beneficio de la salud de nuestros clientes que visitan nuestras clínicas.</p>
        </div>
    <img className='h-[350px] w-[350px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] rounded-[6em] 2xl:rounded-[8em] object-cover' src={mission}/>
    </div>
)

export default Mission