// src/utils/scrollAnimations.js - Scroll Animation Utilities
export const initScrollAnimations = () => {
  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimations = () => {
    const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('revealed');
      }
    });
  };

  // Initialize scroll animations
  handleScrollAnimations();

  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);

  // Add resize event listener to recalculate on window resize
  window.addEventListener('resize', handleScrollAnimations);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScrollAnimations);
    window.removeEventListener('resize', handleScrollAnimations);
  };
};

// Function to add parallax effect to elements
export const initParallax = () => {
  const handleParallax = () => {
    const elements = document.querySelectorAll('.parallax-element');
    const scrolled = window.pageYOffset;

    elements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };

  // Add scroll event listener for parallax
  window.addEventListener('scroll', handleParallax);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleParallax);
  };
};