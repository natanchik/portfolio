export const stack = document.createElement('div');
stack.classList.add('stack');
stack.id = 'skills';
stack.innerHTML = `<h2>Skills</h2><h4>The skills, tools and technologies I am good at:</h4>`;

const skillNames = ['React', 'Next', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Jest', 'Python', 'Docker'];
const skillsGrid = document.createElement('div');
skillsGrid.classList.add('stack__items');

skillNames.forEach((name) => {
  const skill = document.createElement('div');
  skill.classList.add('stack__item');
  skill.innerHTML = `<div class="stack__img" style="background-image: url('./assets/icons/${name}.svg');"></div><p>${name}</p>`;
  skillsGrid.append(skill);
});

stack.append(skillsGrid);
