import React from 'react'
import { MRI, resonator, resonador_about, mission} from '../assets'
import { AltCTAStyle } from '../styles'

{/*Ver si se puede reutilizar el MRIExplanation poniendole argumentos o parametros. Por ahora es un copy paste con diferente imagen y textos*/}

const Mission = () =>  (
    <div className='flex justify-center items-center gap-16'>
        <div className='max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Nuestra misión</p>
            <h2 className='font-poppins text-black text-[3em] font-semibold'>Innovar en el campo de la salud</h2>
            <p className='font-poppins text-black text-[18px] leading-[1.8em] w-[90%] text-justify'>Como líderes en resonancias magnéticas, ofrecemos servicios de diagnóstico diversos e innovadores en forma confiable, amigable, con tecnología moderna y profesionales altamente capacitados y experimentados que brindan una excelente atención en beneficio de la salud de nuestros clientes que visitan nuestras clínicas.</p>
        </div>
    <img className='h-[600px] w-[700px] rounded-[8em] object-cover' src={mission}/>
    </div>
)

export default Mission