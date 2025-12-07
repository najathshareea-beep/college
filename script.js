// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Update current year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

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
  document.querySelectorAll('.btn-primary, .social-icon, .btn').forEach(button => {
    button.addEventListener('click', function(e) {
      if (!this.classList.contains('no-ripple')) {
        createRippleEffect(this, e);
      }
    });
  });

  // Initialize carousel
  const newsCarousel = document.querySelector('#newsCarousel');
  if (newsCarousel) {
    new bootstrap.Carousel(newsCarousel, {
      interval: 5000,
      wrap: true,
      pause: 'hover'
    });
  }

  // Parallax effects
  window.addEventListener('scroll', function() {
    applyParallaxEffects();
  });

  // Card hover effects
  initializeCardHoverEffects();

  // Initialize news ticker
  initializeNewsTicker();

  // Initialize toppers section
  initializeToppers();

  // Initialize login form
  initializeLoginForm();

  // Form handling functions
  setupFormHandlers();
});

// Helper Functions
function createRippleEffect(element, event) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
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

function applyParallaxEffects() {
  const scrolled = window.pageYOffset;
  
  // Particle parallax
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
}

function initializeCardHoverEffects() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      if (!this.classList.contains('no-hover')) {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('no-hover')) {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
      }
    });
  });
}

function initializeNewsTicker() {
  const tickerContent = document.querySelector('.news-ticker-content');
  if (tickerContent) {
    // Clone content for seamless scrolling
    const content = tickerContent.innerHTML;
    tickerContent.innerHTML += content;
  }
}

function initializeToppers() {
  // Add click events to topper cards
  document.querySelectorAll('#class-toppers .card').forEach(card => {
    card.addEventListener('click', function() {
      const name = this.querySelector('.card-text').textContent;
      const percentage = this.querySelector('.badge').textContent;
      const className = this.querySelector('.card-title').textContent;
      showNotification(`${className} Topper: ${name} - ${percentage}`, 'info');
    });
  });
}

function initializeLoginForm() {
  const container = document.getElementById('loginContainer');
  const registerBtn = document.querySelector('.register-btn');
  const loginBtn = document.querySelector('.login-btn');
  
  if (container && registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
      container.classList.add('active');
    });
    
    loginBtn.addEventListener('click', () => {
      container.classList.remove('active');
    });
    
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Login successful!', 'success');
        this.reset();
      });
    }
    
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Registration successful! Please check your email.', 'success');
        this.reset();
        container.classList.remove('active');
      });
    }
  }
}

function setupFormHandlers() {
  // Admission Form Handler
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const alertBox = document.getElementById('admissionAlert');
      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.textContent = 'Application submitted successfully!';
        alertBox.style.display = 'block';
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 4000);
      } else {
        showNotification('Application submitted successfully!', 'success');
      }
      this.reset();
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const alertBox = document.getElementById('contactAlert');
      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.textContent = 'Message sent successfully!';
        alertBox.style.display = 'block';
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 4000);
      } else {
        showNotification('Message sent successfully!', 'success');
      }
      this.reset();
    });
  }

  // Result Checker Handler
  const resultForm = document.getElementById('resultForm');
  if (resultForm) {
    resultForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const roll = document.getElementById('roll').value.trim();
      const resultBox = document.getElementById('resultOutput');
      
      if (roll === '12345') {
        if (resultBox) {
          resultBox.className = 'alert alert-success';
          resultBox.textContent = '🎉 Congratulations! You passed with distinction.';
          resultBox.style.display = 'block';
          setTimeout(() => {
            resultBox.style.display = 'none';
          }, 5000);
        } else {
          showNotification('🎉 Congratulations! You passed with distinction.', 'success');
        }
      } else {
        if (resultBox) {
          resultBox.className = 'alert alert-warning';
          resultBox.textContent = 'No result found for Roll Number: ' + roll;
          resultBox.style.display = 'block';
          setTimeout(() => {
            resultBox.style.display = 'none';
          }, 5000);
        } else {
          showNotification('No result found for Roll Number: ' + roll, 'warning');
        }
      }
      this.reset();
    });
  }
}

// Gallery Modal Function
function openModal(src) {
  const modalImg = document.getElementById('modalImg');
  if (modalImg) {
    modalImg.src = src;
    const modal = new bootstrap.Modal(document.getElementById('imgModal'));
    modal.show();
  }
}

// Advanced Topper Functions
function showAdvancedToppers() {
  const advancedSection = document.getElementById('advanced-toppers');
  if (advancedSection) {
    advancedSection.style.display = 'block';
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
      reveal.classList.add('active');
    });
  }
}

function hideAdvancedToppers() {
  const advancedSection = document.getElementById('advanced-toppers');
  if (advancedSection) {
    advancedSection.style.display = 'none';
  }
}

// Notification System
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification-alert');
  existingNotifications.forEach(notification => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  });

  const notification = document.createElement('div');
  notification.className = `alert alert-${type} notification-alert`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
    min-width: 300px;
    max-width: 400px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  `;
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: 5px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: inherit;
  `;
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  });
  
  notification.appendChild(closeBtn);
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 5000);
}

// Add fadeOut animation if not present
if (!document.querySelector('#notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
    
    .notification-alert {
      padding-right: 40px;
    }
    
    .alert-success {
      background: linear-gradient(135deg, #198754, #157347);
      color: white;
      border: none;
    }
    
    .alert-warning {
      background: linear-gradient(135deg, #ffc107, #e0a800);
      color: #212529;
      border: none;
    }
    
    .alert-info {
      background: linear-gradient(135deg, #0dcaf0, #0aa2c0);
      color: white;
      border: none;
    }
    
    .alert-danger {
      background: linear-gradient(135deg, #dc3545, #c82333);
      color: white;
      border: none;
    }
  `;
  document.head.appendChild(style);
}

// Page-specific initialization
function initializePage() {
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'gallery.html':
      initializeGallery();
      break;
    case 'faculties.html':
      initializeFaculties();
      break;
    case 'result.html':
      initializeResultPage();
      break;
    case 'login.html':
      showLoginForm();
      break;
  }
}

function initializeGallery() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.querySelector('img').src;
      openModal(imgSrc);
    });
  });
}

function initializeFaculties() {
  document.querySelectorAll('#faculties .rounded-circle').forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
    });
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '';
    });
  });
}

function initializeResultPage() {
  const resultBtn = document.querySelector('#result .btn-success');
  if (resultBtn) {
    resultBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 8px 15px rgba(0, 128, 0, 0.2)';
    });
    resultBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  }
}

function showLoginForm() {
  const loginFormContainer = document.getElementById('login-form-container');
  if (loginFormContainer) {
    loginFormContainer.style.display = 'block';
    document.getElementById('loginContainer').classList.remove('active');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
window.addEventListener('scroll', debounce(applyParallaxEffects, 10));

// Performance optimization: Intersection Observer for lazy loading
const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (element.classList.contains('reveal')) {
        element.classList.add('active');
      }
      observer.unobserve(element);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
