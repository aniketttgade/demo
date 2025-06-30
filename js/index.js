// Set the current date
const dateElement = document.getElementById('current-date');
const today = new Date();
dateElement.textContent = today.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

// Set the current year for the footer
const yearElement = document.getElementById('current-year');
yearElement.textContent = today.getFullYear();

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('main-nav-list');
hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
});
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        navList.classList.toggle('open');
    }
}); 