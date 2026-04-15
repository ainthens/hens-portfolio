# Hens Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Vercel Deployment

This repository is configured for Vercel using [vercel.json](vercel.json).

- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback rewrite enabled for non-file routes

### Deploy via Vercel Dashboard

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the detected settings (or use the values above).
4. Click **Deploy**.

### Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```
