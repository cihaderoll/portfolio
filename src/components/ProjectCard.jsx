const statusStyles = {
  live: 'bg-emerald-500/10 text-emerald-400',
  'in-progress': 'bg-amber-500/10 text-amber-400',
}

const statusLabels = {
  live: 'Live',
  'in-progress': 'In progress',
}

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Visit site ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-200"
          >
            Source code ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
