window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.content', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.read-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 500
});

//Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//dark-mode
function darkMode() {
    var bodyWeb = document.body
    bodyWeb.classList.toggle("dark")
}