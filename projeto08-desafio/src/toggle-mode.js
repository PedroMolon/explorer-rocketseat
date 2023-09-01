let lightMode = true;
const btnToggleMode = document.querySelector('#toggle-mode');

btnToggleMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark');

  const mode = lightMode ? 'dark' : 'light';
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;
  lightMode = !lightMode;
})