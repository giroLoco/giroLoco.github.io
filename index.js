const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

// Per un menu interattivo
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Chiudi automaticamente la navbar su clic da mobile
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simula un clic sul pulsante per chiudere la navbar
        }
    });
});

document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        // Aggiungi un listener per la fine della transizione
        link.addEventListener('transitionend', function handleTransitionEnd(event) {
            if (event.propertyName === 'width' || event.propertyName === 'left') {
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Chiudi la navbar
                }
                link.removeEventListener('transitionend', handleTransitionEnd); // Rimuovi l'evento per evitare duplicazioni
            }
        });
    });
});



window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle("scrolled", scrolled);
    hero.classList.toggle("scrolled", scrolled);
});


// Animazione per la sezione "About"
const aboutSection = document.querySelector("#about");
document.addEventListener("scroll", () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add("visible");
    }
});

// Navbar 
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//alert di conferma al clic sul pulsante Invia Messaggio
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita il comportamento predefinito
    alert('Grazie per avermi contattato! Ti risponderò al più presto.');
    this.reset(); // Resetta il modulo
});


