import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='w-full bg-[#cbe2f723] '>
        <div className='max-w-7xl px-3 md:px-10 mx-auto flex flex-col gap-9 pt-12 md:pt-24 pb-10 pd:mb-20'>
          <div className="flex flex-col items-center gap-4" >
            <h1 className="text-3xl md:text-4xl font-bold text-center" >Caractéristiques des Différents type de Propriétés</h1>
            <p className="text-sm text-gray-500" >Trouver Toute type de Propriéte.</p>
          </div>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
