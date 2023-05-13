import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const items = [
    {
      title: 'English Content Developer',
      location: '10 Minute School',
      date: '10/21 - 4/23',
      details: [
        'Worked successfully to organize 25 events and been the Event Management Coordinator',
        'Demonstrated ability in creating effective content outlines and English lectures',
        'Creative writer with strong analytical and problemsolving skills',
        'Wrote scripts, transcripts, and worked on the MVP projects for several social media videos on educational projects'
      ]
    },
    {
      title: 'Vice Chairperson',
      location: 'IEEE BUP Student Branch WIE Affinity Group',
      date: '6/20 - 3/23',
      details: ['Worked successfully to organize 25 events and been the Event Management Coordinator',
        'Awarded the “WIE Outstanding Affinity” of Bangladesh Section',
        'Winner - IEEE Asia Region’s Project “Reaching Locals” Skilled in writing various types of content, including posts, reports, emails, scripts, presentations, and a Newsletter named “SHE”',
        ' Hosted a webinar and managed events works',
        'Coordinated logistics for video conferences and offsite meetings among club members, guests, speakers, university authorities, and sponsors', ' Looked after administrative work and kept up communication clear']
    },
    {
      title: 'Joint Secretary',
      location: 'BUP Robotics Club',
      date: '5/19 - 1/23',
      details: ['Wrote Content, skilled in ensuring the compliance of event documents with quality standards', ' Planned, managed events and looked after all the administrative works'],
    },
    {
      title: 'Communication Intern',
      location: 'Suffix IT Limited',
      date: '12/21 - 1/22',
      details: ['Observed how the billing system works', 'Made SRS']
    }
  ]

  return (
    <section className="md:w-3/4 w-4/5 mx-auto experience">
      <div className=" md:sticky font-semibold top-1/2 -translate-y-1/2 mb-10 md:mb-0 xl:text-[200px] md:text-[150px] md:text-neutral-50 -z-10 overflow-hidden">EXPERIENCE</div>
      {
        items.map((item, index) => <Item key={index} item={item}></Item>)
      }
    </section >
  )
}

const Item = ({ item }) => {

  const { title, date, details, location } = item
  const expRef = useRef(null)
  const pinRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 1126) {
      const ctx = gsap.context(() => {

        ScrollTrigger.create({
          trigger: expRef.current,
          start: 'top center',
          end: 'bottom bottom',
          pin: pinRef.current,
          ease: 'sine'
        })
      })
      return () => ctx.revert()
    }



  }, [pinRef.current, expRef.current])

  return <div className='md:flex md:w-3/4 mx-auto mb-10' ref={(el) => expRef.current = el}>
    <div className='w-1/2 pin md:text-2xl text-lg font-semibold md:h-screen ' ref={(el) => pinRef.current = el}>
      <h2>{title}</h2>
    </div>
    <div className='md:w-1/2 unpin '>
      <div className='xp md:h-screen flex flex-col justify-center'>
        <h2 className='text-lg font-medium'>{location}</h2>
        <span className='font-medium text-neutral-500'>{date}</span>
        {details.map((text, i) => <p className='mt-4' key={i}>{text}.</p>)}
      </div>

    </div>
  </div>
}

export default Experience