<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DSAC | <?php echo isset($pageTitle) ? $pageTitle : 'Home'; ?></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="common.css">
</head>
<body>
<div class="islamic-ornament ornament-1">✸</div>
<div class="islamic-ornament ornament-2">✸</div>
<div class="islamic-ornament ornament-3">✸</div>

<nav class="navbar navbar-expand-lg navbar-optimized fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center navbar-brand-compact" href="index.php">
      <img src="https://i.postimg.cc/rmS5jXXX/COLLEGE-LOGO.png" alt="DSAC Logo" class="me-2">
      <div class="d-flex flex-column">
        <span class="text-white fw-bold brand-text">DSAC</span>
        <small class="text-light brand-subtext">Karuvarakundu</small>
      </div>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
            aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto nav-container">
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>" 
             href="index.php">Home</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'founder.php' ? 'active' : ''; ?>" 
             href="founder.php">Founder</a>
        </li>
        <li class="nav-item dropdown nav-item-optimized">
          <a class="nav-link-optimized dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">Board</a>
          <ul class="dropdown-menu dropdown-menu-optimized">
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'management.php' ? 'active' : ''; ?>" 
                 href="management.php">Management</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'faculties.php' ? 'active' : ''; ?>" 
                 href="faculties.php">Faculty</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'pta.php' ? 'active' : ''; ?>" 
                 href="pta.php">PTA</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'alumni.php' ? 'active' : ''; ?>" 
                 href="alumni.php">Alumni</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'students-union.php' ? 'active' : ''; ?>" 
                 href="students-union.php">Students Union</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown nav-item-optimized">
          <a class="nav-link-optimized dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">Student Zone</a>
          <ul class="dropdown-menu dropdown-menu-optimized">
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'idcard.php' ? 'active' : ''; ?>" 
                 href="idcard.php">ID Card</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'result.php' ? 'active' : ''; ?>" 
                 href="result.php">Exam Results</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-item-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'fest.php' ? 'active' : ''; ?>" 
                 href="fest.php">Fest Score</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized" href="https://jamianooriya.in/">Jamia</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'downloads.php' ? 'active' : ''; ?>" 
             href="downloads.php">Downloads</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'gallery.php' ? 'active' : ''; ?>" 
             href="gallery.php">Gallery</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'library.php' ? 'active' : ''; ?>" 
             href="library.php">Library</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'admission.php' ? 'active' : ''; ?>" 
             href="admission.php">Admission</a>
        </li>
        <li class="nav-item nav-item-optimized">
          <a class="nav-link-optimized <?php echo basename($_SERVER['PHP_SELF']) == 'contact.php' ? 'active' : ''; ?>" 
             href="contact.php">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main>
