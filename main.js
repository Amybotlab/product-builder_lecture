document.getElementById('generate').addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    document.getElementById('numbers').textContent = Array.from(numbers).join(', ');
});

const themeSwitcher = document.getElementById('theme-switcher');
const htmlEl = document.documentElement;

const setTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

let currentTheme = localStorage.getItem('theme') || 'light';

setTheme(currentTheme);

themeSwitcher.addEventListener('click', () => {
    currentTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
});
