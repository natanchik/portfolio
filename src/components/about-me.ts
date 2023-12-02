export const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');

const aboutMeText = `<p>I have been interested in programming all my life.\n
I started my path in IT with Python, took a course in Deep Learning, and then got acquainted with web development.\n
And I realized that I had found my direction.\n
Now my main goal is to become a professional <strong>Frontend developer</strong>.</p>`;
aboutMe.innerHTML = `<h2>About me</h2>` + aboutMeText;
