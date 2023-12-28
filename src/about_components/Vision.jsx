import React from 'react'
import { vision } from '../assets'

const Vision = () => (
    <div className='flex justify-center items-center gap-32'>
        <img className='h-[600px] w-[700px] rounded-[8em] object-cover' src={vision}/>
        <div className='max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Nuestra visión</p>
            <h2 className='font-poppins text-[3em] font-semibold'>Líderes de la <br /> resonancia magnética</h2>
            <p className='font-poppins text-black text-[18px] leading-[1.8em] w-[83%] text-justify'>Mantenernos siempre en el mercado como una empresa líder en resonancias magnéticas, gracias a la calidad, servicio y atractivos precios, continuando con la expansión de nuestras clínicas en diferentes partes de nuestro territorio nacional.</p>
        </div>
    </div>
)


export default Vision