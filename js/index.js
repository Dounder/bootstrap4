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

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.up-container')
            .classList.add('show')
    } else {
        document.querySelector('.up-container')
            .classList.remove('show')
    }
}

document.querySelector('.up-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})