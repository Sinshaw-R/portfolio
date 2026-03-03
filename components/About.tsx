"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    
    role: 'Frontend Developer',
    desc: 'Led UI architecture and design systems.',
  },
  {
    role: 'UI/UX Designer',
    desc: 'Crafted user flows and high-fidelity prototypes.',
  },
  {
    role: 'Open Source Contributor',
    desc: 'Contributed to React and GSAP projects.',
  }
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    const items = itemsRef.current?.querySelectorAll('.timeline-item')
    if (items?.length) {
      gsap.fromTo(
        items,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-[#F4F0E4] text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
    >
      <div className="font-body max-w-4xl mx-auto">
        <h2 className="font-header text-3xl text-zinc-900 sm:text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div ref={bioRef} className="font-body max-w-2xl mx-auto text-center mb-20">
          <p className="text-lg text-zinc-900 dark:text-zinc-400 leading-relaxed">
            I&apos;m a web developer with a passion for clean code and thoughtful design.
            I specialize in building fast, accessible interfaces with React and modern
            tooling. When I&apos;m not coding, I enjoy exploring design systems and
            experimenting with animations.
          </p>
        </div>

        <div ref={timelineRef}>
          <h3 className="font-body text-xl text-zinc-900 font-semibold mb-10 text-center">Experience</h3>
          <div ref={itemsRef} className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700 -translate-x-px sm:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <div
                key={item.role}
                className={`timeline-item relative pl-12 sm:pl-0 pb-12 last:pb-0 ${
                  i % 2 === 0 ? 'sm:pr-[52%] sm:text-right' : 'sm:pl-[52%] sm:text-left'
                }`}
              >
                <div className="absolute left-0 sm:left-1/2 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 -translate-x-1/2 top-1" />
                <div className="bg-zinc-50 dark:bg-zinc-900/80 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
                 
                  <h4 className="text-lg font-semibold mt-1">{item.role}</h4>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
