import React from 'react'
import {MRIImage} from '../assets'
import {CTAStyle} from '../styles'

const FinishingRemark = () => {
  return (
    <div className='m-auto flex justify-center items-center w-full h-[600px] relative'>
        <img src={MRIImage} alt="" className='object-cover w-full h-full brightness-[30%]'/>
        <div className='ml-4 mr-4 absolute gap-4 flex flex-col items-center justify-center'>
            <h2 className='font-jakarta font-bold text-center text-[2em] sm:text-[2.5em] lg:text-[3em] text-white'>Tome el control de su salud</h2>
            <p className='font-jakarta text-center text-[#ececec] text-[1.2em] lg:text-[1.5em] mb-4'>Estamos disponibles para atenderlo. Contáctenos para agendar una cita</p>
            <button className={`${CTAStyle} text-white`}>Contáctenos</button>
        </div>
    </div>
  )
}

export default FinishingRemark