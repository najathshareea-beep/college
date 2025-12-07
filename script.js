// ======================
// CONTACT FORM WITH FORMSUBMIT.CO
// ======================

// Contact Form
function submitContact(e){
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('cname')?.value.trim() || '';
  const email = document.getElementById('cemail')?.value.trim() || '';
  const message = document.getElementById('cmsg')?.value.trim() || '';
  
  // Validation
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
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';
  submitBtn.disabled = true;
  
  // Prepare form data for FormSubmit.co
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);
  formData.append('_subject', 'New Message from DSAC College');
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');
  
  // Send to FormSubmit.co
  fetch('https://formsubmit.co/ajax/najathshareea@gmail.com', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === 'true') {
      // Show success message
      const alertBox = document.getElementById('contactAlert');
      if (alertBox) {
        alertBox.className = 'alert alert-success show';
        alertBox.innerHTML = `
          <div class="d-flex align-items-center">
            <i class="fas fa-check-circle fa-2x me-3 text-success"></i>
            <div>
              <h5 class="mb-1">Message Sent Successfully!</h5>
              <p class="mb-0">Thank you ${name}. Email sent to najathshareea@gmail.com</p>
              <small class="text-muted">An auto-reply has been sent to ${email}</small>
            </div>
          </div>
        `;
        alertBox.style.display = 'block';
        
        // Hide alert after 5 seconds
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 5000);
      } else {
        showNotification('Message sent successfully! Check your email for confirmation.', 'success');
      }
      
      // Reset form
      e.target.reset();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showNotification('Failed to send message. Please try again or email directly to najathshareea@gmail.com', 'danger');
  })
  .finally(() => {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  });
  
  return false;
}

// Alternative: Direct email link (backup)
function sendDirectEmail() {
  const name = document.getElementById('cname')?.value.trim() || '';
  const email = document.getElementById('cemail')?.value.trim() || '';
  const message = document.getElementById('cmsg')?.value.trim() || '';
  
  if (!name || !email || !message) {
    showNotification('Please fill all fields first.', 'warning');
    return;
  }
  
  const subject = `Contact Form: ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nSent from DSAC College Contact Form`;
  
  window.location.href = `mailto:najathshareea@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  showNotification('Email client opened. Please click "Send" to complete.', 'info');
}

// ======================
// OTHER FUNCTIONS (Keep as is)
// ======================

// Year auto-update
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Admission Form
function submitAdmission(e){
  e.preventDefault();
  const alertBox = document.getElementById('admissionAlert');
  alertBox.className = 'alert alert-success';
  alertBox.textContent = 'Application submitted successfully!';
  alertBox.style.display = 'block';
  e.target.reset();
  setTimeout(()=> alertBox.style.display='none', 4000);
  return false;
}

// Result Checker
function showResult(e){
  e.preventDefault();
  const roll = document.getElementById('roll').value.trim();
  const resultBox = document.getElementById('resultOutput');
  
  if(roll === '12345'){
    resultBox.className = 'alert alert-success';
    resultBox.textContent = '🎉 Congratulations! You passed with distinction.';
  } else {
    resultBox.className = 'alert alert-warning';
    resultBox.textContent = 'No result found for Roll Number: ' + roll;
  }
  resultBox.style.display = 'block';
  setTimeout(()=> resultBox.style.display='none', 5000);
  e.target.reset();
  return false;
}

// Gallery Modal
function openModal(src){
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  const modal = new bootstrap.Modal(document.getElementById('imgModal'));
  modal.show();
}

// Login/Signup toggle
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

if (registerBtn && loginBtn) {
  registerBtn.addEventListener('click', () => {
    container.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Bind contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitContact);
  }
  
  // Bind admission form
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', submitAdmission);
  }
  
  // Bind result form
  const resultForm = document.getElementById('resultForm');
  if (resultForm) {
    resultForm.addEventListener('submit', showResult);
  }
});
