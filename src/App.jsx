import React from 'react';
import {Hero, Navbar, MRI, Contact, Footer, Trust, MRIExplanation, Data, Benefits, FAQ} from "./components";

const App = () => (

    <div className='w-full bg-[#f6f6f6]'>

        <div className="w-full">
            <Navbar></Navbar>
        </div>
        
        <section id='hero-section'>
            <Hero></Hero>
        </section>

        <section id='trust' className='mt-24'>
            <Trust></Trust>
        </section>

        <section className='mt-36'>
            <Data></Data>
        </section>

        <section className='mt-36'>
            <MRIExplanation></MRIExplanation>
        </section>

        <section className='mt-36'>
            <Benefits></Benefits>
        </section>

        {/*<div className='aspect-[960/100] w-full bg-no-repeat bg-center bg-cover bg-[url("src/assets/wave-haikei.svg")]'></div>*/}

        <section id='services' className='mt-36'>
            <MRI></MRI>
        </section>

        <section id='contact' className='mt-36'>
            <Contact></Contact>
        </section>

        <section id='faq' className='mt-36'>
            <FAQ></FAQ>
        </section>

        <section className='mt-36'>
            <Footer></Footer>
        </section>

    </div>

)


export default App