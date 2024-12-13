import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
    <div className="min-h-[40vh] overflow-hidden bg-black " >
      <div className=' relative flex flex-col'>
        <div className='absolute top-[45%] left-[3%] sm:left-[7%] lg:left-[13.9%] text-white text-xl sm:text-2xl md:text-3xl font-semibold'>
          <span className="text-sm font-light" >{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt='' className="h-[40vh] w-full object-cover" />
      </div>
    </div>
    </>
  )
}

export default Back
