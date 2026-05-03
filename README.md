# FMBE — Tools & Resources Hub

A modern, static website that collects tools, simulators, and documentation for **FMBE** (Fox Display Entity) — a Minecraft Bedrock Edition command technology using `display entity` with Molang expressions.

## Features

- **i18n support** — 12 languages (en, zh, ja, ko, fr, es, pt, de, hi, tl, vi, ru), auto-detected from browser locale
- **Dark mode** — respects system preference, toggleable with manual override
- **Responsive** — works on desktop and mobile
- **Pure HTML/CSS/JS** — no build step, no dependencies
- **Flag icons** — SVG flags from flagcdn for country indicators

## Sections

| Section | Content |
|---------|---------|
| **Tools** | BF Converter, Molang Grapher |
| **Simulators** | Multi-block Sim, Desmos 3D (Advanced/Basic/Dual editions) |
| **Docs** | FMBE Wiki, Molang docs, Query function references |

## Local Development

Just open `index.html` in a browser, or use any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

## Deployment

This site is designed for **GitHub Pages**. A GitHub Actions workflow is included for automatic deployment on push to `main`.

### Setup

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the site will be auto-deployed

## Project Structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # Styles with CSS variables & dark mode
├── js/
│   └── main.js         # i18n, theme toggle, interactions
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deploy workflow
├── example/            # Reference project (not deployed)
└── README.md
```

## License

This project is intended as a community resource hub. Individual tools and resources linked from this site are subject to their own licenses.
