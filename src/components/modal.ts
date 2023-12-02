export const modal = document.createElement('div');
modal.classList.add('modal');

modal.innerHTML = `<h2>Ooops...</h2>
<p>'Toys' deploy failed because backend has expired</p>
<p>But you can watch our <br><a href='https://youtu.be/MKixRdbsk58'>'Toys' video presentation</a></p>
<p>or check out <a href='https://github.com/kris-vadi/eCommerce-Application/tree/development'>the site's repository on GitHub</a></p>
<p>or visit <a href='https://rs-toys.netlify.app/'>the failed site</a></p>`;

const closeButton = document.createElement('div');
closeButton.textContent = 'X';
closeButton.classList.add('close-button');
closeButton.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.append(closeButton);
