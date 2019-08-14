const Mustache = require('mustache');
const Flickity = require('flickity');
const promotedProduct = require('./promoted_data.js');

function loadPromotedProducts (promotedProduct) {
  const promotedProductTemplate = document.getElementById('promoted-box-template')
    .innerHTML;
  Mustache.parse(promotedProductTemplate);
  let rendered = '';
  for (let i = 0; i < promotedProduct.length; i++) {
    rendered += Mustache.render(promotedProductTemplate, promotedProduct[i]);
  }
  document
    .querySelector('.section--promoted .main-carousel')
    .insertAdjacentHTML('beforeend', rendered);
}

loadPromotedProducts(promotedProduct);

var promotedCarouselProduct = document.querySelector('.main-carousel');
var flkty = new Flickity(promotedCarouselProduct, {
  // options
  cellAlign: 'center',
  wrapAround: true,
  autoPlay: 3000,
  prevNextButtons: false,
  pageDots: false,
  cellSelector: '.carousel-cell'
});

// element argument can be a selector string
//   for an individual element
/* var flkty = new Flickity( '.main-carousel', {
  // options
}); */

module.exports = flkty;
