const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; 
}
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.textContent = '☀️'; 
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.textContent = '🌙'; 
    }
});
