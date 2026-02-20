// ============================================
//  JANHVI NIGAM PORTFOLIO — SHARED JS
// ============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.jn-navbar');
  if (nav) {
    nav.style.background = window.scrollY > 40
      ? 'rgba(10,14,23,0.98)'
      : 'rgba(10,14,23,0.92)';
  }
});

// Scroll fade-in animation using IntersectionObserver
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // slight stagger for sibling cards
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(fadeEls).indexOf(entry.target) % 4));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Typewriter effect on hero name (index.html only)
const heroName = document.querySelector('.hero-name');
if (heroName) {
  const text = heroName.textContent;
  // just ensure it's visible — no need to re-type full name
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active nav link highlighting based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
