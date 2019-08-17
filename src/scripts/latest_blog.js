const Flickity = require('flickity');

var blogCarousel = document.querySelector('.blog-carousel');
var flktyblog = new Flickity(blogCarousel, {
  // options
  contain: true,
  pageDots: false,
  cellAlign: 'center',
  cellSelector: '.carousel-cell',
  wrapAround: true,
  prevNextButtons: false
});

let blogDots = document.getElementsByClassName('blog-dots');
let blogCell = document.getElementsByClassName('blog-cell');

for (let i = 0; i < blogDots.length; i++) {
  blogDots[i].addEventListener('click', function (event) {
    event.preventDefault();
    flktyblog.selectCell(blogCell[i]);
    this.classList.add('active');
    for (var j = 0; j < blogDots.length; j++) {
      if (blogDots[j].classList.contains('active') && blogDots[j] !== this) {
        blogDots[j].classList.remove('active');
      }
    }
  });
}

flktyblog.on('change', function (index) {
  blogDots[index].classList.add('active');
  for (var j = 0; j < blogDots.length; j++) {
    if (blogDots[j].classList.contains('active') && blogDots[j] !== blogDots[index]) {
      blogDots[j].classList.remove('active');
    }
  }
});

let previousButton = document.getElementById('button-blog-previous');
previousButton.addEventListener('click', function () {
  flktyblog.previous();
});

let nextButton = document.getElementById('button-blog-next');
nextButton.addEventListener('click', function () {
  flktyblog.next();
});

module.exports = flktyblog;
