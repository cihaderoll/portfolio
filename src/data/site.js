// Single source of truth for all site content.
// To publish a new project, add an entry to `projects` — no component changes needed.

export const profile = {
  name: "Cihad",
  role: "Software Developer",
  tagline:
    "I build simple, usable web apps and take them all the way to production.",
  email: "cihaderoll@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
}

export const about = [
  "I'm a developer focused on shipping: small, well-built projects that real people can use, not demos that die on localhost.",
  "This portfolio grows as I build. Every project below is (or will be) live in production with its source code available.",
]

// status: "live" (deployed) | "in-progress" (being built)
export const projects = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description:
      "This very site. A minimal, data-driven portfolio built to showcase every project I ship.",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "",
    repoUrl: "",
    status: "in-progress",
  },
]
