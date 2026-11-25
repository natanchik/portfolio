import { createElement } from './dom';

export const projects = createElement('div', {
  className: 'projects',
  attributes: { id: 'projects' },
});

const projectsItems = createElement('div', { className: 'projects__items' });
projects.append(
  createElement('h2', { textContent: 'My projects' }),
  createElement('h4', { textContent: 'Some of the noteworthy projects I have built:' }),
  projectsItems,
);

type Project = {
  title: string;
  stack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};

const projectList: Project[] = [
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

const createProjectLink = (item: Project, label: string, url: string, modifier: string): HTMLAnchorElement =>
  createElement('a', {
    className: `project__link project__link--${modifier}`,
    attributes: {
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `View ${item.title} ${label} (opens in a new tab)`,
    },
    children: [
      document.createTextNode(label),
      createElement('span', {
        textContent: '↗',
        attributes: { 'aria-hidden': 'true' },
      }),
    ],
  });

const createProjectCard = (item: Project): HTMLElement => {
  const image = createElement('div', {
    className: `projects__img ${item.image}`,
    attributes: {
      role: 'img',
      'aria-label': `${item.title} preview`,
    },
  });
  image.style.backgroundImage = `url('./assets/${item.image}.webp')`;

  const stack = createElement('ul', {
    className: 'project__stack',
    attributes: { 'aria-label': 'Technology stack' },
    children: item.stack.map((technology) => createElement('li', { textContent: technology })),
  });

  const actions = createElement('div', {
    className: 'project__actions',
    children: [
      createProjectLink(item, 'Live Demo', item.demoUrl, 'primary'),
      createProjectLink(item, 'GitHub', item.githubUrl, 'secondary'),
    ],
  });

  const content = createElement('div', {
    className: 'project__content',
    children: [createElement('h3', { textContent: item.title }), stack, actions],
  });

  return createElement('article', {
    className: 'project__item',
    children: [image, content],
  });
};

projectList.forEach((item) => {
  projectsItems.append(createProjectCard(item));
});
