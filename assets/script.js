document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.gap = '0.8rem';
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // valida localmente antes de enviar para o FormSubmit
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!name || !email || !msg) {
        e.preventDefault(); // impede envio caso algum campo esteja vazio
        alert('Preencha todos os campos');
        return;
      }

      // permite o envio (browser fará POST para FormSubmit)
      // opcional: mostrar mensagem temporária ao usuário
      // ex: document.querySelector('.btn').textContent = 'Enviando...';
    });
  }
});
