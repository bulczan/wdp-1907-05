const Flickity = require('flickity');

var brandsCarousel = document.querySelector('.brands-carousel');
var flickityBrands = new Flickity(brandsCarousel, {
  // options
  groupCells: true,
  pageDots: false,
  cellAlign: 'center',
  cellSelector: '.carousel-cell',
  draggable: true,
  prevNextButtons: false
});

let previousButton = document.getElementById('button-brands-previous');
previousButton.addEventListener('click', function () {
  flickityBrands.previous();
});

let nextButton = document.getElementById('button-brands-next');
nextButton.addEventListener('click', function () {
  flickityBrands.next();
});

module.exports = flickityBrands;
