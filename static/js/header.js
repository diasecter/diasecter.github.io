// FAQ Icon Toggle
const faqIcon = document.getElementById('faqIcon');
const faqPopup = document.getElementById('faqPopup');

faqIcon.addEventListener('click', () => {
    faqPopup.style.display = faqPopup.style.display === 'block' ? 'none' : 'block';
    profilePopup.style.display = 'none'; // Close profile popup if open
    notifPopup.style.display = 'none'; // Close notif popup if open
});

// Notifivation Icon Toggle
const notifIcon = document.getElementById('notifIcon');
const notifPopup = document.getElementById('notifPopup');

notifIcon.addEventListener('click', () => {
    notifPopup.style.display = notifPopup.style.display === 'block' ? 'none' : 'block';
    profilePopup.style.display = 'none'; // Close profile popup if open
    faqPopup.style.display = 'none'; // Close FAQ popup if open
});


// Profile Icon Toggle
const profileIcon = document.getElementById('profileIcon');
const profilePopup = document.getElementById('profilePopup');

profileIcon.addEventListener('click', () => {
    profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    faqPopup.style.display = 'none'; // Close FAQ popup if open
    notifPopup.style.display = 'none'; // Close notif popup if open
});

// Close Popups when clicking outside
document.addEventListener('click', (e) => {
    if (!faqIcon.contains(e.target) && !faqPopup.contains(e.target)) {
        faqPopup.style.display = 'none';
    }
    if (!profileIcon.contains(e.target) && !profilePopup.contains(e.target)) {
        profilePopup.style.display = 'none';
    }
    if (!notifIcon.contains(e.target) && !notifPopup.contains(e.target)) {
        notifPopup.style.display = 'none';
    }
});

function getRandomColor() {
    // Génère une couleur aléatoire au format hexadécimal
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getTextColorBasedOnBackground(bgColor) {
    // Calcule la luminosité de la couleur pour déterminer le contraste
    const r = parseInt(bgColor.substr(1, 2), 16); // Rouge
    const g = parseInt(bgColor.substr(3, 2), 16); // Vert
    const b = parseInt(bgColor.substr(5, 2), 16); // Bleu
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
}

function setCircleStyle() {
    const circle = document.querySelector('.initial-circle');
    if (!circle) return;

    const randomColor = getRandomColor();
    const textColor = getTextColorBasedOnBackground(randomColor);

    circle.style.backgroundColor = randomColor;
    circle.style.color = textColor;
}

// Appelle la fonction au chargement de la page
window.onload = setCircleStyle;



// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to navbar links on scroll
    const sections = document.querySelectorAll('.scroll-section');
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`a[href="#${id}"]`);

            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});
