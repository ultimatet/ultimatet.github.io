// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("nav-toggle");
    const navbar = document.getElementById("navbar");
    const overlay = document.getElementById("navbar-overlay");
    const logoutButton = document.getElementById("logout");

    // Toggle menu visibility
    function toggleMenu() {
        const isOpen = navbar.classList.contains("open");
        navbar.classList.toggle("open");
        overlay.classList.toggle("open");
    }

    toggleButton.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu); // Close menu on clicking the overlay

    // Logout function (simulate redirect or action)
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        alert("Logging out...");
        // Here you could redirect: window.location.href = "/Signin.html";
    });
});
