import React from "react"
import { location } from "../../Assets/Data.js"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='w-full py-10 locationContainer'>
        <div className='max-w-7xl px-4 md:px-10 mx-auto flex flex-col items-center gap-10 '>
          <div className="flex flex-col items-center gap-4" >
            <h1 className="text-3xl md:text-4xl font-bold text-center" >Explorer grâce à la Localisation</h1>
            <p className="text-sm text-gray-500" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 infoLocationContainer'>
            {location.map((item, index) => (
              <div className='flex relative overflow-hidden rounded-lg infoBox' key={index}>
                <img src={item.cover} alt='' className="w-96 h-60 z-0" />

                <div className='shadow-lg bg-[#02020246] text-sm infoTextLocation'>
                  <h5 className="text-lg font-semibold" >{item.name}</h5>
                  <p className="flex gap-4 items-center text-gray-200" >
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
