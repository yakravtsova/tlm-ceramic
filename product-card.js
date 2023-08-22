const menuButton = document.querySelector(".header__menu-btn-container");
const menuDropdown = document.querySelector(".header__menu-dropdown");
const menuCheckbox = document.querySelector(".header__checkbox");
const dropdownWrap = document.querySelector(".header__dropdown-wrap");
const productionMenuButton = document.querySelectorAll(
  ".production-menu__button"
);
const productionMenuLine = document.querySelectorAll(".production-menu__line");
const subItemInsulation = document.querySelectorAll(
  ".production-menu__subitem_type_insulation"
);
const subItemFireproof = document.querySelectorAll(
  ".production-menu__subitem_type_fireproof"
);
const subItemFacade = document.querySelectorAll(
  ".production-menu__subitem_type_facade"
);
const subItems = {
  0: subItemInsulation,
  1: subItemFireproof,
  2: subItemFacade,
};

new Splide("#card-menu", {
  pagination: false,
  classes: {
    arrows: "splide__arrows splide__arrows_place_card-menu",
    arrow: "splide__arrow splide__arrow_place_card-menu",
    prev: "splide__arrow--prev splide__arrow--prev_place_card-menu",
    next: "splide__arrow--next splide__arrow--next_place_card-menu",
  },
  perMove: 1,
  gap: 0,
  mediaQuery: "min",
  breakpoints: {
    901: {
      destroy: true,
    },
    801: {
      perMove: 5,
    },
    641: {
      perMove: 3,
    },
    501: {
      gap: 35,
    },
  },
}).mount();

new Splide("#application-card", {
  classes: {
    arrows: "splide__arrows splide__arrows_place_application-card",
  },
  fixedWidth: 220,
  perPage: 2,
  perMove: 2,
  mediaQuery: "min",
  breakpoints: {
    501: {
      destroy: true,
    },
  },
  pagination: false,
}).mount();

new Splide("#advantages-card", {
  mediaQuery: "min",
  breakpoints: {
    801: {
      destroy: true,
    },
    605: {
      fixedWidth: 510,
      perPage: 7,
      perMove: 7,
    },
    320: {
      fixedWidth: 280,
      perPage: 1,
      perMove: 4,
    },
  },
  classes: {
    arrows: "splide__arrows splide__arrows_place_advantages-card",
  },
  pagination: false,
}).mount();

Array.from(productionMenuButton).forEach((button, i) => {
  button.addEventListener("click", () => {
    productionMenuLine[i].classList.toggle("production-menu__line_on");
    subItems[i].forEach((link) =>
      link.classList.toggle("production-menu__subitem_visible")
    );
  });
});

const handleMenuToggle = (open = true) => {
  let method = open ? "toggle" : "remove";
  menuDropdown.classList[method]("header__menu-dropdown_active");
  dropdownWrap.classList[method]("header__dropdown-wrap_active");
  if (!open) menuCheckbox.checked = false;
};

const checkWindowSize = () => {
  if (window.innerWidth > 1199 && menuCheckbox.checked) {
    handleMenuToggle(false);
  }
};

menuButton.addEventListener("click", handleMenuToggle);
menuDropdown.addEventListener("click", () => handleMenuToggle(false));
window.onresize = checkWindowSize;
