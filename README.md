# Ari Dawoodi

Personal portfolio. Content lives in `src/content/` so a new project is a data change, not a layout change.

## Add a project

1. Open `src/content/projects.ts`.
2. Append an object to `projects` for a case study, or to `scripts` for a short public note.
3. Set `capabilities` to any of `Applications`, `Data`, `Cloud`, `Automation`, and `AI`.
4. Describe what you built. Leave out metrics you have not documented.

`lumora` and `friendly-repo-peek` are intentionally absent.

## Develop

```bash
npm install
npm run dev
```

`npm run build` typechecks and writes `dist/`.

## Hosting

GitHub Pages is the right host for this site. It is a static build, it is free for a personal portfolio, and GitHub Actions can publish it. Custom domains and HTTPS are supported. Published sites should stay under 1 GB. This repository does not need a server.

Vercel or Netlify would also serve the same `dist/` folder. They are not an advantage here, because the site has no server functions and no preview environment that the content requires. TableEdge stays on Vercel for its own reasons. This portfolio does not need a second host.

The workflow in `.github/workflows/pages.yml` builds `dist` and deploys with `actions/deploy-pages`. It does not run until the repository is on GitHub and Pages is set to GitHub Actions.

The live site is [https://aridawoodi.github.io/](https://aridawoodi.github.io/). Pushes to `main` publish through GitHub Actions.

Replace `public/Ari_Dawoodi_Resume.pdf` when the resume changes. The published site includes the email, phone, and resume.
