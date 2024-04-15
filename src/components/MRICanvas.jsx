import React from 'react'

import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import { AltCTAStyle, CTAStyle } from "../styles";
import { studies_link } from "../constants";

gsap.registerPlugin(ScrollTrigger);

let images = [];

const frameCount = 70;
const brain = {
    frame: 0
};

const MRICanvas = () => {

  const container = useRef(null);
  const canvas_ref = useRef(null);

  useGSAP(() => {

    const canvas = canvas_ref.current;
    const context = canvas.getContext("2d");
    /*const image = new Image();
    image.onload = () => {
      context.drawImage(image, 0, 0);
    }
    image.src = "/LateralRM/jpeg/60.jpeg";*/

    function render() { 
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[brain.frame], 0, 0);
    }

    for (let i = 0; i < frameCount; i++){
      const img = new Image();
      img.src = new URL(`../assets/LateralRM/jpeg/${i}.jpeg`, import.meta.url).href; // works if we are not using SSR
      images.push(img);
    }

    // images[0].onload = render; // doesn't really do anything tbh
    images[images.length - 1].onload = function(){
      canvas.width = images[brain.frame].width;
      canvas.height = images[brain.frame].height;
      context.drawImage(images[images.length - 1], 0, 0);
    }
    
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      gsap.to(brain, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        repeat: -1,
        duration: 2,
        onUpdate: render,
        runBackwards: true,
        yoyo: true,
      }, 
      )
    })

    mm.add("(min-width: 1024px)", () => 
    gsap.to(brain, {
      startAt: {frame: frameCount - 1},
      frame: 0,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
          trigger: ".canvas-container",
          start: "center center",
          pin: true, // Fun fact: gsap pins the container by wrapping the container in a div and augmenting the padding
          end: "+=500", // control duration with this
          scrub: 0.5
      },
      onUpdate: render}))
  });

    {/*<div className='flex flex-col lg:max-w-[700px] gap-4'>
        <h2 className='font-jakarta text-center xl:text-left font-bold text-white text-[2.5em] sm:text-[3em] xl:text-[3.5em]'>Tecnología de última generación</h2>
        <p className='font-jakarta text-center xl:text-justify text-white text-[18px] xl:w-[80%]'>Contamos con equipos de resonancia magnética que producen la mejor calidad y resolución de imagen, así como con un servidor de imágenes de Apple accesible para el cliente que permite la visualización inmediata de los exámenes</p>
    </div>*/}

  //lg:bg-gradient-to-br lg:from-[#0E228C] lg:to-[#06104D]

  return (
    <div ref={container} className='p-16 pt-36 pb-36 xl:pt-56 xl:pb-[10.3rem] w-full canvas-container flex justify-center items-center flex-col-reverse bg-gradient-to-t bg-[#0A1324] xl:flex-row'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h1 className='text-center xl:w-fit xl:text-left  text-white font-regular text-[3em] xl:text-[3.8em] 2xl:text-[4.5em] font-montserrat'>A su servicio <br/> <span className='font-bold text-[##2549c4]'>desde 1994</span></h1>
          <p className="font-jakarta space-y-2  text-white text-[1em] lg:text-[1.3em] xl:text-[18px] 2xl:text-[20px] mt-8 xl:w-[80%] text-justify">
            <li>Equipos Philips 1.5 Tesla que producen la mejor calidad y resolución de imagen</li>
            <li>Personal médico y técnico con experiencia de más de 30 años</li>
            <li>Servicio ininterrumpido con 4 equipos instalados y 3 clínicas a su servicio</li>
            <li>Servidor de imágenes Apple que permite la inmediata visualización de exámenes</li>
            <li>Somos la empresa preferida por la mayoría del cuerpo médico nacional y ofrecemos garantía de servicio</li>
          </p>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-center xl:justify-normal gap-8 mt-12">
            <a href="#trust" className={`w-[200px] sm:w-[240px] text-center font-jakarta font-bold rounded-lg pt-4 pb-4 pr-4 pl-4 text-[1em] xl:pt-4 xl:pb-4 xl:pr-6 xl:pl-6 xl:text-[1.2em] transition-all border duration-500 hover:bg-[#e5e5e5] text-white m-auto sm:mb-0 sm:ml-0 sm:mr-0`}>
                Acerca de nosotros
            </a>
        </div>
      </div>
      <canvas className="w-[300px] sm:w-[300px] lg:w-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] xl:m-0 mt-12 mb-12 " ref={canvas_ref}></canvas>
    </div>
  )
}

export default MRICanvas