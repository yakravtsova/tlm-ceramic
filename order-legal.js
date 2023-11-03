const menuButton = document.querySelector(".header__menu-btn-container");
const menuDropdown = document.querySelector(".header__menu-dropdown");
const menuCheckbox = document.querySelector(".header__checkbox");
const dropdownWrap = document.querySelector(".header__dropdown-wrap");

const input = document.getElementById("phone-input");
const maskOptions = {
  mask: "+ {7} (000) 000-00-00",
};
const mask = IMask(input, maskOptions);

const deliveryMethods = document.querySelectorAll(
  'input[type=radio][name="delivery-method"]'
);

let deliveryMethod = "";
let paymentMethod = "";

const paymentMethods = document.querySelectorAll(
  'input[type=radio][name="payment-method"]'
);

const yandexMapScript = document.createElement("script");
yandexMapScript.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

if (yandexMapScript.readyState) {
  //IE
  yandexMapScript.onreadystatechange = () => {
    if (
      yandexMapScript.readyState === "loaded" ||
      yandexMapScript.readyState === "complete"
    ) {
      yandexMapScript.onreadystatechange = null;
      ymaps.ready(init);
    }
  };
} else {
  //Others
  yandexMapScript.onload = () => {
    ymaps.ready(init);
  };
}
document.getElementsByTagName("head")[0].appendChild(yandexMapScript);

let myMap, myPlacemark;

const init = () => {
  const coords = [59.958264, 30.313757];

  myMap = new ymaps.Map("form__map", {
    center: [59.948753, 30.327474],
    zoom: 12,
    controls: [],
  });

  myMap.behaviors.disable("drag");
  myMap.behaviors.disable("scrollZoom");

  myPlacemark = new ymaps.Placemark(coords, {
    hintContent: "ООО &laquo;ТЛМ Групп&raquo;",
  });

  myMap.geoObjects
    .add(myPlacemark)
    .add(new ymaps.Placemark([59.93566, 30.321608]))
    .add(new ymaps.Placemark([59.941515, 30.35587]))
    .add(new ymaps.Placemark([59.927563, 30.360613]))
    .add(new ymaps.Placemark([59.942101, 30.321932]));
};

const toPointBlock = document.querySelector(".form__delivery_method_to-point");
const toAddressBlock = document.querySelector(
  ".form__delivery_method_to-address"
);

Array.from(deliveryMethods).forEach((radioButton) => {
  if (radioButton.value === "to-point") {
    radioButton.checked = true;
    deliveryMethod = radioButton.value;
    toPointBlock.classList.toggle("form__delivery_active");
  }
});

Array.from(paymentMethods).forEach((radioButton) => {
  if (radioButton.value === "on-website-by-card") {
    radioButton.checked = true;
  }
});

Array.from(deliveryMethods).forEach((radioButton) => {
  radioButton.addEventListener("click", (e) => {
    const value = e.target.value;
    switch (value) {
      case "to-point": {
        toPointBlock.classList.add("form__delivery_active");
        toAddressBlock.classList.remove("form__delivery_active");
        deliveryMethod = value;
        break;
      }
      case "to-address": {
        toPointBlock.classList.remove("form__delivery_active");
        toAddressBlock.classList.add("form__delivery_active");
        deliveryMethod = value;
        break;
      }
      case "pickup": {
        toPointBlock.classList.remove("form__delivery_active");
        toAddressBlock.classList.remove("form__delivery_active");
        deliveryMethod = value;
        break;
      }
      default: {
        toPointBlock.classList.remove("form__delivery_active");
        toAddressBlock.classList.remove("form__delivery_active");
        deliveryMethod = value;
        break;
      }
    }
  });
});

Array.from(paymentMethods).forEach((radioButton) => {
  radioButton.addEventListener("click", (e) => {
    const value = e.target.value;
    console.log(value);
    switch (value) {
      case "on-website-by-card": {
        paymentMethod = value;
        break;
      }
      case "on-receiving-by-card": {
        deliveryMethod = value;
        break;
      }
      case "on-receiving-by-card": {
        paymentMethod = value;
        break;
      }
      default: {
        paymentMethod = value;
        break;
      }
    }
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
