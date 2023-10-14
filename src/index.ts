import './style.scss';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const intro = document.createElement('div');
intro.classList.add('intro');
const myFoto = document.createElement('div');
myFoto.classList.add('intro__my-foto');
const introGreet = document.createElement('div');
introGreet.classList.add('intro__greet');
introGreet.innerHTML = `<h2>Hello! I'm Natalia</h2>
<h1>Frontend Developer</h1>
<p>My GitHub: <a href="https://github.com/natanchik">natanchik</a></p>
<p>My <a href="https://www.linkedin.com/in/natalia-lebedeva-b0391b293/">LinkedIn</a></p>`;
intro.append(introGreet, myFoto);

const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');
const aboutMeText = `<p>I have been interested in programming all my life.\n
I started my path in IT with Python, took a course in Deep Learning, and then got acquainted with web development.\n
And I realized that I had found my direction.\n
Now my main goal is to become a professional <strong>Frontend developer</strong>.</p>`;
aboutMe.innerHTML = `<h2>About me</h2>` + aboutMeText;

const myStack = document.createElement('div');
myStack.classList.add('my-stack');
myStack.innerHTML = `<h2>My technical stack</h2>`;
const stackItems = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Webpack',
  'ESLint',
  'Prettier',
  'Jest',
  'Docker',
  'Python',
  'Git',
];
stackItems.map((name) => {
  myStack.innerHTML += `<div class="stack__item" style="background-image: url('./assets/icons/${name}.svg');"></div>`;
});

const myWorks = document.createElement('div');
myWorks.classList.add('my-works');
myWorks.innerHTML = `<h2>My works</h2>`;
const myWorksItems = document.createElement('div');
myWorksItems.classList.add('my-works__items');
myWorks.append(myWorksItems);
const itemNames = ['Hiring monsters', 'My last apps', 'E-Commerce App Toys'];
const itemImgs = ['monsters', 'apps', 'toys'];
const itemLinks = [
  'https://creature-hiring.netlify.app/',
  'https://natanchik.github.io/RSS-APPs/',
  'https://rs-toys.netlify.app/',
];
itemNames.forEach((name, ind) => {
  const link = document.createElement('a');
  link.href = itemLinks[ind];
  link.innerHTML = `<h4>${name}</h4><div class="my-works__item ${itemImgs[ind]}" style="background-image: url('./assets/${itemImgs[ind]}.png');"></div>`;
  myWorksItems.append(link);
});

const myContacts = document.createElement('div');
myContacts.classList.add('my-contacts');
myContacts.innerHTML = `<h2>You can connect with me:</h2>
<p>Telegram: <a href="https://t.me/natanchik1">natanchik1</a></p>
<p>E-mail: <a href="mailto:nataliadaveng@gmail.com">nataliadaveng@gmail.com</a></p>`;

wrapper.append(intro, aboutMe, myStack, myWorks, myContacts);
