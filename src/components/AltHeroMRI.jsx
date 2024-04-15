import React from 'react'
import { ResonanciaOriginal1, ResonanciaOriginal4 } from '../assets'

const AltHeroMRI = () => {
  return (
    <div className='bg-[#f5f5f5] p-16 pt-36 pb-36 xl:pt-56 xl:pb-[10.3rem] w-full canvas-container flex pl-36 items-center flex-col-reverse xl:flex-row'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h1 className='text-center xl:w-fit xl:text-left  text-black font-regular text-[3em] xl:text-[3.8em] 2xl:text-[4.5em] font-montserrat'>A su servicio <br/> <span className='font-bold'>desde 1994</span></h1>
          <p className="font-jakarta space-y-2  text-black text-[1em] lg:text-[1.3em] xl:text-[18px] 2xl:text-[20px] mt-8 xl:w-[60%] text-justify">
            <li>Equipos Philips 1.5 Tesla que producen la mejor calidad y resolución de imagen</li>
            <li>Personal médico y técnico con experiencia de más de 30 años</li>
            <li>Servicio ininterrumpido con 4 equipos instalados y 3 clínicas a su servicio</li>
            <li>Servidor de imágenes Apple que permite la inmediata visualización de exámenes</li>
            <li>Somos la empresa preferida por la mayoría del cuerpo médico nacional y ofrecemos garantía de servicio</li>
          </p>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-center xl:justify-normal gap-8 mt-12">
            <a href="#trust" className={`w-[200px] sm:w-[240px] text-center font-jakarta font-bold rounded-[8px] pt-4 pb-4 pr-4 pl-4 text-[1em] xl:pt-4 xl:pb-4 xl:pr-6 xl:pl-6 xl:text-[1.2em] transition-all border-[2px] duration-500 hover:bg-[#e5e5e5] text-[#046eba] border-[#046eba] m-auto sm:mb-0 sm:ml-0 sm:mr-0`}>
                Acerca de nosotros
            </a>
        </div>
        <img className="w-[500px] absolute right-36 rounded-2xl" src={ResonanciaOriginal1} alt="" />
        <img className='w-[500px] absolute right-96 bottom-12 rounded-2xl' src={ResonanciaOriginal4} alt="" />
      </div>
    </div>
  )
}

export default AltHeroMRI