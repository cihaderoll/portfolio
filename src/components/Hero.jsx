import { profile } from '../data/site.js'

function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <p className="font-mono text-sm text-emerald-400">Hi, my name is</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}.
      </h1>
      <p className="mt-3 text-2xl font-semibold text-zinc-400 sm:text-3xl">
        {profile.role}
      </p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
        {profile.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-md bg-emerald-500 px-5 py-2.5 font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          View my work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-zinc-700 px-5 py-2.5 font-medium transition-colors hover:border-zinc-500"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
