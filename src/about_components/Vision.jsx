import React from 'react'
import { vision, ResonanciaOriginal8} from '../assets'

const Vision = () => (
    <div className='ml-4 mr-4 xs:ml-8 xs:mr-8 lg:m-0 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24 xl:gap-32'>
        <img className='h-[250px] w-[250px] sm:w-[400px] sm:h-[400px] rounded-[4em] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] xl:rounded-[6em] 2xl:rounded-[8em] object-cover' src={ResonanciaOriginal8}/>
        <div className='sm:w-[400px] xl:w-[550px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#2D5CFD] font-bold text-center lg:text-left uppercase text-[1.2em]'>Nuestra visión</p>
            <h2 className='sm:ml-8 md:m-0 font-jakarta text-black text-center lg:text-left text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Líderes de la <br /> resonancia <br className='xs:hidden' /> magnética</h2>
            <p className='m-auto lg:m-0 w-[75%] sm:w-full font-jakarta text-[16px] xl:text-[19px] leading-[1.8em] xl:w-[84%] text-justify'>Mantenernos siempre en el mercado como una empresa líder en resonancias magnéticas, gracias a la calidad, servicio y atractivos precios, continuando con la expansión de nuestras clínicas en diferentes partes de nuestro territorio nacional.</p>
        </div>
    </div>
)


export default Vision