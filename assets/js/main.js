// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial-card-content');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!testimonials.length || !dotsContainer) return;

  let currentSlide = 0;
  let autoplayInterval;

  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.testimonial-dot');

  function goToSlide(index) {
    testimonials[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % testimonials.length);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();

  // Pause on hover
  const carousel = document.querySelector('.testimonial-card');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    carousel.addEventListener('mouseleave', startAutoplay);
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 50
      ? '0 2px 10px rgba(0, 0, 0, 0.1)'
      : '0 1px 2px rgba(0, 0, 0, 0.05)';
  }
});
