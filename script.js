document.addEventListener('DOMContentLoaded', () => {
    
    // Message "Secret" dans la console
    console.log("%c NextForgeLab ", "color: #1a1a2e; background: #00d4ff; font-size: 20px; padding: 5px; border-radius: 5px;");
    console.log("Bienvenue dans la forge ! Prêt à coder ? 🔨");

    // Animation au scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // On arrête d'observer une fois animé
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // L'élément doit être visible à 15% pour déclencher
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Petit effet fun sur le logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        logo.style.transform = "rotate(360deg)";
        logo.style.transition = "transform 0.6s ease";
        setTimeout(() => {
            logo.style.transform = "rotate(0deg)";
        }, 600);
    });
});
