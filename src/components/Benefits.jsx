import React from 'react'
import { MRIProcedure, MRI } from '../assets'
import { AltCTAStyle } from '../styles'

const Benefits = () => (
    <div className='flex justify-center items-center'>
        <div className='grow flex justify-center'>
            <img src={MRIProcedure} className='' alt="" />
        </div>
        <div className='max-w-4xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>¿Por qué elegir una resonancia magnética?</p>
            <h2 className='font-poppins text-black text-[3.3em] font-bold'>Ventajas de la resonancia magnética</h2>
            <p className='font-poppins text-black text-[1.2em] leading-[1.8em] w-[78%] text-justify'>La resonancia magnética posee varias ventajas sobre otros métodos de diagnóstico.</p>
            <ul className='list-inside list-image-[url(src/assets/checkmark.svg)] space-y-2'>
                <li className='font-poppins text-[1.1em] w-[80%]'>
                    No utiliza radiación ionizante
                </li>
                <li className='font-poppins text-[1.1em] w-[80%]'>
                    No causa dolor ni molestia alguna
                </li>
                <li className='font-poppins text-[1.1em] w-[80%]'>
                    El paciente mantiene una comunicación constante con el personal
                </li>
                <li className='font-poppins text-[1.1em] w-[80%]'>
                    Al finalizar el estudio, el paciente puede reanudar sus actividades habituales
                </li>
            </ul>
            <button className={`${AltCTAStyle} self-start`}>Aprenda más</button>
        </div>
    </div>
)

export default Benefits