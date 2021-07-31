const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');

const toggleNav = () => {
  nav.classList.toggle('hide');
}

hamburger.addEventListener('click', toggleNav);

