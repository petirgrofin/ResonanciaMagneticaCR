import React from 'react'
import { CTAStyle, AltCTAStyle } from '../styles'
import { INS, LHS, Metropolitano, Catolica, Redbridge, PanAmericanLife, Asismedic} from '../assets'

const Trust = () =>(

    <div className='flex flex-col gap-8 justify-center items-center'>
        <p className='mb-[-10px] font-bold text-[#527bec] font-poppins text-center text-[1.3em] uppercase'>¿Por qué elegirnos?</p>
        <h2 className='font-semibold text-black font-poppins text-center text-[2em] xl:text-[2.5em] 2xl:text-[3em]'>Somos la empresa líder en <br/> resonancias magnéticas con los <span className='underline underline-offset-4 decoration-[#527bec]'>mejores precios</span></h2>
        <p className='font-poppins text-center text-[17px] xl:text-[1.3em] 2xl:text-[1.4em] leading-[1.8em]'>Nuestro personal calificado ha servido a miles de clientes de manera satisfactoria y eficiente desde <span className='font-bold'>1995</span>. <br />Conozca más acerca de nuestra práctica y personal.</p>
        <a href='acerca-de.html' className={`${AltCTAStyle} block mx-auto`}>Acerca de nosotros</a>
        <div className='mt-8 flex flex-row justify-center items-center gap-8 flex-wrap max-w-8xl'>
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={INS} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={Asismedic} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={Catolica} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={LHS} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={Metropolitano} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={Redbridge} alt="" />
            <img className='w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={PanAmericanLife} alt="" />
        </div>
    </div>
    
)


export default Trust