const menuButton = document.querySelector('.header__menu-btn-container');
const menuDropdown = document.querySelector('.header__menu-dropdown');
const menuCheckbox = document.querySelector('.header__checkbox');
const dropdownWrap = document.querySelector('.header__dropdown-wrap');

new Splide( '#products', {
  classes: {
    arrows: 'splide__arrows splide__arrows_place_products'
  }
} ).mount();
new Splide( '#team', {
  classes: {
    arrows: 'splide__arrows splide__arrows_place_team'
  },
  perMove: 1,
  pagination: false,
} ).mount();

const thumbnails = new Splide( '#production__thumbnails', {
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

const main = new Splide ( '#production__main', {
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

const yandexMapScript = document.createElement('script');
  yandexMapScript.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

  if (yandexMapScript.readyState) {  //IE
      yandexMapScript.onreadystatechange = () => {
          if (yandexMapScript.readyState === "loaded" || yandexMapScript.readyState === "complete") {
              yandexMapScript.onreadystatechange = null;
              ymaps.ready(init);
          }
      };
  } else {  //Others
      yandexMapScript.onload = () => {
          ymaps.ready(init);
      };
  }
  document.getElementsByTagName("head")[0].appendChild(yandexMapScript);

  let myMap, myPlacemark;

  const init = () => {
    const coords = [59.958264, 30.313757];


      myMap = new ymaps.Map("contacts__map", {
          center: coords,
          zoom: 16,
          controls: [],
      });

      myMap.behaviors.disable('drag');
      myMap.behaviors.disable("scrollZoom");

      myPlacemark = new ymaps.Placemark(coords, {
          hintContent: 'ООО &laquo;ТЛМ Групп&raquo;',
      });

      myMap.geoObjects.add(myPlacemark);
  };
