// Initialize AOS
AOS.init({ duration: 1000, once: true, offset: 100 });

// Current Year
document.getElementById('currentYear') && (document.getElementById('currentYear').textContent = new Date().getFullYear());
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Navbar Scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
    }
  });
});

// Ripple Effect
document.querySelectorAll('.btn, .social-icon').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `position:absolute; border-radius:50%; background:rgba(255,255,255,0.6); transform:scale(0); animation:ripple 0.6s linear; width:${size}px; height:${size}px; top:${y}px; left:${x}px;`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);

// Login/Register Toggle
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
if (container && registerBtn && loginBtn) {
  registerBtn.addEventListener('click', () => container.classList.add('active'));
  loginBtn.addEventListener('click', () => container.classList.remove('active'));
}

// Form Submissions
function submitAdmission(e) {
  e.preventDefault();
  showAlert('admissionAlert', 'Application submitted successfully!', 'success');
  e.target.reset();
}
function submitContact(e) {
  e.preventDefault();
  showAlert('contactAlert', 'Message sent successfully!', 'success');
  e.target.reset();
}
function showResult(e) {
  e.preventDefault();
  const roll = document.getElementById('roll')?.value.trim();
  const output = document.getElementById('resultOutput');
  if (roll === '12345') {
    output.className = 'alert alert-success';
    output.textContent = 'Congratulations! You passed with distinction.';
  } else {
    output.className = 'alert alert-warning';
    output.textContent = 'No result found for Roll Number: ' + roll;
  }
  output.style.display = 'block';
  setTimeout(() => output.style.display = 'none', 5000);
}
function showAlert(id, msg, type) {
  const alert = document.getElementById(id);
  if (alert) {
    alert.className = `alert alert-${type}`;
    alert.textContent = msg;
    alert.style.display = 'block';
    setTimeout(() => alert.style.display = 'none', 4000);
  }
}

// Gallery Modal
function openModal(src) {
  const modalImg = document.getElementById('modalImg');
  if (modalImg) {
    modalImg.src = src;
    new bootstrap.Modal(document.getElementById('imgModal')).show();
  }
}

// Parallax & Floating Effects (existing)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.particle, .floating-element').forEach(el => {
    const speed = el.dataset.speed || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
