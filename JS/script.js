
  // Animated CTA Button Click Handler
        document.getElementById('animatedCTA').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find which slide is currently visible
            const slides = this.querySelectorAll('.slide-item');
            let currentSlide = null;
            
            slides.forEach(slide => {
                const rect = slide.getBoundingClientRect();
                const buttonRect = this.getBoundingClientRect();
                
                // Check if slide is in the visible area of the button
                if (rect.left >= buttonRect.left && rect.right <= buttonRect.right) {
                    currentSlide = slide;
                }
            });
            
            // If we found a visible slide, redirect to its link
            if (currentSlide) {
                const link = currentSlide.getAttribute('data-link');
                if (link === '#') {
                    // If it's the "Hit me up" text, open the social popup
                    openSocialPopup();
                } else {
                    // Otherwise open the social media link
                    window.open(link, '_blank');
                }
            }
        });

        // Social Media Popup Functions
        function openSocialPopup() {
            document.getElementById('socialPopup').classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeSocialPopup(event) {
            // Close only if clicking overlay or close button
            if (!event || event.target.classList.contains('social-popup-overlay') || event.target.classList.contains('popup-close')) {
                document.getElementById('socialPopup').classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        }

        // Close popup with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeSocialPopup();
            }
        });


// CV Download Function
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Fahad_skder_CV.pdf';
    link.download = 'Fahad_Sikder_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Downloading CV...');
}

// Active state management for navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
});

// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (barPosition < screenPosition) {
            bar.style.width = bar.style.width;
        }
    });
};

window.addEventListener('scroll', animateSkills);