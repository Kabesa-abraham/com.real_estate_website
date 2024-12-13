import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import imgbanner from "../Assets/pricing.jpg";

const Pricing = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <Back name='30 jours de fructification garantie' title='Pas de paiement supplémentaire. Friendly Support' cover={imgbanner} />
        <div className='max-w-7xl w-full mx-auto'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
