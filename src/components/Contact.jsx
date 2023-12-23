import React from 'react'

const ContactCard = ({title, iframe_element, phone_number, schedule, whatsapp_number}) => (

    <div className='flex flex-col justify-center items-center gap-8'>
        <p className='font-poppins text-[1.5em]'>{title}</p>
        {iframe_element}
        <ul className='font-poppins text-[1.1em] space-y-2'>
            <li>
                {phone_number}
            </li>
            <li>
                {schedule}
            </li>
            <li>
               {`WhatsApp: ${whatsapp_number}`}
            </li>
        </ul>
    </div>

)

const Contact = () => (

    <div className='flex flex-col justify-center items-center gap-4'>
        <p className='font-poppins text-[1.2em] uppercase text-[#527bec] font-bold'>Contáctenos</p>
        <h2 className='font-poppins text-[3.5em] font-bold text-center'>Nuestras sedes</h2>
        <div className='flex flex-row gap-24'>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.6839286731215!2d-84.06012908989737!3d9.949072777182517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e47d57bfdbd5%3A0xbd8efb4b06725e69!2sHospital%20La%20Cat%C3%B3lica!5e0!3m2!1ses-419!2scr!4v1703279301170!5m2!1ses-419!2scr" width="315" height="250"></iframe>} title={"Hospital La Católica"} phone_number={"(506) 2283-6783"} schedule={"Lunes a viernes: 7:00 a.m. - 8:00 p.m."} whatsapp_number={"(506) 8470-5043"}></ContactCard>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.4533807741029!2d-84.11289493037657!3d9.94946802032003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb5aa112d97d%3A0x957b526136c244a1!2sCENTROS%20DE%20RESONANCIA%20MAGNETICA%3A%20Sucursales%20en%20La%20Uruca%2C%20Hospital%20La%20Cat%C3%B3lica%20y%20Ciudad%20Quesada.!5e0!3m2!1ses-419!2scr!4v1703280099087!5m2!1ses-419!2scr" width="315" height="250" ></iframe>} title={"Clínica de La Uruca"} phone_number={"(506) 2291-3128"} schedule={"Lunes a viernes: 7:00 a.m. - 8:00 p.m."} whatsapp_number={"(506) 8470-4844"}></ContactCard>
            <ContactCard iframe_element={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.6839286731215!2d-84.06012908989737!3d9.949072777182517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e47d57bfdbd5%3A0xbd8efb4b06725e69!2sHospital%20La%20Cat%C3%B3lica!5e0!3m2!1ses-419!2scr!4v1703279301170!5m2!1ses-419!2scr" width="315" height="250"></iframe>} title={"Clínica de San Carlos"} phone_number={"(506) 2462-5757"} schedule={"Lunes a viernes: 7:00 a.m. - 5:00 p.m."} whatsapp_number={"(506) 8484-0165"}></ContactCard>
        </div>
    </div>
)

export default Contact