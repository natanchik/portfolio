export const projects = document.createElement('div');
projects.id = 'projects';
projects.classList.add('projects');
projects.innerHTML = `<h2>My projects</h2><h4>Some of the noteworthy projects I have built:</h4>`;

const projectsItems = document.createElement('div');
projectsItems.classList.add('projects__items');
projects.append(projectsItems);

type Item = { title: string; stack: string };

const itemNames: Item[] = [
  {
    title: 'GraphQl Sandbox',
    stack: 'Next.js, Firebase, GraphQL, shadecn/ui, Tailwind',
  },
  { title: 'Creature Hiring', stack: 'React, Redux Toolkit, SCSS' },
  { title: 'Sneakers Shop', stack: 'Vue, Tailwind, Axios' },

  { title: 'E-Commerce App Toys', stack: 'TypeScript, Commercetools' },
];
const itemImgs = ['graphql', 'creatures', 'sneakers', 'toys'];
const itemLinks = [
  'https://graphi-ql-ten.vercel.app/',
  'https://creature-hiring.vercel.app/',
  'https://shop-vue-chi.vercel.app/',
  '',
];

itemImgs.forEach((image, ind) => {
  const project = document.createElement('div');
  if (ind === 3) {
    project.innerHTML += `<h4>${itemNames[ind].title}</h4><h5><i>${itemNames[ind].stack}</i></h5><div class="projects__item ${image}" style="background-image: url('./assets/${image}.png');"></div>`;
    for (const child of project.children) {
      child.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal?.classList.add('active');
      });
    }
  } else {
    project.innerHTML += `<a href='${itemLinks[ind]}'><h4>${itemNames[ind].title}</h4><h5><i>${itemNames[ind].stack}</i></h5><div class="projects__item ${image}" style="background-image: url('./assets/${image}.png');"></div></a>`;
  }
  projectsItems.append(project);
});
