import React from 'react'
import { MRIProcedure, MRI, resonator3} from '../assets'
import { AltCTAStyle } from '../styles'

const Benefits = () => (
    <div className='flex justify-center items-center gap-32'>
        <img className='h-[600px] w-[700px] rounded-[8em] object-cover' src={resonator3}/>
        <div className='max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>¿Por qué elegir una resonancia magnética?</p>
            <h2 className='font-poppins text-[3em] font-semibold'>Ventajas de la <br /> resonancia magnética</h2>
            <p className='font-poppins text-black text-[18px] leading-[1.8em] w-[78%] text-justify'>La resonancia magnética posee varias ventajas sobre otros métodos de diagnóstico.</p>
            <ul className='leading-[1.8em] list-inside list-image-[url(src/assets/checkmark.svg)] space-y-2 text-[17px] font-poppins'>
                <li className='w-[80%]'>
                    <b>No utiliza radiación</b> ionizante
                </li>
                <li className='w-[80%]'>
                    <b>No causa dolor ni molestia</b> alguna
                </li>
                <li className='w-[80%]'>
                    El paciente mantiene una <b>comunicación constante con el personal</b>
                </li>
            </ul>
            <button className={`${AltCTAStyle} self-start mt-4`}>Aprenda más</button>
        </div>
    </div>
)

export default Benefits