// No trackers, cookies, or storage. Optional campaign hooks fire only locally.
document.querySelectorAll('[data-contact]').forEach(link => {
  link.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('vmak:contact', {
      detail: { placement: link.dataset.contact }
    }));
  });
});
