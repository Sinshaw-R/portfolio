"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'E-commerce Platform',
    desc: 'Full-stack store with cart, checkout, and admin dashboard.',
    tech: ['React', 'Node.js', 'Stripe'],
    demo: '#',
    github: 'https://github.com',
  },
  {
    title: 'Task Management App',
    desc: 'Kanban-style productivity app with real-time sync.',
    tech: ['React', 'Firebase', 'Tailwind'],
    demo: '#',
    github: 'https://github.com',
  },
  {
    title: 'Portfolio Site',
    desc: 'Minimal portfolio with smooth animations and dark mode.',
    tech: ['React', 'GSAP', 'Vite'],
    demo: '#',
    github: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Location-based weather with charts and forecasts.',
    tech: ['React', 'OpenWeather API'],
    demo: '#',
    github: 'https://github.com',
  },
  {
    title: 'Design System',
    desc: 'Reusable component library and design tokens.',
    tech: ['React', 'Storybook', 'Tailwind'],
    demo: '#',
    github: 'https://github.com',
  },
]

function ProjectCard({
  title,
  desc,
  tech,
  demo,
  github,
  index,
}: (typeof projects)[0] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className="dark:bg-[#537D96] bg-white font-header group p-6 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out"

    >
      <h3 className="text-xl font-semibold  dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-black dark:text-white text-sm">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-medium rounded-md bg-transparent border text-black dark:text-white"
            style={{ borderColor: 'zinc' }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-black dark:text-white hover:underline"
        >
          Live Demo →
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-black dark:text-white hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
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
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ backgroundColor: '#F4F0E4' }}
      className="py-24 px-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-header text-3xl text-black sm:text-4xl font-bold text-center mb-16"
        >
          Projects
        </h2>
        <div className="font-body grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
