import React from 'react'
import { MRI, resonator, resonador_about, mission, ResonanciaOriginal7} from '../assets'
import { AltCTAStyle } from '../styles'

{/*Ver si se puede reutilizar el MRIExplanation poniendole argumentos o parametros. Por ahora es un copy paste con diferente imagen y textos*/}

const Mission = () =>  (

    <div className='ml-4 mr-4 xs:ml-8 xs:mr-8 sm:m-0 flex flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-24'>
        <div className='sm:w-[400px] xl:w-[550px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#2D5CFD] font-bold text-center lg:text-left uppercase text-[1.2em]'>Nuestra misión</p>
            <h2 className='sm:ml-8 md:m-0 font-jakarta text-black text-center lg:text-left text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Innovar en el <br className='sm:hidden' /> campo <br className='xs:hidden'/> de la salud</h2>
            <p className='m-auto lg:m-0 w-[75%] sm:w-full font-jakarta text-[16px] xl:text-[19px] leading-[1.8em] xl:w-[84%] text-justify'>Como líderes en resonancias magnéticas, ofrecemos servicios de diagnóstico diversos e innovadores en forma confiable, amigable, con tecnología moderna y profesionales altamente capacitados y experimentados que brindan una excelente atención en beneficio de la salud de nuestros clientes que visitan nuestras clínicas.</p>
        </div>
        <img className='h-[250px] w-[250px] sm:w-[400px] sm:h-[400px] rounded-[4em] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] xl:rounded-[6em] 2xl:rounded-[8em] object-cover' src={ResonanciaOriginal7}/>
    </div>
)

export default Mission