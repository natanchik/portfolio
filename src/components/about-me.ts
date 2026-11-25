import { createElement } from './dom';

export const aboutMe = createElement('div', { className: 'about-me' });
aboutMe.id = 'about';

const aboutMeItems = [
  'An enthusiastic Software Engineer with a solid foundation in JavaScript, TypeScript, React and Next.js, complemented by knowledge of Node.js and Cloud.',
  'Coordinator of The Rolling Scopes Community in Kazakhstan and Kyrgyzstan.',
  'Mentor, contributor, and speaker at The Rolling Scopes School, as well as a community builder in Almaty.',
  'Has a construction specialist degree.',
  '3+ years as Engineer Estimator, 1.5 years as Lead Engineer and 5+ years as Principal Specialist in a Production and Technical Department at a housing management organization that services 300+ residential buildings.',
];

aboutMe.append(
  createElement('h2', { textContent: 'About me' }),
  createElement('ul', {
    children: aboutMeItems.map((item) => createElement('li', { textContent: item })),
  }),
);
