import { createElement } from './dom';

export const intro = createElement('div', { className: 'intro' });
intro.id = 'intro';

const myFoto = createElement('div', { className: 'intro__my-foto' });
const myFotoImg = createElement('div', { className: 'intro__my-foto__img' });
myFoto.append(myFotoImg);

const githubLink = createElement('a', {
  textContent: 'natanchik',
  attributes: { href: 'https://github.com/natanchik' },
});
const linkedInLink = createElement('a', {
  textContent: 'LinkedIn',
  attributes: { href: 'https://www.linkedin.com/in/natalia-lebedeva-b0391b293/' },
});
const introGreet = createElement('div', {
  className: 'intro__greet',
  children: [
    createElement('h2', { textContent: "Hello! I'm Natalia" }),
    createElement('h1', { textContent: 'Frontend Developer' }),
    createElement('p', {
      children: [document.createTextNode('My GitHub: '), githubLink],
    }),
    createElement('p', { children: [document.createTextNode('My '), linkedInLink] }),
  ],
});

intro.append(introGreet, myFoto);
