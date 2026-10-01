(function () {
  var buttons = document.querySelectorAll('[data-spread-src]');
  if (!buttons.length || typeof HTMLDialogElement === 'undefined') return;

  var dialog = document.createElement('dialog');
  dialog.className = 'spread-dialog';
  dialog.setAttribute('aria-label', 'Book page');
  var close = document.createElement('button');
  close.type = 'button';
  close.className = 'spread-dialog-close';
  close.textContent = 'Close';
  var img = document.createElement('img');
  dialog.appendChild(close);
  dialog.appendChild(img);
  document.body.appendChild(dialog);

  close.addEventListener('click', function () { dialog.close(); });
  // A click on the backdrop (the dialog element itself, outside the image) closes it
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      img.src = btn.getAttribute('data-spread-src');
      img.alt = btn.getAttribute('data-spread-alt') || '';
      dialog.showModal();
    });
  });
})();
