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
      give it `:is(.beat-armed, .beat-play)` animations in theme.css. */
(function () {
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function calm() { return !!(mq && mq.matches); }

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
  var BEATS = '.ledger, .next-step-slim';

  function arm() {
    if (calm() || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        en.target.classList.remove('beat-armed');
        en.target.classList.add('beat-play');
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll(BEATS).forEach(function (el) {
      if (el.matches('.ledger')) {
        el.querySelectorAll('dl > div').forEach(function (row, i) { row.style.setProperty('--i', i); });
      }
      el.classList.add('beat-armed');
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arm);
  else arm();
})();
