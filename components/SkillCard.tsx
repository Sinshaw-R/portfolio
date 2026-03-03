// SkillCard.tsx
"use client"
import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ChevronLeft, ChevronRight, ExternalLink, Code, Smartphone, Palette } from 'lucide-react'
import gsap from 'gsap'

export type Skill = {
  name: string
  level: number
  category: string
  evidence: string[]
  icon?: string
  description?: string
  projects?: string[]
  links?: string[]
}

interface SkillCardsProps {
  skills: Skill[]
}

const CATEGORY_COLORS: Record<string, { primary: string; secondary: string; icon: any }> = {
  'Web': { 
    primary: '#61DBFB', 
    secondary: '#3A9FBC', 
    icon: Code 
  },
  'Android': { 
    primary: '#FF8A50', 
    secondary: '#CC6E40', 
    icon: Smartphone 
  },
  'Graphics': { 
    primary: '#7CFFB2', 
    secondary: '#4ECB8A', 
    icon: Palette 
  },
  'Default': { 
    primary: '#94A3B8', 
    secondary: '#64748B', 
    icon: Code 
  },
}

// Individual Card Component
function SkillCard({ 
  skill, 
  isActive, 
  onClick,
  index 
}: { 
  skill: Skill; 
  isActive: boolean; 
  onClick: () => void;
  index: number;
}) {
  const { theme } = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const categoryStyle = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.Default
  const Icon = categoryStyle.icon

  // Animate progress bar on mount
  useEffect(() => {
    if (progressRef.current) {
      gsap.fromTo(progressRef.current,
        { width: '0%' },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out"
        }
      )
    }
  }, [skill.level, index])

  // Single effect to handle ALL card styling (hover + active)
  useEffect(() => {
    if (!cardRef.current) return
    
    let boxShadow = 'none'
    let scale = 1
    
    // Determine styles based on state
    if (isActive) {
      // Active card: ring + shadow + subtle scale
      boxShadow = `0 0 0 4px ${categoryStyle.primary}, 0 20px 30px -10px ${categoryStyle.primary}80`
      scale = 1.02
    } else if (isHovered) {
      // Hovered (non-active) card: only shadow
      boxShadow = `0 20px 30px -10px ${categoryStyle.primary}80`
      scale = 1
    }
    
    // Apply styles with GSAP
    gsap.to(cardRef.current, {
      boxShadow,
      scale,
      duration: 0.3,
      ease: "power2.out"
    })
    
  }, [isActive, isHovered, categoryStyle.primary])

  // Separate effect for content expansion (only when active changes)
  useEffect(() => {
    if (!contentRef.current) return
    
    if (isActive) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, height: 0, marginTop: 0 },
        {
          opacity: 1,
          height: 'auto',
          marginTop: 16,
          duration: 0.5,
          ease: "power2.inOut"
        }
      )
    } else {
      gsap.to(contentRef.current, {
        opacity: 0,
        height: 0,
        marginTop: 0,
        duration: 0.3,
        ease: "power2.inOut"
      })
    }
  }, [isActive])

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-[#1E293B]"
    >
      {/* Gradient background */}
      {isMounted && (
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === 'dark'
                ? `linear-gradient(135deg, ${categoryStyle.secondary}20, #1E293B)`
                : `linear-gradient(135deg, ${categoryStyle.primary}10, #FFFFFF)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative p-5">
        {/* Header with icon and category */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div 
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${categoryStyle.primary}20` }}
            >
              <Icon size={18} color={categoryStyle.primary} />
            </div>
            <span 
              className="text-xs font-medium px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: `${categoryStyle.primary}20`,
                color: categoryStyle.primary 
              }}
            >
              {skill.category}
            </span>
          </div>
          <motion.div
            animate={isHovered ? 90 : 0}
          >
            <ExternalLink size={16} className="text-zinc-400" />
          </motion.div>
        </div>

        {/* Skill name */}
        <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
          {skill.name}
        </h3>

        {/* Level meter */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-zinc-500 dark:text-zinc-400">Proficiency</span>
            <span style={{ color: categoryStyle.primary }}>{skill.level}%</span>
          </div>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full rounded-full"
              style={{ backgroundColor: categoryStyle.primary }}
            />
          </div>
        </div>

        {/* Evidence chips - simplified */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {skill.evidence.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Expandable content */}
        <div 
          ref={contentRef}
          className="overflow-hidden"
          style={{ 
            height: 0,
            opacity: 0,
            marginTop: 0
          }}
        >
          {/* Description */}
          {skill.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
              {skill.description}
            </p>
          )}

          {/* Projects */}
          {skill.projects && skill.projects.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Projects
              </h4>
              <div className="space-y-1">
                {skill.projects.map((project, i) => (
                  <div key={i} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                    <div 
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: categoryStyle.primary }}
                    />
                    {project}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related skills */}
          {skill.links && skill.links.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Related Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skill.links.map((link, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ 
                      backgroundColor: `${categoryStyle.primary}15`,
                      color: categoryStyle.primary 
                    }}
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Main Component
export function SkillCards({ skills }: SkillCardsProps) {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Handle card click
  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // If clicking the same card, close it by setting active to -1
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  // Navigate to next card
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % skills.length)
  }

  // Navigate to previous card
  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length)
  }

  // Animate cards on mount
  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      )
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCard()
      } else if (e.key === 'ArrowRight') {
        nextCard()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="w-full">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Skills Portfolio
        </h2>
        
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevCard}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Previous skill"
          >
            <ChevronLeft size={20} className="text-zinc-700 dark:text-zinc-300" />
          </button>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {activeIndex >= 0 ? activeIndex + 1 : '-'} / {skills.length}
          </span>
          <button
            onClick={nextCard}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Next skill"
          >
            <ChevronRight size={20} className="text-zinc-700 dark:text-zinc-300" />
          </button>
        </div>
      </div>

      {/* Category filter chips - updated to remove Compiler */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(CATEGORY_COLORS).map(([category, style]) => {
          if (category === 'Default') return null
          const Icon = style.icon
          return (
            <button
              key={category}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                backgroundColor: `${style.primary}20`,
                color: style.primary
              }}
              onClick={() => {
                // Find first skill in this category
                const index = skills.findIndex(s => s.category === category)
                if (index !== -1) setActiveIndex(index)
              }}
            >
              <Icon size={14} />
              {category}
            </button>
          )
        })}
      </div>

      {/* Cards grid */}
      <div ref={containerRef}>
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isActive={index === activeIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Active skill indicator */}
      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {skills.map((_, index) => {
            const categoryStyle = CATEGORY_COLORS[skills[index].category] || CATEGORY_COLORS.Default
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8' : 'w-2'
                }`}
                style={{
                  backgroundColor: index === activeIndex 
                    ? categoryStyle.primary
                    : '#CBD5E1'
                }}
                aria-label={`Go to skill ${index + 1}`}
              />
            )
          })}
        </div>
      </div>

      {/* Keyboard navigation hint */}
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-500 mt-4">
        Use ← → arrow keys to navigate • Click cards to expand
      </p>
    </div>
  )
}

// Simple motion div component for GSAP rotation
function motionDiv({ animate, children, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (ref.current && animate !== undefined) {
      gsap.to(ref.current, {
        rotation: animate,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [animate])
  
  return <div ref={ref} {...props}>{children}</div>
}

// Use the custom motion component
const motion = {
  div: motionDiv
}