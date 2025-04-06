const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

(function() {
  emailjs.init("ONEAQPN5FkxLsCzJz");
})();
const kontaktForm = document.getElementById('kontaktForm');
if (kontaktForm) {
  kontaktForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_6qiml44', 'template_1hhx0ij', this)
      .then(() => {
        alert("✅ Wiadomość wysłana pomyślnie, oczekuj na odpowiedź!");
        kontaktForm.reset();
      }, (error) => {
        console.error("❌ Błąd wysyłania:", error);
        alert("Wystąpił błąd. Spróbuj ponownie później!");
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.25
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.section-header, .project-card, .about-card').forEach(el => {
    observer.observe(el);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
