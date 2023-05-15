import { gsap } from 'gsap';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import dp from '../../assets/dp.png'

import { MdMarkEmailUnread } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

const Hero = () => {
  const textRef = useRef([])
  const quoteConRef = useRef(null)
  const dpRef = useRef([])
  const nameTitleRef = useRef([])

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.from(textRef.current, {
      y: 135,
      skewY: 7,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      delay: 4.5
    }).from(nameTitleRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    })

    gsap.fromTo(
      dpRef.current[0],
      { xPercent: -100 },
      {
        xPercent: 100,
        duration: 3,
        delay: 5.5,
        ease: "power4.out",
      })
    gsap.fromTo(dpRef.current[1],
      { opacity: 0 },
      {
        delay: 5.7,
        opacity: 1,
      })

  }, [])

  return (
    <>
      <section className="md:min-h-screen">

        <div className="w-3/4 mx-auto md:mt-28">

          <div className="hero w-fit mx-auto leading-none">
            <div className="overflow-hidden p-1">
              <h1 className="text text-1 lg:text-[68px] sm:text-[32px] text-[24px] font-medium h-8 lg:h-20" ref={(el) => textRef.current[0] = el}>a good content carries </h1>
            </div>
            <div className="overflow-hidden p-1">
              <h1 className="text text-2 lg:text-[68px] sm:text-[32px] text-[24px] font-medium h-8 lg:h-20" ref={(el) => textRef.current[1] = el}>its distinctive significance</h1>
            </div>
          </div>

          <div className="greet mt-20">

            <div className="relative overflow-hidden w-fit mx-auto rounded-full">
              <div className='absolute bg-main w-[200px] h-[200px] z-10' ref={(el) => dpRef.current[0] = el}></div>
              <img className="dp w-[150px] h-[150px] object-cover mx-auto bg-sub " ref={(el) => dpRef.current[1] = el} src={dp} alt="" />
            </div>


            <div className="w-fit mx-auto name-title font-medium lg:text-3xl text-lg mt-10 relative" ref={(el) => nameTitleRef.current[0] = el}>
              <h4 className="md:-translate-x-8">hey! I am <span className="border-b-[3px] border-main">Sadia Afrin</span></h4>
              <h4>digital conent creator and</h4>
              <h4 className="md:-translate-x-12">business analyst. </h4>
              <span className="inline-block text-base font-normal md:absolute md:right-0 md:bottom-1">from
                Bangladesh</span>
            </div>
            <div className=' justify-center gap-x-4 mt-20 flex items-center' ref={(el) => nameTitleRef.current[1] = el}>
              <a href="mailto:afrin56624@gmail.com" >
                <MdMarkEmailUnread className='text-[28px] text-neutral-400 hover:text-orange-600' />
              </a>
              <a href="https://www.linkedin.com/in/sadia-afrin-sweety/" target="_blank"><BsLinkedin className='text-[21px] text-neutral-400 hover:text-blue-700' /></a>
            </div>

          </div>
        </div>
      </section></>
  )
}

export default Hero