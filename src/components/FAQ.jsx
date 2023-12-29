import React from 'react'
import { useState } from 'react';

const AccordionElement = ({question, answer}) => {

    const [toggled, setToggle] = useState(false);

    return (
        <div className='flex flex-row justify-center gap-4'>
            <p className='mt-4 font-poppins text-blue-600 text-[2em]'>{toggled ? "-" : "+"}</p>
            <button onClick={() => setToggle(!toggled)} className={`text-left w-[800px] p-6 border-[#d9d9d9] border-t ${toggled ? "space-y-4" : "hover:bg-[#fbfbfb]"}`}>
                <p className='font-poppins text-[18px] xl:text-[20px] text-black'>{question}</p>
                <p className={`text-justify whitespace-pre-wrap font-poppins text-[#3b3b3b] text-[16px] overflow-hidden max-h-0 ${toggled ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} transition-all duration-[150ms]`}>{answer}</p>
            </button>
        </div>
    )

}

const FAQ = () => {

    return (
        <div className='flex justify-center items-center flex-col gap-8'>
            <h2 className='font-poppins text-[2.5em] xl:text-[3.5em] text-center font-semibold'>Preguntas frecuentes</h2>
            <div className='flex flex-col'>
                <AccordionElement question={"¿Cómo se realiza una resonancia magnética?"} answer={"El técnico ubica al paciente en la mesa exploratoria, dependiendo el área a explorar, y mueve la mesa de manera que el área de interés se sitúe en el centro geométrico del imán. La sala de resonancia cuenta con excelente ventilación e iluminación. \n\nDurante el examen se escuchan una serie de ruidos rítmicos debidos a bobinas de gradientes que tiene el equipo. Este ruido depende de las secuencias utilizadas. El paciente debe permanecer muy quieto, ya que es cuando las imágenes se obtienen para evitar artificios y degradación en la calidad de las mismas."}></AccordionElement>
                <AccordionElement question={"¿Si soy claustrofóbico, puedo realizarme el estudio?"} answer={"Nuestros resonadores posibilitan mayor confort para pacientes claustrofóbicos gracias a que cuentan con túnel de mayor diámetro. Además, el tiempo dentro del resonador es menor, garantizando aún, una mejor calidad de imagen. Todas estas son ventajas pensadas especialmente para los pacientes claustrofóbicos."}></AccordionElement>
                <AccordionElement question={"¿La resonancia magnética requiere algún contraste?"} answer={"En algunos casos, es necesario realizar durante el examen la inyección de contraste intravenoso. Para ello se utiliza el gadolinio, que no produce reacciones alérgicas."}></AccordionElement>
                <AccordionElement question={"¿Cuánto tiempo tarda el examen?"} answer={"La duración depende de diversos factores como zonas de estudio y características técnicas del equipo. El promedio por región a estudiar es de 20 a 45 minutos."}></AccordionElement>
                <AccordionElement question={"¿El estudio es molesto o doloroso?"} answer={"No es un procedimiento doloroso. Es ruidoso pero se proveen tapones para disminuir la molestia."}></AccordionElement>
                <AccordionElement question={"¿El estudio requiere alguna preparación?"} answer={
                <ul className='list-inside space-y-2'>
                    <li><span className='font-semibold'>Resonancia abdominal o pélvica</span>: ayuno de sólidos y líquidos de 8 horas antes de la prueba.</li>
                    <li><span className='font-semibold'>Exámenes con medio de contraste</span>: los adultos mayores de 65 años o personas con problemas en los riñones deben traer un examen de creatinina.</li>
                    <li><span className='font-semibold'>Otras áreas</span>: se puede comer o beber normalmente.</li>
                    <li>Si se está tomando algún tipo de medicación <span className='font-bold'>no interrumpirla sin recomendación médica</span>.</li>
                </ul>
                }></AccordionElement>
                <AccordionElement question={"¿Qué medio de contraste se utiliza?"} answer={"El contraste que se utiliza es el gadolinio (intravenoso) que se elimina por orina. No se realiza una prueba de alergia al gadolinio."}></AccordionElement>
                <AccordionElement question={"¿Puedo ingresar a la sala con objetos metálicos?"} answer={"Debe tenerse precaución con los objetos metálicos, acudir a la exploración sin ellos y si tiene algún implante metálico debe indicarlo en los formularios que se le entregan antes del examen. Los maquillajes de ojos también pueden interferir."}></AccordionElement>
                <AccordionElement question={"¿Algo podría impedir que me realice la resonancia?"} answer={"La resonancia no se puede realizar en pacientes portadores de marcapasos cardíaco, clips vasculares intracraneales, bombas de infusión de medicamentos o implantes cocleares permanentes.\n\nSi tiene implantes metálicos, válvulas, clips cerebrales, piercing, tatuajes con pintura metálica o cualquier elemento extraño, debe consultar de qué material es e informarlo al técnico o médico del servicio quién les dirá si es posible realizar el estudio. Deberá siempre comunicar al personal que realiza el examen sobre cualquier antecedente personal quirúrgico o traumático, donde exista una estructura metálica corporal."}></AccordionElement>
                <AccordionElement question={"¿Si el estudio fuera con anestesia general lo puedo realizar en cualquier sede?"} answer={"No. Se realizan únicamente en la Clínica del Hospital La Católica"}></AccordionElement>
                <AccordionElement question={"¿Es importante traer estudios anteriores?"} answer={"Sí. Es muy importante presentarse con los estudios anteriores, si los hubiere, para poder comparar imágenes."}></AccordionElement>
            </div>
                
        </div>
    )
}

export default FAQ

