const navMenuButton = document.querySelector('.nav__menu__button');
const navMenuExpanded = document.querySelector('.nav__menu__expanded');
const items = document.querySelectorAll('.list__item');

navMenuButton.addEventListener('click', () => {
  navMenuExpanded.classList.toggle('active');
  navMenuButton.classList.toggle('close');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    navMenuExpanded.classList.remove('active');
  });
});
