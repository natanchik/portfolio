import { createElement } from './dom';

export const footer = createElement('footer', {
  className: 'footer',
  textContent: `© ${new Date().getFullYear()}`,
});
