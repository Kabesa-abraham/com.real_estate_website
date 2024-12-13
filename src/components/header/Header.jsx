import React, { useState } from 'react'
import './header.css'
import logoSite from '/logo.png'
import {MdClose, MdLogin, MdMenu} from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import {nav} from '../Assets/Data'
import { Link } from 'react-router-dom';

const Header = () => {

    const [open ,setOpen] = useState(false)
    const handleChangeOpen = () =>{
        open===true ? setOpen(false) : setOpen(true)
    }

  return (
    <>
      <header className='w-full fixed shadow-lg bg-white z-50' >
        <div className='max-w-7xl mx-auto px-3 md:px-4 lg:px-10 py-4 flex items-center justify-between'>
          <Link to={'/'} >
            <div className='flex gap-2 items-center'>
              <img src={logoSite} alt="logo de l'entreprise" className='w-10 md:w-12 h-10 md:h-12' />
              <h2 className='font-bold text-blue-400' >Homming</h2>
            </div>
          </Link>

          <div className={`${!open&&'activer'} navbarResponsive flex md:flex-row md:static items-center gap-10 `}>
            <ul className="flex flex-col md:flex-row items-center gap-8 font-semibold relative optionContainer">
              {nav.map((list, index) => (
                <li key={index} className={`option ${index===0 &&'activeOption'} `} 
                    onClick={handleChangeOpen} 
                >
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
            <ul className='flex gap-5 text-2xl md:hidden' >
                <li><a href="#"><FaFacebook/> </a></li>
                <li><a href="#"><FaInstagram/> </a></li>
                <li><a href="#"><FaYoutube/> </a></li>
                <li><a href="#"><FaTwitterSquare/> </a></li>
            </ul>
          </div>

          <div className='flex gap-5 items-center'>
            <button className='flex gap-2 items-center px-3 md:px-5 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full
              text-xs lg:text-sm hover:ring-4 ring-pink-200 duration-150'>
              <MdLogin/> Connection
            </button>
            {
                open===false?
                <MdMenu className='w-9 h-9 p-1 text-lg rounded-lg bg-pink-100 md:hidden'
                   onClick={handleChangeOpen} />
                :
                <MdClose className='w-9 h-9 p-1 text-lg rounded-lg bg-pink-100 md:hidden' 
                  onClick={handleChangeOpen}/>
            }
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
