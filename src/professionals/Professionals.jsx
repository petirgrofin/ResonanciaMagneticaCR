import React, {useState} from 'react'
import { Navbar } from '../components'
import { Footer } from '../components'
import { medics, technicians, nurses } from './professionalInfo'
import { close } from '../assets'

const ProfessionalInformation = ({employeeObject, setSelectedProfessional}) => {
    return (
        <div onClick={(e) => {e.stopPropagation();}} className='rounded-md gap-4 flex flex-col justify-center items-center font-jakarta h-[60%] w-[55%] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white'>
            <p className="text-[2em] font-semibold absolute top-16">{employeeObject.name}</p>
            <button onClick={() => {setSelectedProfessional(null);}} className='font-jakarta absolute top-8 right-8 font-bold'><img src={close} className='w-[24px]' alt="" /></button>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-col gap-8 justify-center items-center min-w-[300px]'>
                    <img className='' src={employeeObject.imgSrc}></img>
                </div>
                <p className='text-[1.1em] text-justify mr-24 whitespace-pre-line'>{employeeObject.description}</p>
            </div>
        </div>
    )
}

const ProfessionalCard = ({employeeObject, setSelectedProfessional}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onClick={(e) => {
            setSelectedProfessional(employeeObject); 
            e.stopPropagation();
            console.log(document.getElementsByTagName("body"))
            }} onMouseLeave={() => {setIsHovered(false)}} onMouseEnter={() => {setIsHovered(true)}} className={`transition-all duration-300 flex flex-col gap-4 ${isHovered ? "brightness-[0.6]" : "brightness-100"}`}>
            <img className='rounded-md h-[250px] w-[200px]' src={employeeObject.imgSrc} alt="" />
            <p className='font-jakarta text-center'>{employeeObject.name}</p>
        </div>
    )
}

const ProfessionalCardContainer = ({title, children}) => {
    return (
        <div className='mt-12 flex flex-col'>
            <h2 className='text-center text-[1.5em] font-semibold'>{title}</h2>
            <div className='mt-8 flex flex-row flex-wrap gap-4 justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

const Professionals = () => {

    const [selectedProfessional, setSelectedProfessional] = useState(null);

  return (
    <div onClick={() => {setSelectedProfessional(null)}} className='min-h-[100vh]'>

        <div className={`transition-all min-h-[100vh] bg-[#fafafa] ${selectedProfessional ? "brightness-50" : "brightness-100"}`}>
            <Navbar background_visible_always={true}></Navbar>
            <h1 className='pt-48 text-center font-jakarta text-[2em] sm:text-[3.5em] m-auto font-semibold'>Nuestros profesionales</h1>
            
            <ProfessionalCardContainer title={"Médicos"}>
                {medics.map((employee) => {
                    return <ProfessionalCard setSelectedProfessional={setSelectedProfessional} employeeObject={employee}></ProfessionalCard>
                })}
            </ProfessionalCardContainer>

            <ProfessionalCardContainer title={"Tecnólogos"}>
                {technicians.map((employee) => {
                    return <ProfessionalCard setSelectedProfessional={setSelectedProfessional} employeeObject={employee}></ProfessionalCard>
                })}
            </ProfessionalCardContainer>

            <ProfessionalCardContainer title={"Enfermeros"}>
                {nurses.map((employee) => {
                    return <ProfessionalCard setSelectedProfessional={setSelectedProfessional} employeeObject={employee}></ProfessionalCard>
                })}
            </ProfessionalCardContainer>
                        
            <div className='mt-36'>
                <Footer></Footer>
            </div>
        </div>

        {selectedProfessional != null && <ProfessionalInformation employeeObject={selectedProfessional}
        setSelectedProfessional={setSelectedProfessional}></ProfessionalInformation>}
    </div>
  )
}

export default Professionals