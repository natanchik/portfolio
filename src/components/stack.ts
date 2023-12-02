export const stack = document.createElement('div');
stack.classList.add('stack');
stack.innerHTML = `<h2>My technical stack</h2>`;

const stackItems = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Webpack',
  'ESLint',
  'Prettier',
  'Jest',
  'Docker',
  'Python',
  'Git',
];

stackItems.map((name) => {
  stack.innerHTML += `<div class="stack__item" style="background-image: url('./assets/icons/${name}.svg');"></div>`;
});
