import React, {useState} from 'react'
import { MRIProcedure, MRI, resonator3} from '../assets'
import { AltCTAStyle } from '../styles'

const BenefitElement = ({title, text}) => {

    const [toggled, setToggle] = useState(false);

    return (
        <div className='flex flex-row justify-center gap-4'>
            <p className='mt-4 font-poppins text-blue-600 text-[2em]'>{toggled ? "-" : "+"}</p>
            <button onClick={() => setToggle(!toggled)} className={`text-left w-[800px] p-6 border-[#d9d9d9] border-t ${toggled ? "space-y-4" : "hover:bg-[#fbfbfb]"}`}>
                <p className='font-poppins text-[18px] text-black'>{title}</p>
                <p className={`text-justify whitespace-pre-wrap font-poppins text-[#3b3b3b] text-[16px] overflow-hidden max-h-0 ${toggled ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} transition-all duration-[150ms]`}>{text}</p>
            </button>
        </div>
    )

}

const Benefits = () => (
    <div className='flex justify-center items-center gap-[12rem]'>
        <img className='shadow-lg ml-[4em] h-[350px] w-[350px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] rounded-[6em] 2xl:rounded-[8em] object-cover' src={resonator3}/>
        <div className='w-[350px] xl:w-[500px] 2xl:w-full 2xl:max-w-2xl flex flex-col gap-4'>
            <p className='font-poppins text-[#527bec] font-bold uppercase text-[1.2em]'>Consejos para el examen</p>
            <h2 className='font-poppins text-[1.8em] xl:text-[2.5em] 2xl:text-[3em] font-semibold'>Indicaciones para el<br /> examen</h2>
            <p className='font-poppins text-black text-[16px] xl:text-[18px] leading-[1.8em] w-[95%] xl:w-[78%] text-justify'></p>
            <div className='flex flex-col'>
                <BenefitElement title={"Colaboración en estudios largos"} text={"Los estudios más largos (de 15 minutos a 1 hora) requieren de la colaboración del paciente (permanecer muy quietos, colaborar con la respiración)."}></BenefitElement>
                <BenefitElement title={"Algunos pacientes requieren sedación"} text={"Pacientes con trastornos de conciencia, movimientos involuntarios, en edad pediatrica o con problemas de claustrofobia, requerirán de sedación para poder realizar el examen."}></BenefitElement>
                <BenefitElement title={"Peligro del campo magnético"} text={"Existe un peligro inherente al campo magnético de alto poder, el cual puede atraer objetos metálicos o dañar instrumentos electrónicos. No es posible introducir pacientes con marcapasos, algunos implantes o clips cerebrales."}></BenefitElement>
                <BenefitElement title={"Personas con embarazos"} text={"Aún no se conocen los efectos adversos del campo magnético  durante el primer trimestre del embarazo, por eso  se prefiere no realizar estudios en mujeres embarazadas con menos de 12 semanas de gestación."}></BenefitElement>
                <BenefitElement title={"Personas con insuficiencia renal"} text={"A los pacientes con insuficiencia renal no se les podrá aplicar el medio de contraste."}></BenefitElement>
            </div>

        </div>
    </div>
)

export default Benefits