/* ==========================================================================
   Cafetería Alcalá — interacción e "animaciones de capítulo"
   ========================================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = (n) => n == null ? '—' : n.toFixed(2).replace('.', ',') + ' €';
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Split de letras para titulares 3D ---------- */
  function split(el) {
    if (el.dataset.splitDone) return;
    const text = el.textContent;
    el.setAttribute('aria-label', text.trim());
    el.textContent = '';
    let i = 0;
    text.split(' ').forEach((word, wi, arr) => {
      const w = document.createElement('span'); w.className = 'w';
      [...word].forEach((ch) => {
        const c = document.createElement('span'); c.className = 'c';
        c.textContent = ch; c.style.setProperty('--i', i++); w.appendChild(c);
      });
      el.appendChild(w);
      if (wi < arr.length - 1) el.appendChild(document.createTextNode(' '));
    });
    el.dataset.splitDone = '1';
  }
  $$('[data-split]').forEach(split);

  /* ---------- Reveal on scroll ---------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  const watch = (root = document) => $$('.reveal, .tilt-in, [data-split]', root).forEach((el) => {
    if (el.closest('#intro') || el.closest('#menu')) return;
    revealObs.observe(el);
  });

  /* ---------- Intro ---------- */
  const intro = $('#intro');
  let introDone = false;
  function endIntro() {
    if (introDone) return;
    introDone = true;
    intro.classList.add('is-leaving');
    document.documentElement.classList.remove('is-intro');
    setTimeout(watch, 250);
    setTimeout(() => intro.remove(), 1100);
  }
  document.documentElement.classList.add('is-intro');
  requestAnimationFrame(() => {
    intro.classList.add('is-on');
    setTimeout(() => $$('[data-split]', intro).forEach((el) => el.classList.add('in')), 500);
  });
  $('#introSkip').addEventListener('click', endIntro);
  intro.addEventListener('click', (e) => { if (e.target === intro || e.target.closest('.intro__banner')) endIntro(); });
  if (!location.search.includes('intro=hold')) setTimeout(endIntro, reduce ? 800 : 3400);

  /* ---------- Menú a pantalla completa ---------- */
  const menu = $('#menu');
  const menuBtn = $('#menuBtn');
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menuBtn.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.documentElement.classList.toggle('menu-open', open);
    if (open) setTimeout(() => $$('[data-split]', menu).forEach((el) => el.classList.add('in')), 350);
    else $$('[data-split]', menu).forEach((el) => el.classList.remove('in'));
  }
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Navegación con cortina de tela ---------- */
  const curtain = $('#curtain');
  let navigating = false;
  function goTo(hash) {
    const target = $(hash);
    if (!target || navigating) return;
    if (reduce) { target.scrollIntoView(); setMenu(false); return; }
    navigating = true;
    setMenu(false);
    curtain.classList.add('is-in');
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      curtain.classList.remove('is-in');
      curtain.classList.add('is-out');
      setTimeout(() => { curtain.classList.remove('is-out'); navigating = false; }, 800);
    }, 650);
  }
  $$('[data-nav]').forEach((a) => a.addEventListener('click', (e) => {
    const hash = a.getAttribute('href');
    if (!hash || !hash.startsWith('#')) return;
    e.preventDefault();
    history.replaceState(null, '', hash);
    goTo(hash);
  }));

  /* ---------- Tilt con el ratón (hero) ---------- */
  const tiltEls = $$('[data-tilt]');
  if (!reduce && tiltEls.length && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
      tiltEls.forEach((el) => {
        el.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
        el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
        el.style.setProperty('--tx', (x * 14).toFixed(1) + 'px');
        el.style.setProperty('--ty', (y * 10).toFixed(1) + 'px');
      });
    }, { passive: true });
  }

  /* ---------- Parallax suave de fondos pintados ---------- */
  const paras = $$('.stage__bg--parallax');
  if (!reduce && paras.length) {
    let ticking = false;
    const run = () => {
      paras.forEach((bg) => {
        const r = bg.parentElement.getBoundingClientRect();
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight));
        bg.style.setProperty('--py', (p * -6).toFixed(2) + '%');
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
    run();
  }

  /* ---------- Vídeo del hero ---------- */
  const video = $('.hero__video');
  if (video) {
    const tryPlay = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };
    if (!reduce) {
      tryPlay();
      ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) => window.addEventListener(ev, tryPlay, { once: true, passive: true }));
      document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
    } else { video.removeAttribute('autoplay'); video.pause(); }
  }

  /* ---------- PROMOCIONES ---------- */
  $('#promosGrid').innerHTML = (window.ALCALA_PROMOS || []).map((p, i) => `
    <article class="promo tilt-in" style="--rot:${(i % 2 ? 1.4 : -1.4)}deg; --d:${i * 110}ms">
      <span class="promo__weight">${esc(p.weight)}</span>
      <h4 class="promo__name">${esc(p.name)}</h4>
      <p class="promo__desc">${esc(p.desc)}</p>
      <span class="promo__price">${fmt(p.price)}</span>
    </article>`).join('');

  /* ---------- CARTA ---------- */
  const MENU = window.ALCALA_MENU || [];
  const pillsEl = $('#menuPills');
  const contentEl = $('#menuContent');
  const groupBtns = $$('.menu-tabs__groups .tab');
  let group = 'comida', cat = null;

  function renderPills() {
    const cats = MENU.filter((c) => c.group === group);
    if (!cats.some((c) => c.id === cat)) cat = cats[0] && cats[0].id;
    pillsEl.innerHTML = cats.map((c, i) => `
      <button class="pill ${c.id === cat ? 'is-active' : ''}" data-cat="${c.id}" role="tab" aria-selected="${c.id === cat}" style="--rot:${((i % 3) - 1) * 1.2}deg">${esc(c.name)}</button>`).join('');
    $$('.pill', pillsEl).forEach((b) => b.addEventListener('click', () => {
      cat = b.dataset.cat;
      $$('.pill', pillsEl).forEach((x) => { const on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', String(on)); });
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      renderCategory();
    }));
  }

  function renderCategory() {
    const c = MENU.find((x) => x.id === cat);
    if (!c) { contentEl.innerHTML = ''; return; }
    contentEl.innerHTML = `
      <section class="category" aria-labelledby="cat-${c.id}">
        <div class="category__side">
          <div class="polaroid category__polaroid" style="--rot:-2.2deg">
            <img src="${c.image}" alt="">
            <p class="polaroid__cap">${esc(c.name)}</p>
          </div>
        </div>
        <div class="category__main">
          <p class="kicker">${c.group === 'comida' ? 'Comida' : 'Bebidas'} · ${c.items.length} referencias</p>
          <h3 class="t3d t3d--tile category__title" id="cat-${c.id}" data-split>${esc(c.name)}</h3>
          ${c.note ? `<p class="category__note">${esc(c.note)}</p>` : ''}
          <ul class="dishes">
            ${c.items.map((it, i) => `
              <li class="dish" style="--d:${Math.min(i, 14) * 40}ms">
                <div class="dish__head">
                  <h4 class="dish__name">${esc(it.name)}${it.tag ? `<span class="dish__tag">${esc(it.tag)}</span>` : ''}</h4>
                  <span class="dish__dots" aria-hidden="true"></span>
                  <span class="dish__price">${fmt(it.price)}</span>
                </div>
                ${it.desc ? `<p class="dish__desc">${esc(it.desc)}</p>` : ''}
              </li>`).join('')}
          </ul>
        </div>
      </section>`;
    const title = $('[data-split]', contentEl);
    split(title);
    requestAnimationFrame(() => requestAnimationFrame(() => { title.classList.add('in'); contentEl.querySelector('.category').classList.add('in'); }));
  }

  groupBtns.forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.group === group) return;
    group = b.dataset.group; cat = null;
    groupBtns.forEach((x) => { const on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', String(on)); });
    renderPills(); renderCategory();
  }));
  renderPills(); renderCategory();

  /* ---------- RESERVAS (solo interfaz: valida y muestra el resumen) ---------- */
  const form = $('#bookingForm');
  if (form) {
    const done = $('#bookingDone');
    const err = $('#bookingError');
    const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    form.dia.min = today.toISOString().slice(0, 10);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      ['nombre', 'telefono', 'dia', 'hora', 'personas'].forEach((n) => {
        const el = form.elements[n];
        const valid = el.value.trim() !== '' && el.checkValidity();
        el.closest('.field').classList.toggle('is-invalid', !valid);
        if (!valid) ok = false;
      });
      err.hidden = ok;
      if (!ok) return;
      const d = form.dia.valueAsDate || new Date(form.dia.value);
      const fecha = d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
      const zona = form.zona.value !== 'Sin preferencia' ? ` en ${form.zona.value.toLowerCase()}` : '';
      $('#bookingSummary').textContent = `${form.nombre.value.trim()}, hemos anotado tu mesa para ${form.personas.value} ${form.personas.value === '1' ? 'persona' : 'personas'} el ${fecha} a las ${form.hora.value}${zona}. Te llamaremos al ${form.telefono.value.trim()} para confirmarla.`;
      form.hidden = true; done.hidden = false;
      const t = $('.booking__title', done); if (t && !t.dataset.splitDone) { split(t); requestAnimationFrame(() => t.classList.add('in')); }
    });
    $('#bookingAgain').addEventListener('click', () => { form.reset(); form.hidden = false; done.hidden = true; err.hidden = true; $$('.is-invalid', form).forEach((f) => f.classList.remove('is-invalid')); });
  }

  $('#year').textContent = new Date().getFullYear();
  if (reduce) { $$('.reveal, .tilt-in, [data-split]').forEach((el) => el.classList.add('in')); }
})();
