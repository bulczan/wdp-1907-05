const Flickity = require('flickity');

var feedbackCarousel = document.querySelector('.feedback-carousel');
var flickityFeedback = new Flickity(feedbackCarousel, {
  // options
  contain: true,
  pageDots: false,
  cellAlign: 'center',
  autoPlay: 3000,
  cellSelector: '.carousel-cell',
  wrapAround: true,
  prevNextButtons: false
});

let feedbackDots = document.getElementsByClassName('feedback-dots');
let feedbackCell = document.getElementsByClassName('feedback-cell');

for (let i = 0; i < feedbackDots.length; i++) {
  feedbackDots[i].addEventListener('click', function (event) {
    event.preventDefault();
    flickityFeedback.selectCell(feedbackCell[i]);
    this.classList.add('active');
    for (var j = 0; j < feedbackDots.length; j++) {
      if (feedbackDots[j].classList.contains('active') && feedbackDots[j] !== this) {
        feedbackDots[j].classList.remove('active');
      }
    }
  });
}

flickityFeedback.on('change', function (index) {
  feedbackDots[index].classList.add('active');
  for (var j = 0; j < feedbackDots.length; j++) {
    if (
      feedbackDots[j].classList.contains('active') &&
      feedbackDots[j] !== feedbackDots[index]
    ) {
      feedbackDots[j].classList.remove('active');
    }
  }
});

module.exports = flickityFeedback;
