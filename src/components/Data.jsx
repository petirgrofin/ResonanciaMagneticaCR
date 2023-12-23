import React from 'react'

const DataPiece = ({number, info}) =>(

    <div className='flex flex-col'>
        <p className='font-bold text-[4em] text-white text-center'>{number}</p>
        <p className='text-white text-[2em] text-center'>{info}</p>
    </div>

)

const Data = () => (
    <div className='bg-gradient-to-r from-[#0b0e29] to-[#182a79] to-80% w-full m-auto h-[350px] flex flex-row gap-24 items-center justify-center'>
        <DataPiece number={"1995"} info={"Año de establecimiento"}></DataPiece>
        <DataPiece number={"400 000+"} info={"Clientes satisfechos"}></DataPiece>
        <DataPiece number={"12"} info={"Médicos profesionales"}></DataPiece>
        <DataPiece number={"800 000+"} info={"Resonancias realizadas"}></DataPiece>
    </div>
)

export default Data