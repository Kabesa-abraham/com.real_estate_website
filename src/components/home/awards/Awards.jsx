import React from "react";
import { awards } from "../../Assets/Data.js";

const Awards = () => {
  return (
    <>
      <section className='w-full bg-[#132844] py-10'>
        <div className='max-w-7xl w-full mx-auto px-3 md:px-10 flex flex-col items-center gap-6 md:gap-10'>
          <div className="flex flex-col items-center gap-4 text-white" >
            <p className="text-pink-500 text-xs font-extralight " >Nos prix</p>
            <h1 className="text-xl md:text-2xl font-light text-center" >Plus de 2,12,000+ des Utilisateurs sont avec nous en étant heureux car ils aiment nos Services</h1>
            <p className="text-sm text-gray-400" >Trouver Toute type de Propriéte.</p>
          </div>

          <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center'>
            {awards.map((val, index) => (
              <div className='flex flex-col gap-3 items-center justify-center ' key={index}>
                <div className='w-20 h-20 bg-[#ffffff1c] text-3xl text-white flex flex-col justify-center items-center 
                                rounded-bl-[35px] rounded-tr-[35px] hover:scale-125 duration-150 '>
                  <span>{<val.icon/>}</span>
                </div>
                <h1 className="text-white text-3xl font-extrabold" >{val.num}</h1>
                <p className="text-gray-400 font-light text-center" >{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
