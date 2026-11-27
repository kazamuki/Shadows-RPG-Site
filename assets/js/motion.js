/* Shadows motion kit (content/motion-plan.md, Motion Lab S1).

   Two jobs:
   1. Page transitions. theme.css opts every page into the browser's own
      cross-document View Transition. Here we only note which way the Rules
      pager was paged, so the new page can slide in that direction. Loaded in
      <head> without defer so the `pagereveal` listener exists before the new
      page's first frame.
   2. Beats. Each beat element is "armed" (its CSS animations held on their
      first frame) and plays once when it scrolls into view. Without this
      script, without IntersectionObserver, or under reduced motion, nothing is
      armed and the page shows its finished state. Add a component to BEATS and
      give it `:is(.beat-armed, .beat-play)` animations in theme.css.
   3. Arrival. Landing on an anchor stamps the entry you landed on.
   0. Ignition. The first time Home's hero is shown in a visit, its title catches
      like a neon sign. */
(function () {
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function calm() { return !!(mq && mq.matches); }

  /* --- 0. The sign catches (Home's hero), once per visit to the site --- */
  /* Decided here in <head>, before the first frame, so the title starts dark instead
     of flashing on and then flickering. The class does nothing on pages without the
     hero; the visit is only marked once Home's hero has actually been shown. If
     sessionStorage is blocked we can't remember the visit, so the sign stays lit. */
  var LIT_KEY = 'shadows:lit';
  var lit = true;
  try { lit = sessionStorage.getItem(LIT_KEY) === '1'; } catch (err) {}
  if (!lit && !calm()) document.documentElement.classList.add('beat-ignite');
  function markLit() {
    if (!document.querySelector('.hero-title')) return;
    try { sessionStorage.setItem(LIT_KEY, '1'); } catch (err) {}
  }

  /* --- 1. Which way the Rules pager went --- */
  var DIR_KEY = 'shadows:vt-dir';
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('.rules-pager a[rel="next"], .rules-pager a[rel="prev"]');
    if (!a) return;
    try { sessionStorage.setItem(DIR_KEY, a.getAttribute('rel')); } catch (err) {}
  });
  window.addEventListener('pagereveal', function (e) {
    var dir = null;
    try { dir = sessionStorage.getItem(DIR_KEY); sessionStorage.removeItem(DIR_KEY); } catch (err) {}
    if (dir && e.viewTransition && e.viewTransition.types) e.viewTransition.types.add(dir);
  });

  /* --- 2. Beats --- */
  /* [beat selector, the children that get a stagger index --i (or null)] */
  var BEATS = [
    ['.ledger', 'dl > div'],
    ['.next-step-slim', null],
    ['.power-ladder', ':scope > li'],
    ['.stat-block', ':scope > li'],
    ['.income-table', 'tbody > tr'],
    ['.coast-strip', ':scope > li'],
    ['.pull-line--close', null]
  ];

  /* A count: the right number is in the HTML; playing rewinds it to 0 and counts
     forward, ending on the exact number whatever the frame rate. */
  function countUp(el) {
    var to = +el.getAttribute('data-count'), start = null, dur = 750;
    function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
    el.textContent = '0';
    function step(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = fmt(to * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(to);
    }
    requestAnimationFrame(step);
  }

  function arm() {
    if (calm() || !('IntersectionObserver' in window)) return;
    /* Plays once the beat's top edge is inside the upper 80% of the screen, so a
       beat taller than the screen (the coastline on a phone) still plays. */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);
        el.classList.remove('beat-armed');
        el.classList.add('beat-play');
        el.querySelectorAll('[data-count]').forEach(countUp);
      });
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });

    BEATS.forEach(function (beat) {
      document.querySelectorAll(beat[0]).forEach(function (el) {
        if (beat[1]) {
          el.querySelectorAll(beat[1]).forEach(function (child, i) { child.style.setProperty('--i', i); });
        }
        el.classList.add('beat-armed');
        io.observe(el);
      });
    });
  }

  /* --- 3. Arriving on an anchor --- */
  /* A link that lands on an entry (a glossary term, a jump-nav target, a Territory
     or Court seat) stamps its name gold, and flashes the entry if it's a row. */
  var NAME = 'dt, h2, h3, strong';
  function arrive(delay) {
    if (calm()) return;
    var id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (err) { return; }
    var target = id && document.getElementById(id);
    if (!target || target.id === 'main') return;
    setTimeout(function () {
      document.querySelectorAll('.beat-arrive, .beat-arrive-name').forEach(function (el) {
        el.classList.remove('beat-arrive', 'beat-arrive-name');
      });
      var name = target.querySelector(NAME);
      void target.offsetWidth;
      target.classList.add('beat-arrive');
      if (name) name.classList.add('beat-arrive-name');
    }, delay);
  }
  window.addEventListener('hashchange', function () { arrive(350); });

  function start() {
    markLit();
    arm();
    arrive(200);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
