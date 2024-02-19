import React, { useRef } from 'react';
import {useState, useEffect} from 'react';
import {Hero, Navbar, MRI, Contact, Footer, Trust, MRIExplanation, Data, Benefits, FAQ, MRICanvas, MRITypes, BenefitsGrid, Form} from "./components";

const App = () => {

    let is_navbar_background_always_visible = false
    const [scrolled, setScrolled] = useState(false);

    const updateNavbarBackground = () => {
        if (window !== undefined){
            let windowHeight = window.scrollY;
            if (windowHeight > 600 && windowHeight || is_navbar_background_always_visible){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateNavbarBackground);
        return () => {
            window.removeEventListener('scroll', updateNavbarBackground);
        }
    }, []);
    
    return (
        <div className='w-full bg-[#F7F7F7]'>

            <div className="w-full">
                <Navbar scrolled={scrolled}></Navbar>
            </div>
            
            <section id='hero-section'>
                <Hero></Hero>
            </section>

            <section id='trust' className='mt-24'>
                <Trust></Trust>
            </section>

            <section className='mt-24'>
                <Data></Data>
            </section>

            <section className='mt-36'>
                <MRIExplanation></MRIExplanation>
            </section>

            <section className='mt-36'>
                <BenefitsGrid></BenefitsGrid>
            </section>

            <section className='mt-36'>
                <MRICanvas></MRICanvas>
            </section>

            {/*<div className='aspect-[960/100] w-full bg-no-repeat bg-center bg-cover bg-[url("src/assets/wave-haikei.svg")]'></div>*/}

            <section id='services' className=''>
                <MRITypes></MRITypes>
            </section>

            <section id='contact' className='mt-36'>
                <Contact></Contact>
            </section>

            <section id='faq' className='mt-36'>
                <FAQ></FAQ>
            </section>

            <section>
                <Form></Form>
            </section>

            <section className='mt-36'>
                <Footer></Footer>
            </section>

        </div>
    )
}


export default App