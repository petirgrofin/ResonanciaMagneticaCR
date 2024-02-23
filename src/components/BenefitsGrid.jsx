import React from 'react'
import { logo, radiation } from '../assets'

const Benefit = ({img_src, title, text, height}) => {
    return(
        <div className={`transition-all hover:shadow-xl hover:border hover:border-[#527bec] shadow-sm w-[400px] flex flex-col flex-grow font-poppins justify-center items-center border border-[#e0e0e0] rounded-2xl gap-2 h-[225px]`}>
            <img className='w-[40px]' src={img_src} alt="" />
            <p className='font-semibold text-[24px]'>{title}</p>
            <p className='w-[60%] text-center text-[18px] text-[#414141]'>{text}</p>
        </div>
    )
}

const BenefitsGrid = () => {

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Beneficios del examen</p>
        <h2 className='text-center font-poppins text-[1.8em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Ventajas de la resonancia magnética</h2>
        <div className='mt-4 m-auto flex flex-row justify-center items-center flex-wrap gap-6 max-w-[1600px]'>
            <Benefit height={800} img_src={radiation} title={"Sin radiación"} text={"No usa radiaciones ionizantes"}></Benefit>
            <Benefit height={200} img_src={radiation} title={"Seguro"} text={"No se han encontrado efectos adversos"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Preciso"} text={"Excelente resolución de contraste de los diferentes tejidos"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Flexible"} text={"Se pueden obtener imágenes en diferentes planos"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Informativo"} text={"Provee  información del metabolismo y composición de los tejidos"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Adaptable"} text={"Posibilidad de hacer estudios vasculares sin aplicar material de contraste"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Sin efectos secundarios"} text={"El material de contraste utilizado (gadolinio) no produce efectos adversos de consideración"}></Benefit>
            <Benefit height={100} img_src={radiation} title={"Completo"} text={"Permite realizar imágenes de cuerpo entero"}></Benefit>

        </div>
    </div>
  )
}

export default BenefitsGrid