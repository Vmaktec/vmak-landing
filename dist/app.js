// Meta Pixel pending the owner's pixel ID. No advertising requests are sent.
const privacy = document.querySelector('#privacy');
document.querySelector('#privacy-open').addEventListener('click', () => privacy.showModal());
document.querySelector('#privacy-close').addEventListener('click', () => privacy.close());
document.querySelector('[data-contact]').addEventListener('click', () => {
  window.dispatchEvent(new CustomEvent('vmak:contact', {detail:{placement:'principal'}}));
});
