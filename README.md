# Harsh Palkrutwar — Professional Systems & AI Portfolio

This is a clean, multi-file redesign of the systems and AI engineering portfolio. It breaks away from the monolithic code layout into modular stylesheets and script assets, with a focus on fast rendering and polished aesthetics.

## File Structure

```
portfolio-/
├── index.html              # Main webpage with semantic layout and redesigned projects grid
├── css/
│   ├── variables.css       # Token system defaults (Carbon Noir variables)
│   ├── base.css            # Standard document resets, selections, and background grids
│   ├── components.css      # Premium layout card structures, transitions, and hover-shines
│   └── animations.css      # Entry fades and SVG dashed path flows
├── js/
│   ├── state.js            # Global shared scope registry
│   ├── themes.js           # Theme schemes (Carbon, Emerald, Amber, Nordic) & cycle engine
│   ├── particles.js        # Canvas Particle Network simulation module
│   ├── github.js           # Live public API synchronizer
│   └── main.js             # Orchestrator and entry listener
├── assets/
│   └── images/             # Folder for binary graphics and screenshots
└── README.md               # Architecture documentation
```

## Styling & Layout
- **Tailwind CSS Utility CDN**: Styled with standard Tailwind utility tags.
- **Glassmorphism**: Layout elements feature responsive box reflections, smooth bezier transitions (`cubic-bezier(0.16, 1, 0.3, 1)`), and border lighting.
- **Visual Presets**: Premium toggle button allows instant switching between Carbon Noir (Dark) and Nordic Light (Light) theme presets via CSS custom properties.

## Interactive Scripts
1. **Interactive Background**: Fully dynamic canvas particle connection array reacting to viewport resize and mouse movement coordinates.
2. **GitHub API Feed**: Live repository and follower stats sync.
3. **Optimized Loop Orchestration**: Script stops canvas animations automatically when the tab is hidden to save local CPU cycles.

## How to Preview
Double-click `index.html` or host a simple static server from the project directory:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`.
