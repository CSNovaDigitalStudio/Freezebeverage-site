/* ================================
   HERO WATER DROPLET ANIMATION
================================ */

const hero = document.querySelector('.hero');

for (let i = 0; i < 10; i++) {
  const drop = document.createElement('span');
  drop.classList.add('drop');
  drop.style.left = Math.random() * 100 + '%';
  drop.style.animationDuration = 3 + Math.random() * 5 + 's';
  hero.appendChild(drop);
}

/* ================================
   QUOTE FORM – WHATSAPP
================================ */



function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});


