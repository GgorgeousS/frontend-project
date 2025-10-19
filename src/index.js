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
