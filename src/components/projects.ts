import { modal } from './modal';

export const projects = document.createElement('div');
projects.classList.add('projects');
projects.innerHTML = `<h2>My projects</h2>`;

const projectsItems = document.createElement('div');
projectsItems.classList.add('projects__items');
projects.append(projectsItems);

const itemNames = [
  'E-Commerce App Toys (TypeScript)',
  'Hiring monsters (React)',
  'My last apps (JavaScript, TypeScript)',
];
const itemImgs = ['toys', 'monsters', 'apps'];
const itemLinks = ['', 'https://creature-hiring.netlify.app/', 'https://natanchik.github.io/RSS-APPs/'];

itemNames.forEach((name, ind) => {
  const project = document.createElement('div');
  if (ind === 0) {
    project.innerHTML += `<h4>${name}</h4><div class="projects__item ${itemImgs[ind]}" style="background-image: url('./assets/${itemImgs[ind]}.png');"></div>`;
    for (const child of project.children) {
      child.addEventListener('click', () => {
        modal.classList.add('active');
      });
    }
  } else {
    project.innerHTML += `<a href='${itemLinks[ind]}'><h4>${name}</h4><div class="projects__item ${itemImgs[ind]}" style="background-image: url('./assets/${itemImgs[ind]}.png');"></div></a>`;
  }
  projectsItems.append(project);
});

projects.append(modal);
