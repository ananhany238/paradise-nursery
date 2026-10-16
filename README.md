# Paradise Nursery

A polished React + Redux houseplant shopping experience for the Paradise Nursery final project.

## Features

- Home, Plants, and Cart client-side routes
- Responsive landing page with company story and call to action
- 12 plants across three categories
- Redux Toolkit cart state with local-storage persistence
- Dynamic cart badge, quantity controls, deletion, totals, and Coming Soon checkout message
- GitHub Pages-ready static Vite build with hash routing for reliable page refreshes

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable output is generated in `dist/`.

## GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the Vite app and publishes `dist/` to GitHub Pages. The app uses hash routing so Home, Plants, and Cart remain available on a static host.

## Required project files

The graded deliverables are available at `src/components/AboutUs.jsx`, `src/components/ProductList.jsx`, `src/components/CartItem.jsx`, `src/store/CartSlice.jsx`, `src/App.jsx`, and `src/App.css`.
