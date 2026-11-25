import { createElement } from './dom';

export const header = createElement('header', { className: 'header' });

const wrapper = createElement('div', { className: 'header__wrapper' });
const logoText = createElement('i', { textContent: 'Coder' });
const logo = createElement('a', {
  className: 'header__logo',
  attributes: { href: '#intro' },
  children: [createElement('b', { children: [logoText] })],
});

const menu = createElement('ul', { className: 'header__menu' });
const menuItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contacts', 'Contacts'],
];

menuItems.forEach(([id, label]) => {
  menu.append(
    createElement('a', {
      className: 'header__item',
      textContent: label,
      attributes: { href: `#${id}` },
    }),
  );
});

const menuButton = createElement('button', {
  className: 'header__btn',
  textContent: 'Menu',
});
menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

header.append(wrapper);
wrapper.append(logo, menu, menuButton);
