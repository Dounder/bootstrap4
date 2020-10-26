window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px'
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px'
});

sr.reveal('.method-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.method-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.variable-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.variable-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.flow-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.flow-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.use-case-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.use-case-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.footer-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.footer-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.5
});

sr.reveal('.read-btn', {
    duration: 2000,
    origin: 'bottom',
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