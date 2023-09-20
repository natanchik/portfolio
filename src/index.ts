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
introGreet.innerHTML = `<h2>Hello!</h2><h1>I'm Natalia</h1><h1>Frontend Developer</h1>`;
intro.append(introGreet, myFoto);

const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');
const aboutMeText = `<p>Since my school years I have been interested in programming, the process of coding has always been interesting. When choosing a profession, I considered going in this direction, but it turned out differently. And a few years ago I realized that now is my second chance to become a developer. Now I am moving in the direction I dreamed of.</p>
<p>I started my journey with Python, took a course on Deep Learning and then got to know web development. And I realized that I found my direction. Now my aspirations and desires are aimed at becoming a professional frontend developer.</p>`;
aboutMe.innerHTML = `<h2>ABOUT ME</h2>` + aboutMeText;

const myWorks = document.createElement('div');
myWorks.classList.add('my-works');
myWorks.innerHTML = `<h2>MY WORKS</h2>`;
const myWorksItems = document.createElement('div');
myWorksItems.classList.add('my-works__items');
myWorks.append(myWorksItems);
const itemNames = ['Toys', 'Async Race', 'Minesweeper', 'CSS-Selector', 'Virtual keyboard', 'Shelter'];
const itemImgs = ['toys', 'race', 'minesweeper', 'selector', 'keyboard', 'shelter'];
const itemLinks = [
  'https://rs-toys.netlify.app/',
  'https://natanchik.github.io/RSS-Tasks/async-race/',
  'https://natanchik.github.io/RSS-Tasks/minesweeper/',
  'https://natanchik.github.io/RSS-Tasks/rss-css-selectors/',
  'https://natanchik.github.io/virtual-keyboard/dist/',
  'https://natanchik.github.io/RSS-Tasks/shelter/',
];
itemNames.forEach((name, ind) => {
  const link = document.createElement('a');
  link.href = itemLinks[ind];
  link.innerHTML = `<h4>${name}</h4><div class="my-works__item ${itemImgs[ind]}">`;
  myWorksItems.append(link);
});

wrapper.append(intro, aboutMe, myWorks);
