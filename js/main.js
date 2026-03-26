(function () {
  'use strict';

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav__list--open');
    });
  }

  // Contact form functionality
  const contactSubmit = document.querySelector('.contact__submit');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      
      const fname = document.getElementById('fname').value || '';
      const email = document.getElementById('email').value || '';
      const subject = document.getElementById('subject').value || 'Portfolio Contact';
      const message = document.getElementById('message').value || '';

      // Construct email body
      const body = `Name: ${fname}\nEmail: ${email}\n\nMessage:\n${message}`;
      
      // Create mailto link
      const mailtoLink = `mailto:soumitrathorat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
    });
  }
})();
