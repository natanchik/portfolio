import { createElement } from './dom';

export const contacts = createElement('div', { className: 'contacts' });
contacts.id = 'contacts';

const telegramLink = createElement('a', {
  textContent: 'natanchik1',
  attributes: { href: 'https://t.me/natanchik1' },
});
const emailLink = createElement('a', {
  textContent: 'nataliadaveng@gmail.com',
  attributes: { href: 'mailto:nataliadaveng@gmail.com' },
});

contacts.append(
  createElement('h2', { textContent: 'You can connect with me:' }),
  createElement('p', {
    children: [document.createTextNode('Telegram: '), telegramLink],
  }),
  createElement('p', {
    children: [document.createTextNode('E-mail: '), emailLink],
  }),
);
