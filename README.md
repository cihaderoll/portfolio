# Portfolio

My personal portfolio site. Every project I ship gets a card here.

**Stack:** React 19 · Tailwind CSS 4 · Vite

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build into dist/
npm run lint     # lint with oxlint
```

## Adding a project

All content lives in [`src/data/site.js`](src/data/site.js). To publish a new
project, add an entry to the `projects` array — the components render the rest.
