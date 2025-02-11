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
