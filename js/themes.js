/* ==========================================================
   Theme Engine — CSS Variable Schemes & Switcher
   ========================================================== */

const themes = {
  carbon: {
    label: 'Carbon Noir',
    accent: '#6366f1',
    rgb: '99, 102, 241',
    glow: 'rgba(99, 102, 241, 0.35)',
    bgBase: '#06060a',
    bgSurface: '#0e0e16',
    borderMute: 'rgba(255, 255, 255, 0.05)',
    textPrimary: '#f8fafc',
    textMuted: '#94a3b8',
    cardShine: 'rgba(255, 255, 255, 0.015)',
    isLight: false
  },
  nordic: {
    label: 'Nordic Light',
    accent: '#6366f1',
    rgb: '99, 102, 241',
    glow: 'rgba(99, 102, 241, 0.15)',
    bgBase: '#f8fafc',
    bgSurface: '#ffffff',
    borderMute: 'rgba(15, 23, 42, 0.22)',
    textPrimary: '#0f172a',
    textMuted: '#475569',
    cardShine: 'rgba(15, 23, 42, 0.01)',
    isLight: true
  }
};

let currentTheme = 'carbon';

/**
 * Apply a named theme to the document by updating CSS custom properties.
 */
function changeTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  currentTheme = themeName;

  const root = document.documentElement;
  root.style.setProperty('--accent-color', theme.accent);
  root.style.setProperty('--accent-color-rgb', theme.rgb);
  root.style.setProperty('--accent-glow', theme.glow);
  root.style.setProperty('--bg-base', theme.bgBase);
  root.style.setProperty('--bg-surface', theme.bgSurface);
  root.style.setProperty('--border-mute', theme.borderMute);
  root.style.setProperty('--text-primary', theme.textPrimary);
  root.style.setProperty('--text-muted', theme.textMuted);
  root.style.setProperty('--card-shine', theme.cardShine);

  // Swap grid background pattern for light/dark
  const overlay = document.getElementById('grid-pattern-overlay');
  if (overlay) {
    overlay.className = theme.isLight
      ? 'fixed top-0 left-0 w-full h-full pointer-events-none z-10 nordic-grid-bg'
      : 'fixed top-0 left-0 w-full h-full pointer-events-none z-10 grid-bg';
  }

  // Update GitHub contribution chart accent color
  const graph = document.getElementById('github-contrib-graph');
  if (graph) {
    const cleanHex = theme.accent.replace('#', '');
    graph.src = `https://ghchart.rshah.org/${cleanHex}/HARSHP-16`;
  }

  // Update theme button icon
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme.isLight ? '☀️' : '🌙';
  }

  // Update the accent dot color
  const themeDot = document.getElementById('theme-dot');
  if (themeDot) {
    themeDot.style.backgroundColor = theme.accent;
  }
  
  // Update footer branding accent dot color if present
  const footerDot = document.getElementById('footer-brand-dot');
  if (footerDot) {
    footerDot.style.backgroundColor = theme.accent;
  }
}

/**
 * Toggle between Carbon Noir (Dark) and Nordic Light (Light).
 */
function toggleTheme() {
  const target = currentTheme === 'carbon' ? 'nordic' : 'carbon';
  changeTheme(target);
}
