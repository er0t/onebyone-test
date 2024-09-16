import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Home() {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 
        ref={titleRef} 
        className="text-[150px] font-misto text-white mb-8"
      >
        ONEBYONE
      </h1>
      {/* Add any other content for the Home section here */}
    </div>
  )
}