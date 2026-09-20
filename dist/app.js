// No trackers, cookies, or storage. Optional campaign hooks fire only locally.
document.querySelectorAll('[data-contact]').forEach(link => {
  link.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('vmak:contact', {
      detail: { placement: link.dataset.contact }
    }));
  });
});
const privacy = document.querySelector('#privacy');
document.querySelector('#privacy-open').addEventListener('click', () => privacy.showModal());
document.querySelector('#privacy-close').addEventListener('click', () => privacy.close());
privacy.addEventListener('click', event => { if (event.target === privacy) { const r = privacy.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) privacy.close(); } });
