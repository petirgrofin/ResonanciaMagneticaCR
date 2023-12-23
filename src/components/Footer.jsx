import React from 'react'
import { facebook, logo, whatsapp, location, schedule } from '../assets'
import { links } from '../constants'
import { HoverLink, SectionHR } from '../styles'

const Footer = () => (

    <footer className='bg-gradient-to-r from-[#0b0e29] to-[#182a79] to-60% grid grid-cols-3 bg-[#181818]'>

      <div className='flex flex-col items-center justify-center'>
        <img src={logo}/>
      </div>

      <div className='flex items-center flex-col  p-12 gap-4'>       
        <a href="#" className={`text-white font-poppins font-bold ${HoverLink}`}>Volver arriba</a>
        {links.map((link, index) => (
          <a key={index} className={`text-white font-poppins ${HoverLink}`} href="">{link}</a>
        ))}
      </div>

      <div className='flex flex-col justify-center items-center gap-4'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <img src={location} alt="" className='w-[24px]'/>
          <a className={`text-white font-poppins ${HoverLink}`} href='https://www.google.com/maps/place/Hospital+La+Cat%C3%B3lica/@9.9490601,-84.0613925,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0e47d57bfdbd5:0xbd8efb4b06725e69!8m2!3d9.9490548!4d-84.0588176!16s%2Fg%2F1tx482y_?entry=ttu'>Hospital Hotel la Católica <span className='font-bold'>(+506) 2283-6783</span></a>
        </div>

        <div className='flex flex-row gap-2 items-center justify-center'>
          <img src={location} alt="" className='w-[24px]'/>
          <a className={`text-white font-poppins ${HoverLink}`} href='https://www.google.com/maps/place/CENTROS+DE+RESONANCIA+MAGNETICA:+Sucursales+en+La+Uruca,+Hospital+La+Cat%C3%B3lica+y+Ciudad+Quesada./@9.949472,-84.1148261,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0fb5aa112d97d:0x957b526136c244a1!8m2!3d9.9494667!4d-84.1122512!16s%2Fg%2F12hk20k1r?entry=ttu'>Clínica de la Uruca <span className='font-bold'>(+506) 2291-3128</span></a>
        </div>

        <div className='flex flex-row gap-2 justify-center items-center'>
          <img src={schedule} alt="" className='w-[24px]'/>
          <p className='text-white font-poppins'>Horario de lunes a viernes de <span className='font-bold'>7:00 a.m. a 8:00 p.m.</span></p>
        </div>
      
        <div className='flex flex-row gap-4 mt-2 justify-center items-center'>
          <a href="https://www.facebook.com/p/Centros-De-Resonancia-Magnetica-100057147112998/">
            <img src={facebook} alt="Facebook" className='w-[32px] h-[32px]'/>
          </a>
          <a href="">
            <img src={whatsapp} alt="WhatsApp" className='w-[32px] h-[32px]'/>
          </a>
        </div>
      </div>

    </footer>

)

export default Footer