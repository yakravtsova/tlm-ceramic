const productionMenuButton = document.querySelectorAll('.production-menu__button');
const productionMenuLine = document.querySelectorAll('.production-menu__line');
const subItemInsulation = document.querySelectorAll('.production-menu__subitem_type_insulation');
const subItemFireproof = document.querySelectorAll('.production-menu__subitem_type_fireproof');
const subItemFacade = document.querySelectorAll('.production-menu__subitem_type_facade');
const subItems = {
  0: subItemInsulation,
  1: subItemFireproof,
  2: subItemFacade
};

Array.from(productionMenuButton).forEach((button, i) => {
  button.addEventListener('click', () => {
    productionMenuLine[i].classList.toggle('production-menu__line_on');
    subItems[i].forEach(link => link.classList.toggle('production-menu__subitem_visible'));
  })
})