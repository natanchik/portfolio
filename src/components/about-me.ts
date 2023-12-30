export const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');
aboutMe.id = 'about';

const aboutMeText = `<p>I have been interested in programming all my life.
I started my path in IT with Python, got to know Deep Learning, and then got into web development.
And I realized that I had found my direction.
Now my main goal is to become a professional Frontend developer.</p>`;
aboutMe.innerHTML = `<h2>About me</h2>` + aboutMeText;
