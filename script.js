// ======================
// GENERAL UTILITIES
// ======================

// Year auto-update
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Initialize AOS animations
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .social-icon').forEach(button => {
  button.addEventListener('click', function(e) {
    if (!this.classList.contains('no-ripple')) {
      createRippleEffect(this, e);
    }
  });
});

function createRippleEffect(element, event) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple 0.6s linear;
    width: ${size}px;
    height: ${size}px;
    top: ${y}px;
    left: ${x}px;
    pointer-events: none;
    z-index: 0;
  `;
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode === element) {
      element.removeChild(ripple);
    }
  }, 600);
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Parallax effect for particles
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const particles = document.querySelector('.particles');
  if (particles) {
    particles.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
  
  // Floating elements parallax
  const floatingElements = document.querySelectorAll('.floating-element');
  floatingElements.forEach((el, index) => {
    const speed = 0.1 + (index * 0.05);
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Initialize carousel
const newsCarousel = document.querySelector('#newsCarousel');
if (newsCarousel) {
  new bootstrap.Carousel(newsCarousel, {
    interval: 5000,
    wrap: true
  });
}

// Enhanced card hover effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
  });
});

// ======================
// FORM HANDLERS
// ======================

// Admission Form
function submitAdmission(e){
  e.preventDefault();
  const alertBox = document.getElementById('admissionAlert');
  if (alertBox) {
    alertBox.className = 'alert alert-success';
    alertBox.textContent = 'Application submitted successfully!';
    alertBox.style.display = 'block';
    e.target.reset();
    setTimeout(() => alertBox.style.display = 'none', 4000);
  } else {
    showNotification('Application submitted successfully!', 'success');
  }
  return false;
}

// Contact Form (Updated for FormSubmit.co)
function submitContact(e){
  e.preventDefault();
  
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const message = document.getElementById('cmsg').value.trim();
  
  // Basic validation
  if (!name || !email || !message) {
    showNotification('Please fill in all required fields.', 'danger');
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address.', 'danger');
    return false;
  }
  
  const alertBox = document.getElementById('contactAlert');
  if (alertBox) {
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    submitBtn.disabled = true;
    
    // FormSubmit.co will handle the actual submission
    // We'll show success message after form submission
    setTimeout(() => {
      alertBox.className = 'alert alert-success';
      alertBox.textContent = 'Message sent successfully! We will contact you soon.';
      alertBox.style.display = 'block';
      e.target.reset();
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      setTimeout(() => alertBox.style.display = 'none', 4000);
    }, 1500);
  } else {
    showNotification('Message sent successfully!', 'success');
  }
  
  // FormSubmit.co will handle the submission
  return true;
}

// Result Checker
function showResult(e){
  e.preventDefault();
  const roll = document.getElementById('roll').value.trim();
  const resultBox = document.getElementById('resultOutput');
  
  if (!roll) {
    showNotification('Please enter a roll number.', 'warning');
    return false;
  }
  
  if (resultBox) {
    if (roll === '12345') {
      resultBox.className = 'alert alert-success';
      resultBox.textContent = '🎉 Congratulations! You passed with distinction.';
      resultBox.innerHTML = `
        <div class="d-flex align-items-center">
          <i class="fas fa-trophy fa-2x me-3 text-warning"></i>
          <div>
            <h5 class="mb-1">Congratulations!</h5>
            <p class="mb-0">You passed with distinction.</p>
            <small class="text-muted">Roll Number: ${roll}</small>
          </div>
        </div>
      `;
    } else {
      resultBox.className = 'alert alert-warning';
      resultBox.textContent = 'No result found for Roll Number: ' + roll;
    }
    resultBox.style.display = 'block';
    setTimeout(() => resultBox.style.display = 'none', 5000);
  } else {
    const message = roll === '12345' 
      ? '🎉 Congratulations! You passed with distinction.' 
      : 'No result found for Roll Number: ' + roll;
    showNotification(message, roll === '12345' ? 'success' : 'warning');
  }
  
  e.target.reset();
  return false;
}

// ======================
// GALLERY MODAL
// ======================

// Gallery Modal
function openModal(src){
  const modalImg = document.getElementById('modalImg');
  if (modalImg) {
    modalImg.src = src;
    const modal = new bootstrap.Modal(document.getElementById('imgModal'));
    modal.show();
  }
}

// Initialize gallery click handlers
document.addEventListener('DOMContentLoaded', function() {
  // Gallery items click
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.querySelector('img').src;
      openModal(imgSrc);
    });
  });
});

// ======================
// LOGIN/SIGNUP FORM
// ======================

const loginContainer = document.querySelector('#loginContainer');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

if (loginContainer && registerBtn && loginBtn) {
  registerBtn.addEventListener('click', () => {
    loginContainer.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    loginContainer.classList.remove('active');
  });
}

// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Login successful!', 'success');
    this.reset();
  });
}

// Register form handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Registration successful! Please check your email.', 'success');
    this.reset();
    if (loginContainer) {
      loginContainer.classList.remove('active');
    }
  });
}

// ======================
// NOTIFICATION SYSTEM
// ======================

function showNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>
      ${message}
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    max-width: 400px;
    animation: slideIn 0.3s ease;
  `;
  
  // Append to body
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    background: white;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    overflow: hidden;
  }
  
  .notification-success {
    border-left: 4px solid #198754;
  }
  
  .notification-warning {
    border-left: 4px solid #ffc107;
  }
  
  .notification-danger {
    border-left: 4px solid #dc3545;
  }
  
  .notification-info {
    border-left: 4px solid #0dcaf0;
  }
  
  .notification-content {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
  }
  
  .notification-close:hover {
    color: #000;
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(notificationStyles);

// ======================
// PAGE INITIALIZATION
// ======================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize forms
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', submitAdmission);
  }
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitContact);
  }
  
  const resultForm = document.getElementById('resultForm');
  if (resultForm) {
    resultForm.addEventListener('submit', showResult);
  }
  
  // Initialize topper cards
  document.querySelectorAll('#class-toppers .card').forEach(card => {
    card.addEventListener('click', function() {
      const name = this.querySelector('.card-text').textContent;
      const percentage = this.querySelector('.badge').textContent;
      const className = this.querySelector('.card-title').textContent;
      showNotification(`${className} Topper: ${name} - ${percentage}`, 'info');
    });
  });
  
  // Initialize floating elements animation
  const floatingElements = document.querySelectorAll('.floating-element');
  floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 2}s`;
  });
});
