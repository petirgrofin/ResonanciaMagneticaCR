import React from 'react'
import { CTAStyle, AltCTAStyle } from '../styles'
import { INS, LHS, Metropolitano, Catolica, Redbridge, PanAmericanLife, Asismedic} from '../assets'

const Trust = () =>(

    <div className='flex flex-col gap-8 justify-center items-center'>
        <p className='font-bold text-[#527bec] font-poppins text-center text-[1.3em] uppercase'>¿Por qué elegirnos?</p>
        <h2 className='font-bold text-black font-poppins text-center text-[3em]'>Somos la empresa líder en <br/> resonancias magnéticas con los <span className='underline underline-offset-4 decoration-[#527bec]'>mejores precios</span></h2>
        <p className='font-poppins text-center text-[1.4em]'>Nuestro personal calificado ha servido a miles de clientes de manera satisfactoria y eficiente desde <span className='font-bold'>1995</span>. <br />Conozca más acerca de nuestra práctica y personal.</p>
        <button className={`${AltCTAStyle} block mx-auto`}>Acerca de nosotros</button>
        <div className='flex flex-row justify-center items-center gap-8 flex-wrap max-w-8xl'>
            <img className='w-[200px] h-[170px]' src={INS} alt="" />
            <img className='w-[200px] h-[170px]' src={Asismedic} alt="" />
            <img className='w-[200px] h-[170px]' src={Catolica} alt="" />
            <img className='w-[200px] h-[170px]' src={LHS} alt="" />
            <img className='w-[200px] h-[170px]' src={Metropolitano} alt="" />
            <img className='w-[200px] h-[170px]' src={Redbridge} alt="" />
            <img className='w-[200px] h-[170px]' src={PanAmericanLife} alt="" />
        </div>
    </div>
    
)


export default Trust