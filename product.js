const menuButton = document.querySelector('.header__menu-btn-container');
const menuDropdown = document.querySelector('.header__menu-dropdown');
const menuCheckbox = document.querySelector('.header__checkbox');
const dropdownWrap = document.querySelector('.header__dropdown-wrap');
const showAllTextButton = document.querySelector('.button-yellow_place_about-production');
const textColumns = document.querySelector('.about-production__textcolumns');

new Splide( '#production-card', {
  perPage: 2,
  perMove: 1,
  pagination: false,
  classes: {
    arrows: 'splide__arrows splide__arrows_place_production-card',
    arrow: 'splide__arrow splide__arrow_place_production-card',
    prev  : 'splide__arrow--prev splide__arrow--prev_place_production-card',
		next  : 'splide__arrow--next splide__arrow--next_place_production-card',
  },
  breakpoints: {
    750: {
      destroy: true,
    },
  }
} ).mount();

new Splide( '#application', {
  classes: {
    arrows: 'splide__arrows splide__arrows_place_application',
  },
  fixedWidth: 260,
  perPage: 2,
  perMove: 2,
  mediaQuery: 'min',
  breakpoints: {
    751: {
      destroy: true,
    },
  },
  pagination: false
} ).mount();

new Splide( '#advantages', {
  mediaQuery: 'min',
  breakpoints: {
    751: {
      destroy: true,
    },
    605: {
      fixedWidth: 260,
      perPage: 4,
      perMove: 4,
    },
    320: {
      fixedWidth: 260,
      perPage: 1,
      perMove: 4,
    }
  },
  classes: {
    arrows: 'splide__arrows splide__arrows_place_advantages',
  },
  pagination: false
} ).mount();

const thumbnails = new Splide( '#video__thumbnails', {
  fixedWidth: 432,
  fixedHeight: 354,
  height: 734,
  gap: 26,
  focus: 0,
  direction: 'ttb',
  isNavigation: true,
  pagination: false,
  arrows: false,
  breakpoints: {
    1919: {
      fixedWidth: 360,
      fixedHeight: 295,
      gap: 21,
      height: 612
    },
    1536: {
      fixedWidth: 288,
      fixedHeight: 236,
      gap: 16,
      height: 489
    },
    1200: {
      fixedWidth: 228,
      fixedHeight: 187,
      gap: 10,
      height: 384
    }
  }
});

const main = new Splide ( '#video__main', {
  type      : 'fade',
  rewind    : true,
  pagination: false,
  classes: {
    arrows: 'splide__arrows splide__arrows_place_production-main'
  }
});

main.sync( thumbnails );
main.mount();
thumbnails.mount();

new Splide( '#documents', {
  perPage: 2,
  perMove: 2,
  classes: {
    arrows: 'splide__arrows splide__arrows_place_documents',
  },
  pagination: false
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

const handleShowAllText = () => {
  textColumns.classList.add('about-production__textcolumns_visible');
  showAllTextButton.classList.add('button-yellow_place_about-production_hidden');
}

showAllTextButton.addEventListener('click', handleShowAllText);
menuButton.addEventListener('click', handleMenuToggle);
menuDropdown.addEventListener('click', () => handleMenuToggle(false));