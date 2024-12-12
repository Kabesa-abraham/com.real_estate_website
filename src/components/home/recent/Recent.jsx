import React from "react"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='w-full py-10'>
        <div className='max-w-7xl mx-auto px-3 md:px-10 flex flex-col justify-center items-center gap-5'>
          <div className="flex flex-col items-center gap-4" >
            <h1 className="text-3xl md:text-4xl font-bold text-center" >Liste des Propriétés Récentes</h1>
            <p className="text-sm text-center max-w-3xl text-gray-500" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
