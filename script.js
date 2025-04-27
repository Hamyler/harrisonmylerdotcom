// Elements
const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enter-btn');
const siteContent = document.getElementById('site-content');
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');
const reveals = document.querySelectorAll('.reveal');

// Splash logic
enterBtn.addEventListener('click', () => {
  splash.classList.add('sneak');
  siteContent.classList.remove('hidden');
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));