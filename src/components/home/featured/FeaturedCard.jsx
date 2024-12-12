import React from "react"
import { featured } from "../../Assets/Data.js"

const FeaturedCard = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
        {featured.map((items, index) => (
          <div className='featurebox' key={index}>

            <div>
              <img src={items.cover} alt='' className="w-16 h-16 xl:w-20 xl:h-20" />
            </div>
            <h4 className="font-bold text-center" >{items.name}</h4>
            <p className="text-sm text-gray-500" >{items.total}</p>

          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
