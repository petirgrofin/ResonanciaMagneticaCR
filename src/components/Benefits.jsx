import React from 'react'
import { MRIProcedure, MRI, resonator3} from '../assets'
import { AltCTAStyle } from '../styles'

const Benefits = () => (
    <div className='flex justify-center items-center gap-32'>
        <img className='h-[350px] w-[350px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] rounded-[6em] 2xl:rounded-[8em] object-cover' src={resonator3}/>
        <div className='w-[350px] xl:w-[500px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>¿Por qué elegir una resonancia magnética?</p>
            <h2 className='font-poppins text-[1.8em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Ventajas de la <br /> resonancia magnética</h2>
            <p className='font-poppins text-black text-[16px] xl:text-[18px] leading-[1.8em] w-[95%] xl:w-[78%] text-justify'>La resonancia magnética posee varias ventajas sobre otros métodos de diagnóstico.</p>
            <ul className='leading-[1.8em] list-inside list-image-[url(/src/assets/checkmark.svg)] space-y-2 text-[15px] xl:text-[17px] font-poppins'>
                <li className='w-full xl:w-[80%]'>
                    <b>No utiliza radiación</b> ionizante
                </li>
                <li className='w-full :w-[80%]'>
                    <b>No causa dolor ni molestia</b> alguna
                </li>
                <li className='w-full xl:w-[80%]'>
                    El paciente mantiene una <b>comunicación constante con el personal</b>
                </li>
            </ul>
            <button className={`${AltCTAStyle} self-start mt-4`}>Aprenda más</button>
        </div>
    </div>
)

export default Benefits