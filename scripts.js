// Sidebar

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay')

openBtn.onclick = function () {
    sidebar.style.left = '125px';
    document.body.classList.add('overlay-active');
}


closeBtn.onclick = function () {
    sidebar.style.left = '-250px';
    document.body.classList.remove('overlay-active');
}

overlay.onclick = function () {
    sidebar.style.left = '-250px';
    document.body.classList.remove('overlay-active');
}

// Dark Mode

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};
window.onload = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};

// Ano

document.getElementById("year").textContent = new Date().getFullYear();

// Header

window.addEventListener("scroll", function () {
    var header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Fade

const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

elements.forEach(element => observer.observe(element));

// Autoplay

document.addEventListener("DOMContentLoaded", function () {
    let video = document.querySelector("video");
    video.muted = true;
    video.play().catch(error => console.log("Autoplay bloqueado:", error));
  });