import { projects } from '../data/site.js'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
      <p className="mt-2 text-zinc-400">
        Things I've built and shipped — or am building right now.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
