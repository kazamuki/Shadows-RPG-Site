(function () {
  var modal = document.getElementById('night-shift-modal');
  if (!modal) return;
  var frame = document.getElementById('night-shift-frame');
  var trigger = document.querySelector('[data-night-shift-open]');
  var closers = modal.querySelectorAll('[data-night-shift-close]');
  var gameSrc = frame.getAttribute('data-src');

  function open() {
    frame.src = gameSrc;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.hidden = true;
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', open);
  Array.prototype.forEach.call(closers, function (el) { el.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
})();
