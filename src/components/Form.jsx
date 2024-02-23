import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import Footer from './Footer';
import Navbar from './Navbar';
import {resonancia_imagen} from '../assets';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_boqjv06', 'template_3184d9e', form.current, {
          publicKey: 'D-2WM6yi9tCA057lP',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };  

    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar background_visible_always={true}></Navbar>
            <div className='pt-64 pb-32 w-[50%] m-auto flex flex-col gap-6 rounded-2xl'>
              <h2 className='font-poppins text-[3.5em] m-auto font-semibold'>Contáctenos</h2>
                <form className='text-[18px] font-poppins flex flex-col w-[50%] gap-6 m-auto' ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number"/>
                    <label>Nombre</label>
                    <input type="text" name="user_name"/>
                    <label>Correo Electrónico</label>
                    <input type="email" name="user_email"/>
                    <label>Mensaje</label>
                    <textarea name="message"></textarea>
                    <div className="g-recaptcha" data-sitekey="6Ldf3XwpAAAAAGxuUWg_lnR3tpa_VU9yBDaIY9pK"></div>
                    <br />
                    <input className='active:bg-[#324a8b] hover:bg-[#4263bd] bg-[#527bec] text-white w-[100%] text-[16px] m-auto p-4 rounded-2xl' type="submit" value="Enviar"/>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Form