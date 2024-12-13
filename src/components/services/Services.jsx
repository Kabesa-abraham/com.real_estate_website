import React from "react"
import img from "../Assets/service.jpg"
import Back from "../common/Back"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-10 mb-5'>
        <Back name='Services' title='Services -Tout nos Services' cover={img} />
        <div className='max-w-7xl mx-auto px-3 lg:px-10'>
          <FeaturedCard /> {/*le composant qui vient du dossier home */}
        </div>
      </section>
    </>
  )
}

export default Services
