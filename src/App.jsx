import React from 'react';
import {Hero, Navbar, MRI, Contact, Footer, Trust, MRIExplanation, Data, Benefits} from "./components";
import { SectionHR } from './styles';

const handleScroll = (event) => {

    if (event.currentTarget.scrollY > 300){
        document.getElementById("navbar").className = document.getElementById("navbar").className.replace("absolute", "fixed")
        document.getElementById("navbar").classList.add("bg-[#f2f2f0]")
        document.getElementById("navbar").classList.add("transition-all")
        let links = Array.from(document.getElementsByClassName("navbar-links"))
        for (let i = 0; i < links.length; i++){
            if (links[i].classList.contains("studies-link"))
                continue
            links[i].className = links[i].className.replace("text-white", "text-black")
        }
    }
    else{
        document.getElementById("navbar").className = document.getElementById("navbar").className.replace("fixed", "absolute")
        document.getElementById("navbar").classList.remove("bg-[#f2f2f0]")
        document.getElementById("navbar").classList.remove("transition-all")
        let links = Array.from(document.getElementsByClassName("navbar-links"))
        for (let i = 0; i < links.length; i++){
            if (links[i].classList.contains("studies-link"))
                continue
            links[i].className = links[i].className.replace("text-black", "text-white")
        }
    }
}

window.addEventListener("scroll", handleScroll)

const App = () => (

    <div className='w-full bg-[#f2f2f2]'>

        <div className="w-full">
            <Navbar></Navbar>
        </div>
        
        <section id='hero-section'>
            <Hero></Hero>
        </section>

        <section className='mt-24'>
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

        <section className='mt-36'>
            <MRI></MRI>
        </section>

        <section className='mt-36'>
            <Contact></Contact>
        </section>

        <section className='mt-36'>
            <Footer></Footer>
        </section>

    </div>

)


export default App