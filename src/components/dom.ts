type ElementOptions = {
  className?: string;
  textContent?: string;
  attributes?: Record<string, string>;
  children?: Node[];
};

export const createElement = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: ElementOptions = {},
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tagName);

  if (options.className !== undefined) {
    element.className = options.className;
  }

  if (options.textContent !== undefined) {
    element.textContent = options.textContent;
  }

  if (options.attributes !== undefined) {
    const { attributes } = options;
    Object.keys(options.attributes).forEach((name) => {
      element.setAttribute(name, attributes[name]);
    });
  }

  if (options.children !== undefined) {
    element.append(...options.children);
  }

  return element;
};
