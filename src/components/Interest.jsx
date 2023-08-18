import React from 'react'


  function Interest() {
  return (
  <section className="text-gray-600 body-font bg-[#272829]">
    <h1 className='about text-center text-red-600 font-serif font-bold text-4xl'>ABOUT ME</h1>
    <h3 className='about text-center text-white font-serif font-bold text-2xl'>A PASSIONATE WEB-DESIGNER WHO LOVE TO CODE</h3>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">MY
          <br className="hidden lg:inline-block" />BIO
        </h1>
        <p className="mb-8 leading-relaxed text-white font- font-bold ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-black font-semibold bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-lime-400 rounded text-lg">DOWNLOAD MY CV</button>
         
        </div>
      </div>
    </div>
  </section>
  )
  }



export default Interest