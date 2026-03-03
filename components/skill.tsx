// Skills.tsx
"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SkillCards } from './SkillCard'
import type { Skill } from './SkillCard'

gsap.registerPlugin(ScrollTrigger)

// In Skills.tsx, update the skills array to remove Compiler and OpenGL
const skills: Skill[] = [
  { 
    name: 'React', 
    level: 90, 
    category: 'Web',
    evidence: ['Portfolio site', '1 years'],
    description: 'Building interactive UIs with hooks and context',
    projects: ['E-commerce Platform', 'Dashboard App'],
    links: ['GSAP', 'Tailwind CSS']
  },
  { 
    name: 'Tailwind CSS', 
    level: 85, 
    category: 'Web',
    evidence: ['Rapid UI dev', '1 years'],
    description: 'Utility-first CSS framework for custom designs',
    projects: ['Marketing Site', 'Admin Dashboard'],
    links: ['React']
  },
  { 
    name: 'GSAP', 
    level: 80, 
    category: 'Web',
    evidence: ['Animations', '1 years'],
    description: 'Smooth, performant web animations',
    projects: ['Landing Pages', 'Interactive Stories'],
    links: ['Animation']
  },
  { 
    name: 'Animation', 
    level: 78, 
    category: 'Web',
    evidence: ['Motion design', '1 years'],
    description: 'Creating engaging motion experiences',
    projects: ['Product Demos', 'Tutorials'],
    links: ['GSAP']
  },
  { 
    name: 'Node.js', 
    level: 85, 
    category: 'Web',
    evidence: ['Backend API', '1 years'],
    description: 'Server-side JavaScript runtime environment',
    projects: ['REST API', 'Auth Service'],
    links: ['JavaScript', 'React']
  },
  { 
    name: 'JavaScript', 
    level: 90, 
    category: 'Web',
    evidence: ['ES6+', '1 years'],
    description: 'Core web programming language',
    projects: ['Interactive Logic', 'DOM Manipulation'],
    links: ['React', 'Node.js']
  },
  { 
    name: 'Three.js', 
    level: 75, 
    category: 'Web',
    evidence: ['3D Scenes', '1 year'],
    description: '3D graphics library for the browser',
    projects: ['3D Portfolio', 'Visualizations'],
    links: ['React', 'GSAP']
  },
  { 
    name: 'ConstraintLayout', 
    level: 95, 
    category: 'Android',
    evidence: ['Mobile app', '1 years'],
    description: 'Complex responsive layouts for Android',
    projects: ['Social Media App', 'Fitness Tracker'],
    links: []
  },
  { 
    name: 'OpenGL', 
    level: 70, 
    category: 'Graphics',
    evidence: ['Shader dev', '1 years'],
    description: 'Low-level graphics programming',
    projects: ['Particle System', 'Model Viewer'],
    links: []
  },
]
export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const legendRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Title animation
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

    // Legend animation
    gsap.fromTo(
      legendRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  // Group skills by category for the legend
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Get category color helper function
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Web': '#61DBFB',
      'Android': '#FF8A50',
      'Compiler': '#9C27B0',
      'Graphics': '#7CFFB2',
    }
    return colors[category] || '#94A3B8'
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
    >
      <div className="font-body max-w-7xl mx-auto">
        <h2 ref={titleRef} className="font-header text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Hover over cards to explore details • Click to focus • Drag to rotate the carousel
        </p>

        {/* Main 3D visualization */}
        <SkillCards skills={skills} />

        {/* Skills legend with categories */}
        <div ref={legendRef} className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Skills Overview</h3>
          
          {/* Category color legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {Object.entries({
              'Web': '#61DBFB',
              'Android': '#FF8A50',
              'Compiler': '#9C27B0',
              'Graphics': '#7CFFB2',
            }).map(([category, color]) => (
              <div key={category} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm" 
                  style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{category}</span>
              </div>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="space-y-3">
                <h4 className="font-semibold text-md px-3" style={{ 
                  color: getCategoryColor(category)
                }}>
                  {category}
                </h4>
                {categorySkills.map((s) => (
                  <div
                    key={s.name}
                    className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 px-4 py-3 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-black dark:text-white">{s.name}</span>
                        {s.evidence && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                            {s.evidence.join(' • ')}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold" style={{ 
                          color: getCategoryColor(category)
                        }}>
                          {s.level}%
                        </span>
                        {s.links && s.links.length > 0 && (
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
                            {/* Tooltip for related skills */}
                            <div className="absolute right-0 top-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded py-1 px-2 whitespace-nowrap">
                                Related: {s.links.join(', ')}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-2 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${s.level}%`,
                          backgroundColor: getCategoryColor(category)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Additional info */}
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-500 mt-8">
            Click on any card in the 3D visualization above for more details and project examples
          </p>
        </div>
      </div>
    </section>
  )
}