import React from "react"
import { footer } from "../Assets/Data.js"
import logoSite from '/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col mt-8" >
          <section className='w-full bg-blue-500'>
            <div className='max-w-7xl mx-auto px-2 md:px-10 '>
              <div className='flex justify-between items-center text-white py-7'>
                <div className='flex flex-col gap-2 md:gap-4 text-xs lg:text-sm'>
                  <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold" >Avez-vous des Questions ?</h1>
                  <p>Nous vous aiderons à vous developper dans votre Carrière.</p>
                </div>
                <button className='px-2 md:px-4 lg:px-8 py-3 lg:py-4 bg-white text-blue-500 rounded-full text-xs font-bold 
                                   hover:ring-4 ring-blue-400 duration-150'>Nous Contactez</button>
              </div>
            </div>
          </section>

          <footer className='w-full bg-[#132844]' >
            <div className='max-w-7xl w-full mx-auto px-3 md:px-10 py-10 flex flex-col lg:flex-row justify-between gap-8 text-white'>
              <div className='w-full'>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 items-center'>
                    <img src={logoSite} alt="logo de l'entreprise" className='w-12 h-12' />
                    <h2 className='font-bold text-xl text-blue-400' >Homming</h2>
                  </div>

                  <h2 className="font-semibold text-lg" >Vous avez besoin d'aide ?</h2>
                  <p className="text-gray-500" > Recevez des mise à jours, hot deals, tutoriels, discounts sent straignt in your inbox every month</p>

                  <div className='flex bg-white rounded-md'>
                    <input type='text' placeholder='Email Address' className="w-full text-black bg-transparent border-none outline-none py-2 md:py-3 pl-5 text-sm md:text-lg " />
                    <button className="px-5 lg:px-10 bg-blue-600 rounded-r-md hover:ring-4 ring-blue-400 duration-150 text-xs md:text-sm font-semibold" >S'inscrire</button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-wrap justify-between gap-10 " >
                {footer.map((val,i) => (
                  <div className='flex flex-col gap-6' key={i} >
                    <h3 className="text-lg font-semibold" >{val.title}</h3>
                    <ul className="flex flex-col gap-5 text-gray-500 text-sm" >
                      {val.text.map((items,i) => (
                        <Link to={items.link} key={i} ><li> {items.list} </li></Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
            <div className=' text-xs lg:text-sm text-center text-gray-400 my-3'>
              <span>© 2024 Homming. Designé Par KabesaYebula.</span>
            </div>
          </footer>
          
      </div>
    </>
  )
}

export default Footer
