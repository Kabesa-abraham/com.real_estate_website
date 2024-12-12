import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='flex flex-col gap-4 items-center text-white'>
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold text-center" >{title}</h1>
        <p className=" text-xs lg:text-sm text-center font-semibold bg-blue-700 p-[2px] rounded-sm" >{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
