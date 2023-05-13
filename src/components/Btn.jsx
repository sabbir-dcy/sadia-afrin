import { gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

export const Btn = ({ children }) => {
  const dotRef = useRef(null)
  const spanRef = useRef(null)
  const [spanWidth, setSpanWidth] = useState(0)

  useEffect(() => {
    setSpanWidth(spanRef.current.offsetWidth)
  }, [])

  const btnTimeline = new gsap.timeline({ paused: true })
  btnTimeline.to(dotRef.current, {
    width: 28 + spanWidth,
    height: 28,
    duration: 0.3,
    delay: 0.08,
    ease: "sine",
  });

  return (

    <button className="font-semibold flex items-center py-2" onMouseEnter={() => btnTimeline.play()} onMouseLeave={() => btnTimeline.reverse()}>
      <div ref={dotRef} className="btn-dot -z-10 bg-main rounded-full w-[10px] h-[10px] absolute"></div>
      <span ref={spanRef} className="ml-4 block">{children}</span>
    </button>

  )
}
