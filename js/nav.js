const navMenuButton = document.querySelector('.nav__menu__button');
const navMenuExpanded = document.querySelector('.nav__menu__expanded');
const pages = document.querySelectorAll('.page');


navMenuButton.addEventListener('click', () => {
  navMenuExpanded.classList.toggle('active');
  navMenuButton.classList.toggle('close');
});

pages.addEventListener('click', () => {
  navMenuExpanded.classList.remove('active');
})
