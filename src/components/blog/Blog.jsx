import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import img from "../Assets/imgHome.jpg"

const Blog = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <Back name='Blog' title='Blog Grid - Notre Blog' cover={img} />
        <div className='max-w-7xl mx-auto px-3 lg:px-10'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
