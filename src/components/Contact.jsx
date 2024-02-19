import React from 'react'
import { AltCTAStyle } from '../styles'
import { phone_icon, time_icon, whatsapp_icon, schedule_icon, medkit} from '../assets'

const ContactCard = ({title, iframe_element, phone_number, schedule, weekend_schedule, whatsapp_number}) => (

    <div className='w-[450px] flex flex-col justify-center items-center bg-[#fbfbfb] rounded-tl-[2em] rounded-tr-[2em] rounded-bl-[1.1em] rounded-br-[1.1em]'>

        {iframe_element}

        <p className='mt-8 font-poppins font-semibold text-[1.3em] xl:text-[1.5em]'>{title}</p>
        <ul className='font-poppins space-y-2 p-8'>
            <li className='flex flex-row gap-4 items-center'>
                <img src={phone_icon} alt="" className='w-4 h-4'/>
                <p>{phone_number}</p>
            </li>
            <li className='flex flex-row gap-4 items-center'>
                <img src={time_icon} alt="" className='w-4 h-4'/>
                {schedule}
            </li>
            <li className='flex flex-row gap-4 items-center'>
                <img src={schedule_icon} alt="" className='w-4 h-4'/>
                {weekend_schedule}
            </li>
            <li className='flex flex-row gap-4 items-center'>
                <img src={whatsapp_icon} alt="" className='w-4 h-4'/>
                {`WhatsApp: ${whatsapp_number}`}
            </li>
            <li className='flex flex-row gap-4 items-center'>
                <img src={medkit} alt="" className='w-4 h-4'/>
                Personal disponible para horarios <br /> extraordinarios
            </li>
        </ul>
    </div>

)

const Contact = () => (

    <div className='flex flex-col justify-center items-center gap-4'>
        <p className='font-poppins text-[1.2em] uppercase text-[#527bec] font-bold'>¿Dónde estamos?</p>
        <h2 className='font-poppins text-[2.5em] xl:text-[3.5em] font-semibold text-center'>Nuestras sedes</h2>
        <div className='mt-8 flex flex-row gap-16 flex-wrap items-center justify-center'>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.6839286731215!2d-84.06012908989737!3d9.949072777182517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e47d57bfdbd5%3A0xbd8efb4b06725e69!2sHospital%20La%20Cat%C3%B3lica!5e0!3m2!1ses-419!2scr!4v1703279301170!5m2!1ses-419!2scr" width="315" height="250" className='w-[100%]'></iframe>} title={"Hospital La Católica"} phone_number={"(+506) 2283-6783"} schedule={"Lunes a viernes: 7:00 a.m. - 10:00 p.m."} weekend_schedule={"Sábados y domingos: 7:00 a.m. - 3:00 p.m."} whatsapp_number={"(+506) 8470-5043"}></ContactCard>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.4533807741029!2d-84.11289493037657!3d9.94946802032003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb5aa112d97d%3A0x957b526136c244a1!2sCENTROS%20DE%20RESONANCIA%20MAGNETICA%3A%20Sucursales%20en%20La%20Uruca%2C%20Hospital%20La%20Cat%C3%B3lica%20y%20Ciudad%20Quesada.!5e0!3m2!1ses-419!2scr!4v1703280099087!5m2!1ses-419!2scr" width="315" height="250" className='w-[100%]'></iframe>} title={"Clínica de La Uruca"} weekend_schedule={"Sábados y domingos: 7:00 a.m. - 3:00 p.m."} phone_number={"(+506) 2291-3128"} schedule={"Lunes a viernes: 7:00 a.m. - 10:00 p.m."} whatsapp_number={"(+506) 8470-4844"}></ContactCard>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.6839286731215!2d-84.06012908989737!3d9.949072777182517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e47d57bfdbd5%3A0xbd8efb4b06725e69!2sHospital%20La%20Cat%C3%B3lica!5e0!3m2!1ses-419!2scr!4v1703279301170!5m2!1ses-419!2scr" width="315" height="250" className='w-[100%]'></iframe>} title={"Clínica de San Carlos"} phone_number={"(+506) 2462-5757"} schedule={"Lunes a viernes: 7:00 a.m. - 4:00 p.m."} weekend_schedule={"Cerrados sábados y domingos"} whatsapp_number={"(+506) 8484-0165"}></ContactCard>
        </div>
        <button className={`${AltCTAStyle} mt-6`}>Contáctenos</button>
    </div>
)

export default Contact