"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
// import profileImage from "../public/pp2.png"

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const photoContainerRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<SVGSVGElement>(null)
  const mynameRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        photoContainerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=1.2'
      )
  }, [])

  useEffect(() => {
    gsap.to(borderRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
    })
  }, [])

// Add this useEffect (place it alongside your other useEffect hooks)
useEffect(() => {
  const el = mynameRef.current
  if (!el) return

  // preserve original text for cleanup
  const original = el.textContent ?? ''

  // split into characters (keeps spaces)
  const chars = original.split('')

  // wrap each char in a span that is inline-block so GSAP can animate it
  el.innerHTML = chars
    .map((ch) => {
      // preserve spaces visually
      const safe = ch === ' ' ? '&nbsp;' : ch
      return `<span class="char" style="display:inline-block;white-space:pre">${safe}</span>`
    })
    .join('')

  const nodes = el.querySelectorAll<HTMLElement>('.char')

  // initial state
  gsap.set(nodes, { y: 30, opacity: 0, rotateX: -10 })

  // animate in with a slight stagger while the page loads
  gsap.to(nodes, {
    y: 0,
    opacity: 1,
    rotateX: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.03,
    delay: 0.15,
  })

  // cleanup: restore original text if component unmounts
  return () => {
    el.textContent = original
  }
}, [])

  
  
  
  

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 py-20 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
    > 
      <div className="flex-1 text-center lg:text-left max-w-2xl">
      <h1 ref={mynameRef} className="font-body text-[#06b6d4] font-bold text-2xl overflow-hidden" >Hello I'm Sinishaw Regasa </h1>
        <h1
          ref={headlineRef}
          className="font-body  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="block">Web Developer</span>
          <span className="block text-zinc-500 dark:text-zinc-400 mt-2">
            & Design Enthusiast
          </span>
        </h1>
        <p
          ref={subRef}
          className="font-body mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400"
        >
          I craft polished interfaces and seamless experiences with React, modern
          CSS, and thoughtful motion design.
        </p>
        <a
          ref={ctaRef}
          href="#projects"
          className=" mt-10 inline-block px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium text-lg hover:scale-105 active:scale-[0.98] transition-transform duration-200 shadow-lg dark:shadow-zinc-800/50"
        >
          View My Work
        </a>
      </div>

      <div
        ref={photoContainerRef}
        className="relative flex-shrink-0 order-first lg:order-last"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <svg
            ref={borderRef}
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#heroBorderGradient)"
              strokeWidth="3"
              strokeDasharray="8 12"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="heroBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-[14px] rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 ring-2 ring-zinc-100 dark:ring-zinc-800">
            <img
              src="/pp2.png"
              alt="Profile"
              className="w-full h-full object-cover"
             
            />
          </div>
        </div>
      </div>
    </section>
  )
}
