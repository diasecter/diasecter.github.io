document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const typingEffectElement = document.querySelector('.typing-effect');
    const text = typingEffectElement.getAttribute('data-text'); // Get text dynamically

    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            typingEffectElement.textContent = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
                return;
            }
        } else {
            typingEffectElement.textContent = text.substring(0, index);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }

    type();
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        const headerHeight = 80; // Adjust based on your header height
        const offset = section.offsetTop - headerHeight;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

function goDirect() {
    window.location.href = '/diasecter'; // Replace with your desired URL or action
}