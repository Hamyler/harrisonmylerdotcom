// ======= Utility Functions =======
function qs(selector, parent=document) { return parent.querySelector(selector); }
function qsa(selector, parent=document) { return [...parent.querySelectorAll(selector)]; }

// ======= Preloader =======
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
  const pre = qs('#preloader');
  pre && pre.classList.add('hide');
});

// ======= Navigation Toggle =======
const navToggle = qs('.nav-toggle');
const navList = qs('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// ======= Smooth Scroll =====
qsa('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = qs(link.getAttribute('href'));
    target && target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ======= Section Reveal =======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

qsa('.fade-in').forEach(el => observer.observe(el));

// ======= Project Filter =======
const filterBtns = qsa('.filter-btn');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  const cat = btn.dataset.filter;
  filterBtns.forEach(b => b.classList.toggle('active', b === btn));
  qsa('.project-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'block' : 'none';
  });
}));

// ======= Contact Form Validation =======
const form = qs('#contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    qsa('.form-group').forEach(group => {
      const input = qs('input, textarea', group);
      if (!input.checkValidity()) {
        group.classList.add('invalid');
        valid = false;
      } else {
        group.classList.remove('invalid');
      }
    });
    if (valid) {
      qs('#form-status').textContent = 'Message sent!';
      form.reset();
    }
  });
}

// ======= Login Modal Simplicity =======
const loginForm = qs('#login-form');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Logged in successfully!'); // placeholder
  });
}