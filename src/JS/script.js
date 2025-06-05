const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target)) {
        menu.classList.remove('active');
    }
});