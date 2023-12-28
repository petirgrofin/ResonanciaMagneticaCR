import React from 'react'
import { Navbar, Footer} from './components'
import { AboutUs, Mission, Vision} from './about_components'

const AboutInfo = () => (

    <div className='w-full bg-[#f6f6f6]'>

        <div className="w-full">
            <Navbar></Navbar>
        </div>

        <section>
          <AboutUs></AboutUs>
        </section>

        <section className='mt-36'>
          <Mission></Mission>
        </section>

        <section className='mt-36'>
          <Vision></Vision>
        </section>

        {/*<div className='aspect-[900/100] w-full bg-no-repeat bg-center bg-cover bg-[url("src/assets/wave-haikei-about.svg")]'></div>*/}

        <section className='mt-36'>
          <Footer></Footer>
        </section>

         {/*<div className='aspect-[960/100] w-full bg-no-repeat bg-center bg-cover bg-[url("src/assets/wave-haikei.svg")]'></div>*/}

    </div>

)


export default AboutInfo