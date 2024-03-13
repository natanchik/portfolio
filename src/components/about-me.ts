export const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');
aboutMe.id = 'about';

const aboutMeText = `<p>Passionate frontend developer with over a year of commercial experience.<br>
Loves to code, participates in IT conferences and workshops, has spoken at meetup.<br>
Develops adaptive and interactive applications and websites using React, Next.js, Vue.<br>
Never stops learning. Ready for any technical challenge! 🌠</p>`;
aboutMe.innerHTML = `<h2>About me</h2>` + aboutMeText;
