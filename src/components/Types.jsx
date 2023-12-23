import React from 'react'
import { MRIScan } from '../assets'
import MRI from './MRI'

let services = ["Resonancia Cerebral", "Resonancia Músculo-Esquelética", "Resonancia de Tórax", "Resonancia de Mamas", "Resonancia de Abdomen y Pelvis"]

const Types = () =>(

    <div className='flex flex-row ml-[16.8em] gap-16'>
        <div className='w-[610px]'>
            <h2 className='font-poppins font-bold text-[4em]'>Tipos de <br />resonancias magnéticas</h2>
            <p className='font-poppins justify-text text-[1.2em]'>En Centros de Resonancias Magnéticas, ofrecemos los siguientes servicios:</p>
            <ul className='list-disc list-inside ml-4'>
                {services.map((service, index) => (
                    <li key={index} className={`text-black font-poppins text-[1.1em]`}>{service}</li>
                ))}
            </ul>
        </div>
        <div>
            <img className='w-[700px]' src={MRIScan} alt="" />
        </div>
    </div>    
    
)

export default Types