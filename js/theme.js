// Immediately executing function to prevent Flash of Unstyled Content (FOUC)
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function initThemeWidget() {
  const themeWidgetHtml = `
    <div class="theme-switcher-widget">
      <div class="theme-switcher-title">Choose Appearance</div>
      <div class="theme-btn-group" style="flex-direction: column; gap: 4px;">
        <div style="display: flex; gap: 4px; width: 100%;">
          <button class="theme-btn" id="theme-btn-light">☀️ Light</button>
          <button class="theme-btn" id="theme-btn-dark">🌙 Dark</button>
        </div>
        <button class="theme-btn" id="theme-btn-onepiece" style="margin-top: 4px;">🏴‍☠️ One Piece (BETA)</button>
      </div>
    </div>
  `;
  
  // Inject widget into body
  document.body.insertAdjacentHTML('beforeend', themeWidgetHtml);
  
  const lightBtn = document.getElementById('theme-btn-light');
  const darkBtn = document.getElementById('theme-btn-dark');
  const onepieceBtn = document.getElementById('theme-btn-onepiece');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  const updateActiveBtn = (theme) => {
    lightBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    onepieceBtn.classList.remove('active');
    
    if (theme === 'dark') {
      darkBtn.classList.add('active');
    } else if (theme === 'onepiece') {
      onepieceBtn.classList.add('active');
    } else {
      lightBtn.classList.add('active');
    }
  };
  
  updateActiveBtn(currentTheme);
  
  // Event listeners
  lightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    updateActiveBtn('light');
  });
  
  darkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    updateActiveBtn('dark');
  });

  onepieceBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'onepiece');
    localStorage.setItem('theme', 'onepiece');
    updateActiveBtn('onepiece');
  });
  
  // Listen for system changes if no override is saved
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateActiveBtn(newTheme);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeWidget);
} else {
  initThemeWidget();
}
