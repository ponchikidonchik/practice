function addToCart() {
    alert("Товар добавлен в корзину");
  }

  function changeToColor(image) {
    image.classList.add('color');
    image.classList.remove('black-and-white');
}

function changeToBlackAndWhite(image) {
    image.classList.add('black-and-white');
    image.classList.remove('color');
}
