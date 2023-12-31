export const stack = document.createElement('div');
stack.classList.add('stack');
stack.id = 'skills';
stack.innerHTML = `<h2>Skills</h2><h4>The skills, tools and technologies I am good at:</h4>`;

const stackItems = [
  'Vue',
  'React',
  'Next',
  'ReduxToolkit',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Tailwind',
  'Webpack',
  'Vite',
  'Jest',
  'TestingLibrary',
  'ESLint',
  'Prettier',
  'Git',
  'Python',
  'Docker',
  'MySQL',
];

stackItems.map((name) => {
  stack.innerHTML += `<div class="stack__item" ><div class="stack__img" style="background-image: url('./assets/icons/${name}.svg');"></div><p>${name}</p></div>`;
});
