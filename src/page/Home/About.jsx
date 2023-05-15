import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Btn } from '../../components/Btn'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import resume from '../../assets/resume.pdf'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   gsap.to(aboutRef.current, {
    //     y: -200,
    //     duration: 4,
    //     scrollTrigger: {
    //       trigger: aboutRef.current,
    //       start: "top 90%",
    //       // toggleActions: "play none none none",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   });
    // })
    // return () => ctx.revert()
    if (window.innerWidth > 1126) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: aboutRef.current,
          start: 'top 40%',
          end: 'bottom bottom',
          scrub: true,
          pin: containerRef.current,
          ease: 'sinze'
        })
      })
      return () => ctx.revert()
    }

  }, [aboutRef.current, containerRef.current])


  return (
    <section className="md:h-[180vh] about " ref={aboutRef}>
      <div className="md:w-1/2 w-4/5 mx-auto relative" ref={containerRef}>
        <div className="md:absolute -left-1/4 font-semibold md:top-1/2 md:-translate-y-1/2 mb-10 md:mb-0 ">ABOUT</div>
        <div className="absolute h-full top-0 w-1 bg-main -left-6"></div>
        <div>
          <h2 className="md:text-3xl text-2xl font-medium">Sadia Afrin</h2>
          <p>English content developer at 10 minute school</p>
          <p className="mt-8">Efficient project coordinator and content developer with experience. Highly organized and
            skilled
            individual in written and verval communication. A strong leader who works well under pressure and exudes
            positivism. Obtaining a managerial position in a renowned firm to utilize skills in organizing,
            communication and leadership while gaining professional experience, goals and solving problems is the
            objective.</p>
          <div className="w-fit btn-expand mt-6 cursor-pointer">
            <a href={resume} download>
              <Btn>resume</Btn>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About