import React from 'react';
import {useState, useEffect} from 'react';
import {Hero, Navbar, MRI, Contact, Footer, Trust, MRIExplanation, Data, Benefits, FAQ, MRICanvas, MRITypes, BenefitsGrid, Form, FinishingRemark, AltHeroMRI} from "./components";

const App = () => {
    
    return (
        <div className='w-full bg-[#fafafa]'>

            <div className="w-full">
                <Navbar background_visible_always={false}></Navbar>
            </div>

            <section className=''>
                <MRICanvas></MRICanvas>
            </section>

            <section id='trust' className='mt-32 lg:mt-48'>
                <Trust></Trust>
            </section>

            <section className='mt-32 lg:mt-48'>
                <Data></Data>
            </section>

            <section id='services' className='mt-32 lg:mt-48'>
                <MRITypes></MRITypes>
            </section>

            <section className='mt-32 lg:mt-48'>
                <BenefitsGrid></BenefitsGrid>
            </section>

            <section className='mt-32 lg:mt-48'>
                <MRIExplanation></MRIExplanation>
            </section>

            {/*<div className='aspect-[960/100] w-full bg-no-repeat bg-center bg-cover bg-[url("src/assets/wave-haikei.svg")]'></div>*/}

            <section id='contact' className='mt-32 lg:mt-48'>
                <Contact></Contact>
            </section>

            <section id='faq' className='mt-32 lg:mt-48'>
                <FAQ></FAQ>
            </section>

            <section id='finishing_remarks' className='mt-32 lg:mt-48'>
                <FinishingRemark></FinishingRemark>
            </section>

            <section className=''>
                <Footer></Footer>
            </section>

        </div>
    )
}


export default App