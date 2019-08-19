const Flickity = require('flickity');

var promotedCarouselProduct = document.querySelector('.promoted-box-carousel');
var flickityBoxPromoted = new Flickity(promotedCarouselProduct, {
  // options
  contain: true,
  cellAlign: 'center',
  autoPlay: 3000,
  prevNextButtons: false,
  pageDots: false,
  cellSelector: '.carousel-cell'
});

var promotedCarouselSlider = document.querySelector('.promoted-slider-carousel');
var flickitySliderPromoted = new Flickity(promotedCarouselSlider, {
  // options
  wrapAround: true,
  cellAlign: 'center',
  prevNextButtons: false,
  imagesLoaded: true,
  setGallerySize: false,
  pageDots: false,
  cellSelector: '.carousel-cell'
});

let promotedDots = document.getElementsByClassName('promoted-dots');
let promotedCell = document.getElementsByClassName('promoted-cell');

for (let i = 0; i < promotedDots.length; i++) {
  promotedDots[i].addEventListener('click', function (event) {
    event.preventDefault();
    flickityBoxPromoted.selectCell(promotedCell[i]);
    this.classList.add('active');
    for (var j = 0; j < promotedDots.length; j++) {
      if (promotedDots[j].classList.contains('active') && promotedDots[j] !== this) {
        promotedDots[j].classList.remove('active');
      }
    }
  });
}

flickityBoxPromoted.on('change', function (index) {
  promotedDots[index].classList.add('active');
  for (var j = 0; j < promotedDots.length; j++) {
    if (
      promotedDots[j].classList.contains('active') &&
      promotedDots[j] !== promotedDots[index]
    ) {
      promotedDots[j].classList.remove('active');
    }
  }
});

let previousButton = document.getElementById('button-previous');
previousButton.addEventListener('click', function () {
  flickitySliderPromoted.previous();
});

let nextButton = document.getElementById('button-next');
nextButton.addEventListener('click', function () {
  flickitySliderPromoted.next();
});

module.exports = flickityBoxPromoted;
