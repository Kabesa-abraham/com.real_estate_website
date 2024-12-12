import React from "react"
import {list} from '../../Assets/Data.js'
import { FaHeart } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"

const RecentCard = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='max-w-96 flex flex-col gap-5 shadow-lg' key={index}>
              <div className='overflow-hidden'>
                <img src={cover} alt='' className="w-96 h-60 z-0 hover:scale-125 duration-150" />
              </div>

              <div className='flex flex-col px-7'>
                <div className='flex justify-between items-center mb-2'>
                  <span className="p-1 px-3 rounded-lg" style={{ background: category === "A vendre" ? "#25b5791a" : "#ff98001a", color: category === "A vendre" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <FaHeart className="text-[#3333335d] text-lg" />
                </div>
                <h4 className="font-bold" >{name}</h4>
                <p className="flex gap-2 items-center" >
                  <HiLocationMarker/> <span className="text-sm text-gray-500" >{location}</span>
                </p>
              </div>

              <div className='flex justify-between px-7 pb-4'>
                <div>
                  <button 
                    className='text-sm font-semibold text-white px-3 py-1 rounded-full bg-pink-500'
                  >{price}</button> <label htmlFor=''> /sqft</label>
                </div>
                <span className="text-sm font-bold" >{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
