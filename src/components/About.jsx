import { about } from '../data/site.js'

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
      <div className="mt-6 max-w-2xl space-y-4 text-zinc-400 leading-relaxed">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
