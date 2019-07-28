'use strict';

// zmienne globalne
var outlineButton = document.getElementsByClassName('btn-outline');

// funkcje dla przycisków

// przycisk polubienia oraz porównania
function activeOutlineButton () {
  for (var i = 0; i < outlineButton.length; i++) {
    outlineButton[i].addEventListener('click', function () {
      this.classList.toggle('btn-outline-active');
    });
  }
}

export default activeOutlineButton;
