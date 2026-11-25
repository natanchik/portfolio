import { createElement } from './dom';

export const modal = createElement('div', { className: 'modal' });

const videoLink = createElement('a', {
  textContent: "'Toys' video presentation",
  attributes: { href: 'https://youtu.be/MKixRdbsk58' },
});
const repositoryLink = createElement('a', {
  textContent: "the site's repository on GitHub",
  attributes: { href: 'https://github.com/kris-vadi/eCommerce-Application/tree/development' },
});
const siteLink = createElement('a', {
  textContent: 'the failed site',
  attributes: { href: 'https://rs-toys.netlify.app/' },
});

modal.append(
  createElement('h2', { textContent: 'Ooops...' }),
  createElement('p', { textContent: "'Toys' deploy failed because backend has expired" }),
  createElement('p', {
    children: [document.createTextNode('But you can watch our '), createElement('br'), videoLink],
  }),
  createElement('p', {
    children: [document.createTextNode('or check out '), repositoryLink],
  }),
  createElement('p', { children: [document.createTextNode('or visit '), siteLink] }),
);

const closeButton = createElement('div', {
  className: 'close-button',
  textContent: 'x',
});
closeButton.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.append(closeButton);
