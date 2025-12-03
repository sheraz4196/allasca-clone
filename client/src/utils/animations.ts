
export const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Use a single observer for all animated elements
  const mainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    mainObserver.observe(el);
  });

  // Setup hover animations with passive event listeners
  const hoverElements = document.querySelectorAll('.hover-animate');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('hover-active');
    }, { passive: true });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('hover-active');
    }, { passive: true });
  });
  
  // Use a single observer for zoom and fade animations
  const zoomElements = document.querySelectorAll('.zoom-animate');
  const fadeElements = document.querySelectorAll('.fade-animate');
  
  if (zoomElements.length > 0 || fadeElements.length > 0) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('zoom-animate')) {
            entry.target.classList.add('animate-zoom');
          }
          if (entry.target.classList.contains('fade-animate')) {
            entry.target.classList.add('animate-fade-in');
          }
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    zoomElements.forEach(el => animationObserver.observe(el));
    fadeElements.forEach(el => animationObserver.observe(el));
  }
};
