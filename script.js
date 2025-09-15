// Navbar toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll active link highlight + sticky header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Scroll Reveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
    // reset: true, // enable if you want repeat animations
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-container, .achievements-container, .skills-container, .contact-info', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Web Developer',
        'React Enthusiast',
        'Full-Stack Developer',
        'C++ Programmer',
        'Problem Solver'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2500,
    startDelay: 500,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Read More Toggle
function toggleReadMore() {
    const moreText = document.getElementById('moreText');
    const btn = document.querySelector('.read-more-btn');
    moreText.style.display = (moreText.style.display === 'block') ? 'none' : 'block';
    btn.textContent = (btn.textContent === 'Read More') ? 'Read Less' : 'Read More';
}
