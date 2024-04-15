import React from 'react'
import {radiation, safe, quality, flexible, informative, adaptable, withoutSecondaryEffects, full} from '../assets'

const Benefit = ({img_src, title, text, height}) => {
    return(
        <div className={`sm:m-0 transition-all hover:shadow-md hover:border hover:border-[#608aff60] shadow-sm flex flex-col flex-grow justify-center items-center border border-[#e0e0e0] rounded-2xl gap-2 sm:w-[400px] h-[225px]`}>
            <img className='w-[40px]' src={img_src} alt="" />
            <p className='font-semibold font-jakarta text-[1.3em] sm:text-[24px]'>{title}</p>
            <p className='w-[80%] sm:w-[60%] text-center font-jakarta text-[16px] sm:text-[18px] text-[#414141]'>{text}</p>
        </div>
    )
}

const BenefitsGrid = () => {

  return (
    <div className='flex justify-center items-center flex-col gap-4 ml-8 mr-8 2xl:m-0'>
        <p className='text-center font-poppins text-[#2D5CFD] font-bold uppercase text-[1.2em] sm:text-[1.2em]'>El examen correcto para usted</p>
        <h2 className='text-center font-jakarta text-[2em] sm:text-[2.5em] xl:text-[3.5em] font-semibold'>Ventajas de la resonancia magnética</h2>
        <div className='mt-8 m-auto flex flex-row justify-center items-center flex-wrap gap-8 2xl:max-w-[1600px]'>
            <Benefit height={800} img_src={radiation} title={"Sin radiación"} text={"No usa radiaciones ionizantes"}></Benefit>
            <Benefit height={200} img_src={safe} title={"Seguro"} text={"No se han encontrado efectos adversos"}></Benefit>
            <Benefit height={100} img_src={quality} title={"De alta calidad"} text={"Excelente resolución de contraste de los diferentes tejidos"}></Benefit>
            <Benefit height={100} img_src={flexible} title={"Flexible"} text={"Se pueden obtener imágenes en diferentes planos"}></Benefit>
            <Benefit height={100} img_src={informative} title={"Informativo"} text={"Provee  información del metabolismo y composición de los tejidos"}></Benefit>
            <Benefit height={100} img_src={adaptable} title={"Adaptable"} text={"Posibilidad de hacer estudios vasculares sin aplicar material de contraste"}></Benefit>
            <Benefit height={100} img_src={withoutSecondaryEffects} title={"Sin efectos secundarios"} text={"El material de contraste utilizado (gadolinio) no produce efectos adversos de consideración"}></Benefit>
            <Benefit height={100} img_src={full} title={"Completo"} text={"Permite realizar imágenes de cuerpo entero"}></Benefit>
        </div>
    </div>
  )
}

export default BenefitsGrid