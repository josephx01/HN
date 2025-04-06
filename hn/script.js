// Hamburger menyu funksionallığı - Sadələşdirilmiş versiya
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        // Hamburger ikonasını dəyişdirmək
        this.classList.toggle('active');
        
        // Menyunun görünürlüyünü dəyişdirmək
        navMenu.classList.toggle('active');
    });
    
    // Menyu linkləri üçün hadisə dinləyicisi
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Menyunu bağlamaq
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
