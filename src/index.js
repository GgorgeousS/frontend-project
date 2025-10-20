/* global localStorage */

import './index.css';
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  overlay.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
  });

  // Закрытие меню при клике на ссылку
  const menuLinks = document.querySelectorAll('.header__menu a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    });
  });
});

// Управление темами
const themeToggle = document.getElementById('themeToggle');

// Проверяем сохраненную тему или системную
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const currentTheme = savedTheme || systemTheme;

// Применяем тему
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleButton(currentTheme);

themeToggle.addEventListener('click', function () {
  let theme = document.documentElement.getAttribute('data-theme');
  theme = theme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateToggleButton(theme);
});

function updateToggleButton(theme) {
  themeToggle.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
}
