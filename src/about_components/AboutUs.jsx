import React from 'react'

const AboutUs = () => (

    <div className="w-full h-[900px] bg-[url('src/assets/resonador_about.jpg')] bg-no-repeat bg-fixed bg-center bg-cover ">
        <div className="w-full h-full relative bg-black/[0.7] hover:bg-black/[0.6] transition-all duration-1000"></div>
        <div className='flex items-center justify-center gap-6 flex-col w-[50%] absolute top-[38%] left-[26%] text-white text-center'>
            <h1 className='text-[4em] font-montserrat font-bold'>Acerca de nosotros</h1>
            <p className='font-poppins text-[1.3em] max-w-[1000px] font-light'>Somos un equipo de profesionales altamente capacitados y experimentados, dedicados a ofrecer servicios de resonancia magnética a precios accesibles, para el beneficio de la salud de nuestros clientes.</p>
        </div>
    </div>

)

export default AboutUs