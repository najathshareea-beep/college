</main>

<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4" data-aos="fade-up">
        <div class="footer-brand">DSAC</div>
        <p class="text-light opacity-75">
          Darunnajath Shareeath & Arts College<br>
          Punnakkad, Karuvarakundu<br>
          Affiliated to Jamia Nooriyya Arabiyya, Pattikkad
        </p>
        <div class="social-links">
          <a href="https://facebook.com/" class="social-icon" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/" class="social-icon" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/" class="social-icon" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com/" class="social-icon" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
        <div class="footer-links">
          <h5>Quick Links</h5>
          <a href="index.php">Home</a>
          <a href="admission.php">Admissions</a>
          <a href="result.php">Results</a>
          <a href="gallery.php">Gallery</a>
          <a href="contact.php">Contact</a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
        <div class="footer-links">
          <h5>Resources</h5>
          <a href="downloads.php">Downloads</a>
          <a href="library.php">Library</a>
          <a href="faculties.php">Faculty</a>
          <a href="management.php">Management</a>
          <a href="pta.php">PTA</a>
        </div>
      </div>
      <div class="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
        <div class="footer-links">
          <h5>Contact Info</h5>
          <p class="text-light opacity-75">
            <i class="fas fa-envelope me-2"></i>najathshareea@gmail.com<br>
            <i class="fas fa-phone me-2"></i>+91 9048020243<br>
            <i class="fas fa-map-marker-alt me-2"></i>Karuvarakundu, Kerala
          </p>
        </div>
      </div>
    </div>
    <div class="text-center pt-4 mt-4 border-top border-light border-opacity-25">
      <p class="text-light mb-2">
        © <span id="currentYear"></span> Darunnajath Shareeath & Arts College. All rights reserved.
      </p>
      <small class="text-light opacity-75">
        Hosted by <span>Rafi Wafi</span>
        <?php 
          $currentPage = basename($_SERVER['PHP_SELF']);
          if($currentPage == 'downloads.php') echo ' | Downloads Portal';
          if($currentPage == 'founder.php') echo ' | Founder Page';
          if($currentPage == 'management.php') echo ' | Management Portal';
        ?>
      </small>
    </div>
  </div>
</footer>

<a href="https://wa.me/919048020243?text=Hello%20Darunnajath%20Shareeath%20%26%20Arts%20College!"
   class="whatsapp-float" target="_blank"
   title="Chat with us on WhatsApp" aria-label="WhatsApp Chat">
  <i class="fab fa-whatsapp"></i>
</a>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  // Initialize AOS
  AOS.init({duration: 800, once: true, offset: 50, disable: window.innerWidth < 768});
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-optimized');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('scrolled', scrollTop > 50);
    if (window.innerWidth <= 768) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = window.innerWidth <= 768 ? 70 : 80;
          window.scrollTo({top: target.offsetTop - offset, behavior: 'smooth'});
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
          }
        }
      }
    });
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.navbar-nav .nav-link-optimized:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    });
  });
  
  // Parallax effect for ornaments
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
      const scrolled = window.pageYOffset;
      const ornaments = document.querySelectorAll('.islamic-ornament');
      ornaments.forEach((ornament, index) => {
        const speed = 0.05 * (index + 1);
        ornament.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
      });
    }
  });
  
  // Fade in effect on page load
  window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {document.body.style.opacity = '1';}, 50);
  });
</script>

<?php
// Page-specific scripts
$currentPage = basename($_SERVER['PHP_SELF']);
if($currentPage == 'downloads.php') {
    echo '<script src="downloads-script.js"></script>';
}
?>

</body>
</html>
