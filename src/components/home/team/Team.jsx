import React from "react"
import { team } from "../../Assets/Data.js"
import "./team.css"
import { FaCheckCircle ,FaFacebook,FaLinkedin,FaTwitter,FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiLocationMarker } from "react-icons/hi";

const Team = () => {
  return (
    <>
      <section className='w-full bg-[#cbe2f723] py-10'>
        <div className='max-w-7xl mx-auto px-3 lg:px-10 flex flex-col items-center gap-7'>
          <div className="flex flex-col items-center gap-4" >
            <h1 className="text-3xl md:text-4xl font-bold text-center" >Nos Agents</h1>
            <p className="text-sm text-gray- text-center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center'>
            {team.map((val, index) => (
              <div className='w-full flex flex-col items-start gap-5 bg-white p-3 xl:p-5 shadow-lg overflow-hidden rounded-xl' key={index}>
                <button className='px-7 py-3 text-sm text-white font-semibold bg-pink-500 rounded-full'>{val.list} Listings</button>

                <div className='w-full flex flex-col gap-4 items-center justify-center relative'>
                  <div className='flex items-center p-3 border border-gray-200 rounded-full'>
                    <img src={val.cover} alt='' className="w-28 h-28 object-cover rounded-full" />
                    <FaCheckCircle className="absolute text-lg text-blue-600 left-[11em] lg:left-[10em] xl:left-[12.4em] " />
                  </div>

                  <div className="flex items-center gap-2" >
                    <HiLocationMarker className="text-lg" />
                    <label className="text-gray-500 text-sm" >{val.address}</label>
                  </div>

                  <h4 className="font-bold" >{val.name}</h4>

                  <ul className="flex gap-4 text-lg items-center socialContainer" >
                    <li><FaFacebook/></li>
                    <li><FaLinkedin/></li>
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                  </ul>

                  <div className='flex w-full justify-between gap-20 lg:gap-16 xl:gap-20 items-center px-5 lg:px-2 xl:px-5'>
                    <button className="flex items-center gap-2 lg:gap-3 bg-blue-600 px-3 py-2 xl:px-5 xl:py-4 text-white font-semibold text-sm rounded-lg" >
                      <FaEnvelope/>
                      Message
                    </button>
                    <button className='px-7 py-3 xl:px-10 xl:py-5 bg-slate-800 text-sm text-white rounded-lg'>
                      <FaPhone/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
