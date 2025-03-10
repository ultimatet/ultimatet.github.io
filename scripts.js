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
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 }); // Trigger when 10% of the element is visible

const observer1 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
            } else {
                entry.target.classList.remove('animation');
            }
        });
    },
    { threshold: 0.3 } // Adjust rootMargin
);

// Observe all sections and projects
sections.forEach((section) => observer.observe(section));
projects.forEach((project) => observer1.observe(project));


