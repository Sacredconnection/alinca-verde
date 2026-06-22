/* ==========================================================================
   01. SCROLL REVEAL
   Aplica a classe .reveal a grupos/itens e ativa .visible via
   IntersectionObserver à medida que entram na viewport.
   ========================================================================== */
(function () {
  // Stagger automático nos grupos de bento/grid
  var groups = document.querySelectorAll(
    '.pilares-bento, .tese-cols, .territorial-grid, .impacto-bento, .equipe-bento, .ods-grid, .manifesto-cols, .cta-grid, .comunidades-grid'
  );
  groups.forEach(function (parent) {
    Array.from(parent.children).forEach(function (child, i) {
      child.classList.add('reveal');
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  // Elementos singulares por seção (excluindo o hero)
  var singles = [
    '.manifesto .eyebrow', '.manifesto .manifesto-intro', '.manifesto .manifesto-tagline',
    '.tese .eyebrow', '.tese .heading',
    '.pilares .eyebrow', '.pilares .heading',
    '.territorial .eyebrow', '.territorial .heading',
    '.impacto .eyebrow', '.impacto .heading',
    '.equipe .eyebrow', '.equipe .heading',
    '.ods .eyebrow', '.ods .heading',
    '.cta .cta-label', '.cta .cta-title', '.cta .cta-text',
    '.comunidades-box'
  ].join(', ');
  document.querySelectorAll(singles).forEach(function (el) {
    el.classList.add('reveal');
  });

  // Fallback para browsers sem IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

/* ==========================================================================
   02. HERO CAROUSEL
   Alterna automaticamente os slides do hero e sincroniza os dots de
   navegação; clique em um dot reinicia o temporizador.
   ========================================================================== */
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.hero-dot');
  var current = 0;
  var timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo((current + 1) % slides.length); }

  function start() { timer = setInterval(next, 5000); }

  start();

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(timer);
      goTo(i);
      start();
    });
  });
})();

/* ==========================================================================
   03. NAV MOBILE TOGGLE
   Abre/fecha o menu mobile e sincroniza aria-expanded/aria-label.
   ========================================================================== */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.classList.toggle('is-open', open);
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!toggle.classList.contains('is-open'));
  });

  // Fecha o menu ao navegar para uma seção
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
})();

/* ==========================================================================
   04. COOKIE BANNER (LGPD)
   Mostra o aviso de cookies até o aceite ser registrado em localStorage.
   ========================================================================== */
(function () {
  var STORAGE_KEY = 'ava-cookie-consent';
  var banner = document.getElementById('cookie-banner');
  var accept = document.getElementById('cookie-banner-accept');
  if (!banner || !accept) return;

  function hasConsent() {
    try { return localStorage.getItem(STORAGE_KEY) === 'aceito'; }
    catch (e) { return false; }
  }

  if (hasConsent()) {
    banner.classList.add('is-hidden');
    return;
  }

  accept.addEventListener('click', function () {
    try { localStorage.setItem(STORAGE_KEY, 'aceito'); } catch (e) {}
    banner.classList.add('is-hidden');
  });
})();

/* ==========================================================================
   05. BACK TO TOP
   Mostra o botão quando a primeira dobra (hero) sai da tela e rola
   suavemente até o topo ao clicar.
   ========================================================================== */
(function () {
  var button = document.getElementById('back-to-top');
  var hero   = document.getElementById('inicio');
  if (!button || !hero) return;

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (!('IntersectionObserver' in window)) {
    button.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    button.classList.toggle('is-visible', !entries[0].isIntersecting);
  });
  observer.observe(hero);
})();
