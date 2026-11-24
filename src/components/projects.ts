export const projects = document.createElement('div');
projects.id = 'projects';
projects.classList.add('projects');
projects.innerHTML = `<h2>My projects</h2><h4>Some of the noteworthy projects I have built:</h4>`;

const projectsItems = document.createElement('div');
projectsItems.classList.add('projects__items');
projects.append(projectsItems);

type Item = { title: string; stack: string };

const itemNames: Item[] = [
  { title: 'RS School', stack: 'React, Typescript, FSD, Playwright, CodeRabbit, Jest' },
  { title: 'Code Wizards', stack: 'Next.js, TypeScript, Pixel Perfect, CSS Modules, Yandex.Metrica' },
  {
    title: 'GraphQl Sandbox',
    stack: 'Next.js, Firebase, GraphQL, shadecn/ui, Tailwind',
  },
];
const itemImgs = ['rs-school', 'code-wizards', 'graphql'];
const itemLinks = ['https://rs.school/', 'https://code-wizards-site.vercel.app/', 'https://graphi-ql-ten.vercel.app/'];

itemImgs.forEach((image, ind) => {
  const project = document.createElement('div');
  project.className = 'project__item';
  project.innerHTML += `<a href='${itemLinks[ind]}'><h4>${itemNames[ind].title}</h4><h5><i>${itemNames[ind].stack}</i></h5><div class="projects__img ${image}" style="background-image: url('./assets/${image}.webp');"></div></a>`;
  projectsItems.append(project);
});
