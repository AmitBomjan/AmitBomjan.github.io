// script.js - Dark Theme Toggle + Animation

const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Change icon
  toggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';

  // Store theme in localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Set saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️';
  }
});
// Navbar hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav link highlight on scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 70;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
