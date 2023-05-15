import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Connect from './Connect'
import Testimoni from './Testimoni'

const Home = () => {
  const date = new Date()
  return (
    <div className='space-y-[200px] md:space-y-0'>
      <Hero />
      <About />
      <Experience />
      {/* <Testimoni /> */}
      <Connect />
      <div className='text-center'>
        <p>&copy; sadia afrin {date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default Home