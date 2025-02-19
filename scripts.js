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

// Carrosel

let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const carousel = document.getElementById("carousel");
        let intervalTime = 5000; // Tempo padrão por slide
        
        function updateSlide() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
            resetTimer();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
            resetTimer();
        }
        
        function autoSlide() {
            nextSlide();
        }
        
        function resetTimer() {
            clearInterval(slideInterval);
            slideInterval = setInterval(autoSlide, intervalTime);
        }
        
        let slideInterval = setInterval(autoSlide, intervalTime);
        
        // Ajuste do tempo para o primeiro slide (vídeo)
        window.onload = function() {
            setTimeout(() => {
                nextSlide();
                slideInterval = setInterval(autoSlide, intervalTime);
            }, 5000); // Tempo do vídeo
        };