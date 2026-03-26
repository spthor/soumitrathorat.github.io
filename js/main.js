(function () {
  'use strict';

  // Initialize when DOM is ready
  function initMenu() {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
      // Toggle menu on button click
      navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navLinks.classList.toggle('nav__list--open');
      });

      // Close menu when a navigation link is clicked
      var navAnchors = navLinks.querySelectorAll('a');
      for (var i = 0; i < navAnchors.length; i++) {
        navAnchors[i].addEventListener('click', function() {
          navLinks.classList.remove('nav__list--open');
        });
      }
    }
  }

  // Initialize contact form
  function initContactForm() {
    var contactSubmit = document.querySelector('.contact__submit');
    if (contactSubmit) {
      contactSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        
        var fname = (document.getElementById('fname') && document.getElementById('fname').value) || '';
        var email = (document.getElementById('email') && document.getElementById('email').value) || '';
        var subject = (document.getElementById('subject') && document.getElementById('subject').value) || 'Portfolio Contact';
        var message = (document.getElementById('message') && document.getElementById('message').value) || '';

        // Construct email body
        var body = 'Name: ' + fname + '\nEmail: ' + email + '\n\nMessage:\n' + message;
        
        // Create mailto link
        var mailtoLink = 'mailto:soumitrathorat@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        
        // Open email client
        window.location.href = mailtoLink;
      });
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMenu();
      initContactForm();
    });
  } else {
    // DOM already loaded
    initMenu();
    initContactForm();
  }
})();
