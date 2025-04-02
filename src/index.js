document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        once: false,
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        
        // Save preference to localStorage
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });

    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Magnetic Button Effect
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            btn.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
        });
    });

    // Initialize Particle.js
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ba55d3" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#8a2be2", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            }
        });
    }

    // Initialize Particle.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800, // Density of particles
                },
            },
            color: {
                value: '#ffffff', // Particle color
            },
            shape: {
                type: 'circle', // Shape of particles (circle, edge, triangle, etc.)
            },
            opacity: {
                value: 0.5, // Opacity of particles
                random: false,
            },
            size: {
                value: 3, // Size of particles
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150, // Distance between linked particles
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2, // Speed of particle movement
                direction: 'none', // Direction of movement
                random: false,
                straight: false,
                out_mode: 'out', // Behavior when particles go out of bounds
                bounce: false,
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab', // Interaction mode (grab, bubble, repulse)
                },
                onclick: {
                    enable: true,
                    mode: 'push', // Interaction mode on click (push, remove, bubble, repulse)
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true, // Enable retina display support
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});