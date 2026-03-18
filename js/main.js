(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      navLinks.classList.toggle('nav__links--open');
    });

    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        navLinks.classList.remove('nav__links--open');
      });
    });
  }
})();
