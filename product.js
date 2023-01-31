const menuButton = document.querySelector('.header__menu-btn-container');
const menuDropdown = document.querySelector('.header__menu-dropdown');
const menuCheckbox = document.querySelector('.header__checkbox');
const dropdownWrap = document.querySelector('.header__dropdown-wrap');

new Splide( '#product-card', {
  perPage: 2,
  perMove: 1,
  pagination: false,
  classes: {
    arrows: 'splide__arrows splide__arrows_place_product-card',
    arrow: 'splide__arrow splide__arrow_place_product-card',
    prev  : 'splide__arrow--prev splide__arrow--prev_place_product-card',
		next  : 'splide__arrow--next splide__arrow--next_place_product-card',
  },
  breakpoints: {
    750: {
      destroy: true,
    },
  }
} ).mount();

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