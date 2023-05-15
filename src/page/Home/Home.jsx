import React, { useLayoutEffect, useRef, useState } from 'react'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Connect from './Connect'
import Testimoni from './Testimoni'
import { gsap } from 'gsap'
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Home = () => {
  // useLenis(({ scroll }) => { })
  const date = new Date()
  const overlay = useRef()
  const tl = gsap.timeline()
  const [lenisEnable, setLenisEnable] = useState(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setLenisEnable(true)
    }, 4500);

    tl.set(document.body, { overflow: 'hidden' }).to(overlay.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power4.out",
      delay: 3,
    }).set(document.body, { overflow: 'auto' })
  }, [])

  return (
    <>
      <div className=' w-full h-screen bg-black fixed top-0 z-10 flex items-center justify-center' ref={overlay}>
        <div className='text-white w-4/5 md:w-[25%] mx-auto'>
          <div className='w-fit'>
            <h2 className='text-2xl'>We don't see things as they are, we see them as we are.</h2>
            <p className='text-right mt-4'>Anaïs Nin</p>
          </div>
        </div>
      </div>

      {lenisEnable && <ReactLenis root options={{
        duration: 2,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }} />}

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
    </>
  )
}

export default Home