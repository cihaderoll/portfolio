import { profile } from '../data/site.js'

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-zinc-800">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400">
          Have a question or want to work together? My inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block rounded-md border border-emerald-500/50 px-5 py-2.5 font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
        >
          {profile.email}
        </a>
        <div className="mt-12 flex items-center justify-between text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
