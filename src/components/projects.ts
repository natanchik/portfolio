export const projects = document.createElement('div');
projects.id = 'projects';
projects.classList.add('projects');
projects.innerHTML = `<h2>My projects</h2><h4>Some of the noteworthy projects I have built:</h4>`;

const projectsItems = document.createElement('div');
projectsItems.classList.add('projects__items');
projects.append(projectsItems);

type Project = {
  title: string;
  stack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};

const projectsList: Project[] = [
  {
    title: 'RS School',
    stack: ['React', 'TypeScript', 'FSD', 'Playwright', 'CodeRabbit', 'Jest'],
    image: 'rs-school',
    demoUrl: 'https://rs.school/',
    githubUrl: 'https://github.com/rolling-scopes/site',
  },
  {
    title: 'Code Wizards',
    stack: ['Next.js', 'TypeScript', 'Pixel Perfect', 'CSS Modules', 'Yandex.Metrica'],
    image: 'code-wizards',
    demoUrl: 'https://code-wizards-site.vercel.app/',
    githubUrl: 'https://github.com/Team-Code-Wizards/frontend',
  },
  {
    title: 'GraphQl Sandbox',
    stack: ['Next.js', 'Firebase', 'GraphQL', 'shadcn/ui', 'Tailwind'],
    image: 'graphql',
    demoUrl: 'https://graphi-ql-ten.vercel.app/',
    githubUrl: 'https://github.com/dkon70/graphiql-app',
  },
];

projectsList.forEach((item) => {
  const project = document.createElement('article');
  project.className = 'project__item';
  project.innerHTML = `
    <div class="projects__img ${item.image}" role="img" aria-label="${
      item.title
    } preview" style="background-image: url('./assets/${item.image}.webp');"></div>
    <div class="project__content">
      <h3>${item.title}</h3>
      <ul class="project__stack" aria-label="Technology stack">
        ${item.stack.map((technology) => `<li>${technology}</li>`).join('')}
      </ul>
      <div class="project__actions">
        <a class="project__link project__link--primary" href="${
          item.demoUrl
        }" target="_blank" rel="noopener noreferrer" aria-label="View ${
          item.title
        } live demo (opens in a new tab)">Live Demo <span aria-hidden="true">↗</span></a>
        <a class="project__link project__link--secondary" href="${
          item.githubUrl
        }" target="_blank" rel="noopener noreferrer" aria-label="View ${
          item.title
        } on GitHub (opens in a new tab)">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
  projectsItems.append(project);
});
