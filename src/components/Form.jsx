import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import Footer from './Footer';
import Navbar from './Navbar';

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
        <div className='bg-[#FAFAFA]'>
            <Navbar background_visible_always={true}></Navbar>
            <div className='ml-8 mr-8 sm:m-auto pt-[13rem] pb-32 xl:w-[50%] flex flex-col gap-6 items-center justify-center'>
              <h2 className='font-jakarta text-[2em] sm:text-[3.5em] m-auto font-semibold'>Contáctenos</h2>
                <form className='text-[1em] sm:text-[18px] font-jakarta flex flex-col xl:w-[50%] gap-6' ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number"/>
                    <label className='text-center sm:text-left'>Nombre completo</label>
                    <input className='p-4  rounded-2xl bg-[#ffffff]' type="text" name="user_name"/>
                    <label className='text-center sm:text-left'>Correo electrónico</label>
                    <input className='p-4 rounded-2xl' type="email" name="user_email"/>
                    <label className='text-center sm:text-left' >Razón de consulta</label>
                    <textarea className='p-4 rounded-2xl' name="message"></textarea>
                    <div className="g-recaptcha" data-sitekey="6Ldf3XwpAAAAAGxuUWg_lnR3tpa_VU9yBDaIY9pK"></div>
                    <input className='active:bg-[#324a8b] hover:bg-[#4263bd] font-bold transition-all duration-200 bg-[#527bec] text-white w-[100%] text-[16px] m-auto p-4 rounded-2xl' type="submit" value="Enviar"/>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Form