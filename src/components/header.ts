export const header = document.createElement('header');
header.classList.add('header');

const wrapper = document.createElement('div');
wrapper.classList.add('header__wrapper');
header.append(wrapper);

const logo = document.createElement('a');
logo.classList.add('header__logo');
logo.href = '#intro';
logo.innerHTML = '<b><i>Coder</i></b>';

const menu = document.createElement('ul');
menu.classList.add('header__menu');
const list = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contacts', 'Contacts'],
];

list.map((item) => {
  const li = document.createElement('a');
  li.classList.add('header__item');
  li.href = `#${item[0]}`;
  li.textContent = item[1];
  menu.append(li);
});

const menuButton = document.createElement('button');
menuButton.classList.add('header__btn');
menuButton.textContent = 'Menu';
menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

wrapper.append(logo, menu, menuButton);
