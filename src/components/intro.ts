export const intro = document.createElement('div');
intro.id = 'intro';
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
