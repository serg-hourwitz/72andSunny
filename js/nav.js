const navMenuButton = document.querySelector('.nav__menu__button');
const navMenuExpanded = document.querySelector('.nav__menu__expanded');
const items = document.querySelectorAll('.list__item');
const pages = document.querySelectorAll('.page');

// поява меню та зміна кнопки меню
navMenuButton.addEventListener('click', () => {
  navMenuExpanded.classList.toggle('active');
  navMenuButton.classList.toggle('close');
});

// приховування меню по кліку на елемент меню
items.forEach((item) => {
  item.addEventListener('click', () => {
    navMenuExpanded.classList.remove('active');
    navMenuButton.classList.remove('close');
  });
});

// Відображення сторінок
// Функція для приховування всіх сторінок
function hideAllPages() {
  pages.forEach((page) => {
    page.classList.add('hidden');
  });
}

// Додаємо обробник подій для кожного елемента списку
items.forEach((item) => {
  item.addEventListener('click', (event) => {
    // Перевіряємо, чи посилання не веде на зовнішній сайт
    const link = item.querySelector('a');
    if (link && link.getAttribute('href').startsWith('#')) {
      // Забираємо стандартну поведінку посилань
      event.preventDefault();

      // Отримуємо хеш з посилання (наприклад, #contact)
      const targetId = link.getAttribute('href').substring(1);

      // Приховуємо всі сторінки
      hideAllPages();

      // Відображаємо відповідну сторінку за її ID
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.classList.remove('hidden');
      }
    }
  });
});


// перехід за посиланням на сторінку "work"
const link = document.querySelector('.expand-icon');
const work = document.getElementById('work');
const about = document.getElementById('about');

link.addEventListener('click', () => {
  about.classList.add('hidden');
  work.classList.remove('hidden');
});
