import React from "react"
import img from "../Assets/pricing.jpg"
import Back from "../common/Back"

const Contact = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <Back name='Nous contactez' title="Avoir de l'aide & Friendly Support" cover={img} />
        
        <div className='max-w-3xl w-full mx-auto'>
          <form className='sm:shadow-lg p-5 lg:p-10 flex flex-col gap-4'>
            <h4 className="text-lg font-bold" >Remplissez le Formulaire</h4>
            <div className="text-sm" >
              <input type='text' placeholder='Nom' />
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Subject' />
            </div>
            <textarea cols='30' rows='5' className="border border-zinc-300 rounded-md pl-2 text-sm" ></textarea>
            <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 font-semibold text-sm rounded-full hover:ring-4 ring-pink-200 duration-150" >Soumettre la requête</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
