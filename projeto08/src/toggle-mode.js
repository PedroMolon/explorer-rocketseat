let darkMode = true;
const btnToggleTheme = document.getElementById('toggle-theme');

btnToggleTheme.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'light' : 'dark';
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;
  darkMode = !darkMode;
})