import React from 'react'

import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger);

let images = [];

const frameCount = 100;

for (let i = 0; i < frameCount; i++){
    const img = new Image();
    img.src = `/src/assets/LateralRM/jpeg/${i}.jpeg`
    images.push(img)
}

const brain = {
    frame: 0
};

const MRICanvas = () => {

  const container = useRef(null);
  const canvas_ref = useRef(null);

  useGSAP(() => {

    images[0].onload = render;
    const canvas = canvas_ref.current
    const context = canvas.getContext("2d");

    canvas.width = images[brain.frame].width
    canvas.height = images[brain.frame].height

    function render() { 
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[brain.frame], 0, 0);
    }  

    gsap.to(brain, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
          trigger: ".canvas-container",
          start: "center center",
          pin: true, // Fun fact: gsap pins the container by wrapping the container in a div and augmenting the padding
          end: "+=900", // control duration with this
          scrub: 0.5
      },
      onUpdate: render})
    }
  );

  return (
    <div ref={container} className='h-[1000px] canvas-container flex justify-center items-center bg-[#03001F] to-[55%] gap-16'>
      <div className='flex flex-col max-w-[700px] gap-4'>
        <h2 className='font-poppins font-bold text-white text-[3.5em]'>Tecnología de última generación</h2>
        <p className='font-poppins text-white text-[18px] w-[90%]'>Contamos con equipos de resonancia magnética que producen la mejor calidad y resolución de imagen, así como con un servidor de imágenes de Apple accesible para el cliente que permite la visualización inmediata de los examenes</p>
      </div>
      <canvas className="" ref={canvas_ref}></canvas>
    </div>
  )
}

export default MRICanvas