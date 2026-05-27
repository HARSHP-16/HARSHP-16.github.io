/* ==========================================================
   Main — Initialization & Orchestration
   ========================================================== */

window.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize canvas particle background
  particlesInstance = new CanvasParticles('canvas-bg');

  // 2. Fetch live GitHub stats
  fetchGitHubStats();

  // 3. Bind theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // 4. Pause particles when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!particlesInstance) return;
    particlesInstance.active = !document.hidden;
  });
});
