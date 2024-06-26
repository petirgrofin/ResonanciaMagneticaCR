import React from 'react'
import { facebook, logo, whatsapp, location, schedule, logotransparent } from '../assets'
import { links } from '../constants'
import { HoverLink, SectionHR } from '../styles'

const Footer = () => (

    <footer className='bg-[#050C18] pt-24 flex flex-col items-center gap-4'>

      <div className='flex flex-row justify-evenly gap-36 flex-wrap ml-8 mr-8 lg:m-0'>
        
        <div>
          <ul className='text-center font-jakarta text-white space-y-2'>
            <li className='font-bold'>Acerca de nosotros</li>
            <li>Nuestras sedes</li>
          </ul>
        </div>

        <div>
          <ul className='text-center font-jakarta text-white space-y-2'>
            <li className='font-bold'>Servicios</li>
            <li>Procedimiento</li>
            <li>Nuestra práctica</li>
          </ul>
        </div>

        <div>
          <ul className='font-jakarta text-white space-y-2'>
            <li className='font-bold'>Contáctenos</li>
          </ul>
        </div>
      </div>

      <hr className='w-[45%] mt-12 border-[#28313D]' />

      <p className='mt-12 ml-12 mr-12 lg:mr-0 lg:ml-0 lg:mb-0 font-jakarta text-center text-[12px] text-white'>&copy; 2024 Centros de Resonancia Magnética. Todos los derechos reservados.</p>
      <img src={logotransparent} alt="" className='mb-8 mt-8 ml-4 mr-4 w-[250px] lg:w-[320px]'/>


    </footer>

)

export default Footer