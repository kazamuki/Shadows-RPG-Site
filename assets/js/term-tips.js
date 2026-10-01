// Shows a glossary term's one-line definition on hover, keyboard focus, or the first tap on a
// touch screen. The term is still a link: tapping it a second time goes to the glossary.
// Without JS the link's title attribute still works.
(function () {
  var terms = document.querySelectorAll('a.term[data-short]');
  if (!terms.length) return;

  var tip = document.createElement('div');
  tip.className = 'term-tip';
  tip.id = 'term-tip';
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;
  document.body.appendChild(tip);
  var current = null;

  function show(a) {
    current = a;
    tip.textContent = '';
    tip.appendChild(document.createTextNode(a.getAttribute('data-short')));
    var more = document.createElement('span');
    more.className = 'term-tip-more';
    more.textContent = 'Glossary entry →';
    tip.appendChild(more);
    tip.hidden = false;
    a.setAttribute('aria-describedby', tip.id);
    var r = a.getBoundingClientRect();
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8));
    var top = r.bottom + 8;
    if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 8);
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hide() {
    if (current) current.removeAttribute('aria-describedby');
    current = null;
    tip.hidden = true;
  }

  Array.prototype.forEach.call(terms, function (a) {
    // The native title would double up with the bubble
    a.removeAttribute('title');
    a.addEventListener('mouseenter', function () { show(a); });
    a.addEventListener('mouseleave', hide);
    a.addEventListener('focus', function () { show(a); });
    a.addEventListener('blur', hide);
    a.addEventListener('click', function (e) {
      // Touch: first tap defines, second tap follows the link
      if (window.matchMedia('(hover: none)').matches && current !== a) {
        e.preventDefault();
        show(a);
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (current && !(e.target.closest && e.target.closest('a.term'))) hide();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', hide, { passive: true });
})();
