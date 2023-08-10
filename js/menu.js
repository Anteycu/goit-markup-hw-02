(() => {
  const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  openMenuBtnRef.addEventListener('click', () => {
    openMenuBtnRef.setAttribute('aria-expanded', true);
    mobileMenuRef.classList.add('is-open');
    document.body.classList.add('menu-open');
  });

  closeMenuBtnRef.addEventListener('click', () => {
    openMenuBtnRef.setAttribute('aria-expanded', false);
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
})();
