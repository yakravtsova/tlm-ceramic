const menuButton = document.querySelector('.header__menu-btn-container');
const menuDropdown = document.querySelector('.header__menu-dropdown');
const menuCheckbox = document.querySelector('.header__checkbox');
const dropdownWrap = document.querySelector('.header__dropdown-wrap');

const handleMenuToggle = (open = true) => {
  let method = open ? 'toggle' : 'remove';
  menuDropdown.classList[method]('header__menu-dropdown_active');
  dropdownWrap.classList[method]('header__dropdown-wrap_active');
  if (!open) menuCheckbox.checked = false;
}

const checkWindowSize = () => {
  if (window.innerWidth > 1199 && menuCheckbox.checked) {
    handleMenuToggle(false);
  }
}

menuButton.addEventListener('click', handleMenuToggle);
menuDropdown.addEventListener('click', () => handleMenuToggle(false));

window.onresize = checkWindowSize;
