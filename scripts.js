// Sidebar e Habacuque

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay')
const habacuque = document.getElementById('habacuque');
const isaias = document.getElementById('isaias');
const box = document.getElementById('box');
const passagem = document.getElementById('passagem');
const darkModeToggle = document.getElementById('toggle-dark-mode');

openBtn.onclick = function () {
    sidebar.style.left = '125px';
    document.body.classList.add('overlay-active');
}

habacuque.onclick = function () {
    passagem.innerHTML = '"Vede entre as nações, e olhai, e maravilhai-vos, e admirai-vos; porque realizo, em vossos dias, uma obra, que vós não crereis, quando vos for contada." <br>   <span id="ac">ARC - Almeida Revista e Corrigida</span>';
    document.body.classList.add('overlay-active');
    box.classList.add('box-active');
}

isaias.onclick = function () {
passagem.innerHTML = '"Amplia o lugar da tua tenda, e as cortinas das tuas habitações se estendam; não o impeças; alonga as tuas cordas e firma bem as tuas estacas. Porque trasbordarás à mão direita e à esquerda; e a tua posteridade possuirá as nações e fará que sejam habitadas as cidades assoladas." <br>   <span id="ac">ARC - Almeida Revista e Corrigida</span>';
    document.body.classList.add('overlay-active');
    box.classList.add('box-active');
}

closeBtn.onclick = function () {
    sidebar.style.left = '-250px';
    document.body.classList.remove('overlay-active');
}

overlay.onclick = function () {
    sidebar.style.left = '-250px';
    document.body.classList.remove('overlay-active');
    box.classList.remove('box-active');
}

// Dark Mode

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Atualiza o texto do botão
    darkModeToggle.innerHTML = isDarkMode ? 'Modo Claro' : 'Modo Escuro';

    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', isDarkMode);
};

window.onload = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Define o texto inicial do botão corretamente
    darkModeToggle.innerHTML = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
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