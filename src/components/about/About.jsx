import React from "react"
import Back from '../common/Back'
import img from "../Assets/salle.jpg"
import immio from "../Assets/immio.jpg"

const About = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <Back name='A propo de Nous' title='Apropo de Nous - Qui sommes-nous?' cover={img}  />

        <div className='max-w-7xl mx-auto px-3 lg:px-10 flex flex-wrap items-center gap-10'>
          <div className='flex flex-1 flex-col items-start gap-6 min-w-72'>
            <div className="flex flex-col gap-3" >
              <h1 className="text-3xl md:text-4xl font-bold" >Histoire de notre Agence</h1>
              <p className="text-sm text-gray-400" >
                Vérifier l'histoire de notre entreprise ainsi que nos mecanismes de travail.
              </p>
            </div>

            <p className="text-sm lg:text-lg font-medium" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-sm lg:text-lg font-medium " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='px-10 py-3 bg-blue-500 text-white font-semibold text-sm rounded-full hover:ring-4 ring-blue-200 hover:bg-blue-600 duration-150'>More About Us</button>
          </div>
          <div className='flex-1'>
            <img src={immio} alt='' className="min-w-60 min-h-80 max-h-96 object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
