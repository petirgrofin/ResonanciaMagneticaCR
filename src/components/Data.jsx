import React from 'react'

const DataPiece = ({number, info}) =>(

    <div className='flex flex-col'>
        <p className='font-semibold text-[1.85em] xl:text-[3em] 2xl:text-[3.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#5266cb] to-[#0a1482] to-[80%] text-center'>{number}</p>
        <p className='xl:text-[18px] 2xl:text-[24px] text-center'>{info}</p>
    </div>

)

const Data = () => (
    
    <div className='bg-[#f4f4f4] w-full m-auto p-16 pb-16 flex flex-col gap-8'>
        <p className='font-poppins text-[1.5em] text-center font-semibold '>Obtenga la asesoría profesional que necesita</p>
        <div className='flex flex-row gap-24 items-center justify-center'>
            <DataPiece number={"1994"} info={"Año de\nestablecimiento"}></DataPiece>
            <DataPiece number={"12"} info={"Médicos\nprofesionales"}></DataPiece>
            <DataPiece number={"300 000+"} info={"Resonancias\nrealizadas"}></DataPiece>
        </div>
    </div>
)

export default Data