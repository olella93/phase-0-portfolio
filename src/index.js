
document.addEventListener('DOMContentLoaded', function() {
    // ===== A. Scroll Animations =====
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.about, .projects, .contact');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 150) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };

    // Call the animateOnScroll function
    animateOnScroll();
});