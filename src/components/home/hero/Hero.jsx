import React from 'react';
import './hero.css';
import Heading from '../../common/Heading';
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <section className='hero'>
      <div className='max-w-7xl mx-auto flex flex-col gap-2 items-center px-10 pt-[40%] md:pt-[20%]'>
        <Heading title='Rechercher Votre Prochaine Demeure' subtitle='Trouvez des nouvelles propriétés aux traits spécifiques localisés dans votre ville.' />

        <form className='w-full mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center py-4 px-5 md:px-10 bg-white rounded-lg text-sm '>
          <div className='box'>
            <span>Ville/Avenue</span>
            <input type='text' placeholder='Location' />
          </div>
          <div className='box'>
            <span>Type de propriété</span>
            <input type='text' placeholder='Property Type' />
          </div>
          <div className='box'>
            <span>Ecart des prix</span>
            <input type='text' placeholder='Price Range' />
          </div>

          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-6 xl:gap-10 items-center ml-[10%]' >
            <div className=''>
              <h4 className='text-xs md:text-sm font-bold' >Filtrage Advancé</h4>
            </div>
            <button className='px-4 md:px-10 py-2 md:py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:ring-4 ring-purple-200 duration-150 '>
              <FaSearch/>
            </button>
          </div>
        </form>

      </div>
    </section>
    </>
  )
}

export default Hero
