/* eslint-disable array-callback-return */
function toggleDark() {
  document.querySelector('.App').classList.toggle('dark-mode');
  Array.from(document.getElementsByTagName('a')).map((a) => {
    a.classList.toggle('dark-mode');
  });
}

function toggleLight() {
  document.querySelector('.App').classList.toggle('light-mode');
  Array.from(document.getElementsByTagName('a')).map((a) => {
    a.classList.toggle('light-mode');
  });
}

const btn = document.querySelector('div .DarkMode');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  toggleDark();
} else if (currentTheme === 'light') {
  toggleLight();
}

if (prefersDarkScheme.matches) {
  btn.textContent = '🌞';
  if (currentTheme === 'light') {
    btn.textContent = '🌚';
  }
} else if (!prefersDarkScheme.matches) {
  btn.textContent = '🌚';
  if (currentTheme === 'dark') {
    btn.textContent = '🌞';
  }
}

btn.addEventListener('click', () => {
  let theme;
  if (prefersDarkScheme.matches) {
    toggleLight();
    theme = document
      .querySelector('.App')
      .classList.contains('light-mode')
      ? 'light'
      : 'dark';
  } else {
    toggleDark();
    theme = document
      .querySelector('.App')
      .classList.contains('dark-mode')
      ? 'dark'
      : 'light';
  }

  if (theme === 'dark') {
    btn.textContent = '🌞';
  } else {
    btn.textContent = '🌚';
  }

  localStorage.setItem('theme', theme);
});
