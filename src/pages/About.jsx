import React from 'react'
import aboutImg from "../Assets/about image.jpg"

const About = () => {
  return (
    <div className="container flex md:flex-row items-center px-7 mt-10 gap-10 w-full flex-col">
      <div className="img-container flex-1 p-4">
        <img src={aboutImg} alt="" className='about-img'/>
      </div>

      <section className='  flex-1 text-center md:text-left '>
          <h1 className="text-2xl font-bold">About us</h1>
          <div className='flex justify-center md:justify-start'>
            <div className='h-2 w-20 bg-tertiary'></div>
          </div>
          <p className='pt-5 leading-7'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam velit neque! Et, facilis ducimus! Facilis obcaecati voluptatem, dolor consequatur illo, totam repudiandae placeat deserunt commodi provident reiciendis odit doloremque explicabo! Totam, vel voluptates est ipsam 
          </p>
        </section>
    </div>
  )
}

export default About
