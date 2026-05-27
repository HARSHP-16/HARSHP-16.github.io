/* ==========================================================
   GitHub API — Live Profile Stats
   ========================================================== */

async function fetchGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/HARSHP-16');
    if (!response.ok) throw new Error('Non-200 API response');

    const data = await response.json();

    const repoEl = document.getElementById('github-repos');
    const follEl = document.getElementById('github-followers');

    if (repoEl) repoEl.textContent = data.public_repos ?? '22';
    if (follEl) follEl.textContent = data.followers ?? '14';
  } catch (err) {
    console.warn('GitHub API stats fetch failed:', err);
    // Fallback to static values
    const repoEl = document.getElementById('github-repos');
    const follEl = document.getElementById('github-followers');
    if (repoEl) repoEl.textContent = '22';
    if (follEl) follEl.textContent = '14';
  }
}
