import React, { useRef, useEffect} from 'react'
import { CTAStyle, AltCTAStyle } from '../styles'
import { INS, LHS, Catolica, Redbridge, PanAmericanLife, Arquitectos, Cirujanos, Adisa, EstablishmentLabs, BlueMedical, BMI, Novartis, Stein} from '../assets'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap'

let companies = [BMI, EstablishmentLabs, INS, LHS, Catolica, Redbridge, Arquitectos, Cirujanos, Adisa, BlueMedical, Novartis, Stein]

function horizontalLoop(items, config) {

    console.log(config);
    
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
}

const Trust = () =>{

  const container = useRef();

  useGSAP(() => {
      console.log("running trust animation")
      const companiesHtml = gsap.utils.toArray(".company");
      horizontalLoop(companiesHtml, {speed: 0.1})
  }, {scope: container})

  return (
  <div className='ml-4 mr-4 xs:ml-8 xs:mr-8 flex flex-col gap-8 justify-center items-center'>
      <p className='font-poppins mb-[-10px] font-bold text-[#2D5CFD] text-center text-[1.2em] uppercase'>¿Por qué elegirnos?</p>
      <h2 className='font-semibold font-jakarta text-center ml-4 mr-4 lg:m-0 text-[2em] xl:text-[2.5em] 2xl:text-[3em]'>Consulte a su médico. Somos la empresa líder en <br className='lg:block hidden'/> resonancias magnéticas con el <span className='underline underline-offset-4 decoration-[#2D5CFD]'>mejor precio del mercado</span></h2>
      <p className='font-jakarta text-center ml-4 mr-4 lg:m-0 sm:text-[18px] xl:text-[1.3em] 2xl:text-[22px] leading-[2em]'>Nuestro personal calificado ha servido a miles de clientes de manera satisfactoria y eficiente desde <span className='font-bold'>1994</span>. <br />Conozca más acerca de nuestra práctica y personal.</p>
      <a href='about.html' className={`${AltCTAStyle} block mx-auto`}>Acerca de nosotros</a>
      <div className='flex flex-row overflow-x-hidden'>
        <div className='bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA00] w-[30px] h-[180px] absolute z-[2]'></div>
        <div ref={container} className='mt-8 flex flex-row justify-center items-center gap-16 overflow-x-hidden max-w-[300px] sm:max-w-4xl'>
          {companies.map((company, index) => <img key={index} className='company object-scale-down w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px]' src={company}></img>)}
        </div>
        <div className='bg-gradient-to-l from-[#FAFAFA] to-[#FAFAFA00] w-[30px] h-[180px] absolute right-[31em] z-[2]'></div>
      </div>
  </div>
  )

}


export default Trust