import React from 'react'
import { stethoscope } from '../assets'
import { AltCTAStyle } from '../styles'

const BenefitCard = ({text}) => (

    <div className='flex flex-row items-center bg-[#f2f2f2] dark:bg-[#181818] rounded-lg mr-8 xl:w-[90%] 2xl:w-[460px] text-[1.1em] relative bottom-0 duration-[800ms] hover:bottom-4 hover:shadow-[rgb(190,190,192)] dark:hover:bg-[#131b3b] hover:shadow-lg dark:hover:shadow-[#242d55]'>
        <img src={stethoscope} className="w-[64px] h-[64px] basis-0 ml-4" alt="" />
        <p className='dark:text-white font-poppins p-6'>{text}</p>
    </div>


)

const Offers = () => (
    
    <div className='flex flex-row w-full mt-12 items-center p-6'>

        <div className="flex flex-col w-fit max-w-[896px] xl:ml-[6em] 2xl:ml-[16.3em]">
            <h2 className='font-bold font-poppins text-black xl:text-[3em] 2xl:text-[4em] w-fit'>Beneficios de la <br/> resonancia magnética</h2>
            <p className='font-poppins text-black mt-4 w-[84%] xl:text-[1em] 2xl:text-[1.1em] text-justify'>Se usa frecuentemente para la <span className='font-bold'>detección de enfermedades, el diagnóstico y el monitoreo de tratamientos</span>. Debido a la alta cantidad y resolución de las imágenes, la resonancia magnética sirve para ayudarle al médico en un <span className='font-bold'>diagnóstico más acertado</span></p>
            <button className={`${AltCTAStyle} w-[20%]`}>Aprenda más</button>
        </div>

        <div className='flex flex-col mt-6 gap-8'>

            <div className='flex flex-row items-center bg-[#f2f2f2] dark:bg-[#181818] rounded-lg mr-8 xl:w-[90%] 2xl:w-[460px] text-[1.1em] relative bottom-0 duration-[800ms] hover:bottom-4 hover:shadow-[rgb(190,190,192)] dark:hover:bg-[#131b3b] hover:shadow-lg dark:hover:shadow-[#242d55]'>
                <img src={stethoscope} className="w-[64px] h-[64px] basis-0 ml-4" alt="" />
                <p className='dark:text-white font-poppins p-6'>No utiliza radiación ionizante</p>
            </div>

            <div className='flex flex-row items-center bg-[#f2f2f2] dark:bg-[#181818] rounded-lg mr-8 xl:w-[90%] 2xl:w-[460px] text-[1.1em] relative bottom-0 duration-[800ms] hover:bottom-4 hover:shadow-[rgb(190,190,192)] dark:hover:bg-[#131b3b] hover:shadow-lg dark:hover:shadow-[#242d55]'>
                <img src={stethoscope} className="w-[64px] h-[64px] basis-0 ml-4" alt="" />
                <p className='dark:text-white font-poppins p-6'>No causa dolor ni molestia alguna</p>
            </div>

            <div className='flex flex-row items-center bg-[#f2f2f2] dark:bg-[#181818] rounded-lg mr-8 xl:w-[90%] 2xl:w-[460px] text-[1.1em] relative bottom-0 duration-[800ms] hover:bottom-4 hover:shadow-[rgb(190,190,192)] dark:hover:bg-[#131b3b] hover:shadow-lg dark:hover:shadow-[#242d55]'>
                <img src={stethoscope} className="w-[64px] h-[64px] basis-0 ml-4" alt="" />
                <p className='dark:text-white font-poppins p-6'>El paciente mantiene una comunicación constante con el personal</p>
            </div>

            <div className='flex flex-row items-center bg-[#f2f2f2] dark:bg-[#181818] rounded-lg mr-8 xl:w-[90%] 2xl:w-[460px] text-[1.1em] relative bottom-0 duration-[800ms] hover:bottom-4 hover:shadow-[rgb(190,190,192)] dark:hover:bg-[#131b3b] hover:shadow-lg dark:hover:shadow-[#242d55]'>
                <img src={stethoscope} className="w-[64px] h-[64px] basis-0 ml-4" alt="" />
                <p className='dark:text-white font-poppins p-6'>Al finalizar el estudio, el paciente puede reanudar sus actividades habituales</p>
            </div>

        </div>

    </div>
)

export default Offers