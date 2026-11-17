const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  feedback.textContent = "Merci. Le formulaire est prêt ; reliez-le à un service d'envoi pour recevoir les demandes.";
  form.reset();
});
