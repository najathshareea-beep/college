// script.js – Complete
AOS.init({ duration: 1000, once: true });

// Year Update
document.querySelectorAll('#currentYear, #year').forEach(el => {
  if (el) el.textContent = new Date().getFullYear();
});

// Navbar Scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  });
});

// Ripple Effect
document.querySelectorAll('.btn, .social-icon').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    let rect = this.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    let x = e.clientX - rect.left - size/2;
    let y = e.clientY - rect.top - size/2;
    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.6);width:${size}px;height:${size}px;top:${y}px;left:${x}px;transform:scale(0);animation:ripple 0.6s linear;`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);

// Login/Register Toggle (for login.html)
const container = document.querySelector('.container');
if (container) {
  document.querySelector('.register-btn')?.addEventListener('click', () => container.classList.add('active'));
  document.querySelector('.login-btn')?.addEventListener('click', () => container.classList.remove('active'));
}

// Gallery Modal
function openModal(src) {
  document.getElementById('modalImg').src = src;
  new bootstrap.Modal(document.getElementById('imgModal')).show();
}
