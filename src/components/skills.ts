import { createElement } from './dom';

export const stack = createElement('div', {
  className: 'stack',
  attributes: { id: 'skills' },
});

const skillNames = ['React', 'Next', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Jest', 'Python', 'Docker'];
const skillsGrid = createElement('div', { className: 'stack__items' });

const createSkillCard = (name: string): HTMLDivElement => {
  const image = createElement('div', {
    className: 'stack__img',
    attributes: { role: 'img', 'aria-label': `${name} icon` },
  });
  image.style.backgroundImage = `url('./assets/icons/${name}.svg')`;

  return createElement('div', {
    className: 'stack__item',
    children: [image, createElement('p', { textContent: name })],
  });
};

stack.append(
  createElement('h2', { textContent: 'Skills' }),
  createElement('h4', { textContent: 'The skills, tools and technologies I am good at:' }),
  skillsGrid,
);

skillNames.forEach((name) => {
  skillsGrid.append(createSkillCard(name));
});
