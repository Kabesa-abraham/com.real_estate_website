import React from "react"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='w-full py-5'>
        <div className='max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-8'>
          <div className="flex flex-col items-center gap-4" >
            <h1 className="text-3xl md:text-4xl font-bold text-center" >Selectionner votre Packet</h1>
            <p className="text-sm text-gray- text-center" >
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
