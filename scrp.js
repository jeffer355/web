// 1. Manejo del Scroll para el Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Lógica del Menú Hamburguesa para móviles
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Opcional: Pequeña animación visual del botón si quieres
        const spans = menuToggle.querySelectorAll('span');
        menuToggle.classList.toggle('is-open'); 
    });
}

// 3. Cerrar el menú automáticamente al hacer clic en un enlace (Anclas)
const navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});