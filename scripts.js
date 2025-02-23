// Sidebar

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay')

openBtn.onclick = function() {
    sidebar.style.left = '125px'; 
    document.body.classList.add('overlay-active');
}


closeBtn.onclick = function() {
    sidebar.style.left = '-250px'; 
    document.body.classList.remove('overlay-active');
}

overlay.onclick = function() {
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

window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  
  if (window.scrollY > 50) {
      header.classList.add("scrolled"); 
  } else {
      header.classList.remove("scrolled");
  }
});

// Carrossel

const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;
let autoPlayInterval;
let startX;

// Criar indicadores
slideElements.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(dot);
});

const updateIndicators = () => {
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
};

const goToSlide = (index) => {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
    resetAutoPlay();
    if (index === 0) document.querySelector("video").play();
};

const nextSlide = () => goToSlide((currentIndex + 1) % slideElements.length);
const prevSlide = () => goToSlide((currentIndex - 1 + slideElements.length) % slideElements.length);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// AutoPlay
const startAutoPlay = () => autoPlayInterval = setInterval(nextSlide, 5000);
const resetAutoPlay = () => { clearInterval(autoPlayInterval); startAutoPlay(); };
startAutoPlay();

// Arraste para mover
slides.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
slides.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
});