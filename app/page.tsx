
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/skill'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
