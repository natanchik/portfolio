export const aboutMe = document.createElement('div');
aboutMe.classList.add('about-me');
aboutMe.id = 'about';

const aboutMeText = `<ul>
<li>An enthusiastic Software Engineer with a solid foundation in JavaScript, TypeScript, React and Next.js, complemented by knowledge of Node.js and Cloud.</li>
<li>Coordinator of The Rolling Scopes Community in Kazakhstan and Kyrgyzstan.</li>
<li>Mentor, contributor, and speaker at The Rolling Scopes School, as well as a community builder in Almaty.</li>
<li>Has a construction specialist degree.</li>
<li>3+ years as Engineer Estimator, 1.5 years as Lead Engineer and 5+ years as Principal Specialist in a Production and Technical Department at a housing management organization that services 300+ residential buildings.</li>
</ul>`;
aboutMe.innerHTML = `<h2>About me</h2>` + aboutMeText;
