const product = require('./product_data.js');
const productGenerator = require('./templatesGenerator.js');
const Swipe = require('./swiper.js')

const tabs = document.querySelectorAll('.section--products .col.menu ul a');
let activeTab = document.querySelector('.section--products .col.menu ul a.active');
const rowproducts = document.querySelector('.section--products .row-products');
let dots;
let dotsul = document.querySelector('.section--products .dots ul');
let preview = document.querySelector('.product-container div.previous');
let next = document.querySelector('.product-container div.next');

let productToShow = [];
const mq = window.matchMedia;
let numberVisElem; 
let slajdNumber; 
let activeDotIndex = 1;
let deltaActiveIndex = 0;
let dotshtml = '';

const queryTable = [
    mq('(min-width: 1200px)'),
    mq('(max-width: 1199.98px) and (min-width: 992px)'),
    mq('(max-width: 991.98px) and (min-width: 576px )'),
    mq('(max-width: 575.98px )')
]

// UX //
document.addEventListener('DOMContentLoaded', () => { // Event for start content Created product-box.
    fadeAnimation();
    dotsSetter();
    filler();
    dots[activeDotIndex].classList.add('active');
});


tabs.forEach((elem) => { // Added Event  which created content/product-box for every category tab
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target !== activeTab){ // Remove .active class for every tab
            tabs.forEach( (elem) => {
                elem.classList.remove('active');
            });
            event.target.classList.add('active'); // Add .active class for focus tab
            activeTab = document.querySelector('.section--products .col.menu ul a.active');
            fadeAnimation();
            filler();
            dots[activeDotIndex].classList.add('active');
        }
    });
});

preview.addEventListener('click', () => {
    if(activeDotIndex > 0){
        rowproducts.scrollBy(-rowproducts.clientWidth, 0);
        activeDotIndex--;
        deltaActiveIndex = activeDotIndex;
        setActiveDot(activeDotIndex);
    }
});

next.addEventListener('click', () => {
    if(activeDotIndex < dots.length - 1){
        rowproducts.scrollBy(rowproducts.clientWidth, 0);
        activeDotIndex++;
        deltaActiveIndex = activeDotIndex;
        setActiveDot(activeDotIndex);
    }
});

// Swiper Section
let swiper = new Swipe('.section--products .row-products');

swiper.onLeft(function() {
    if(activeDotIndex > 0){
        rowproducts.scrollBy(-rowproducts.clientWidth, 0);
        activeDotIndex--;
        deltaActiveIndex = activeDotIndex;
        setActiveDot(activeDotIndex);
    }
});
swiper.onRight(function() {
    if(activeDotIndex < dots.length - 1){
        rowproducts.scrollBy(rowproducts.clientWidth, 0);
        activeDotIndex ++;
        deltaActiveIndex = activeDotIndex;
        setActiveDot(activeDotIndex);
    }
});
swiper.run();

function dotsSetter() {
    for(let i = 3; i >= 0; i--){ // Return inteneger of products witch will be visiable dependent devices' width.
        queryTable[i].addListener( () =>{
            dotshtml = '';
            dotsCreator(i);
        });
        dotsCreator(i);
    }
}

function dotsCreator(i){ 
    if(queryTable[i].matches){
        numberVisElem = 4 - i;
        slajdNumber = Math.ceil(productToShow.length/numberVisElem);
        for (slajdNumber; slajdNumber > 0; slajdNumber--) {
            dotshtml += '<li><a href="#"></a></li>' ;
        }
        dotsul.innerHTML = dotshtml;
        dots = document.querySelectorAll('.section--products .dots ul a');
        
        dots.forEach((elem) =>{
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                activeDotIndex = Array.from(dots).indexOf(event.target);
                deltaActiveIndex = activeDotIndex - deltaActiveIndex ;
                setActiveDot(activeDotIndex);
                rowproducts.scrollBy(deltaActiveIndex * rowproducts.clientWidth, 0);
                deltaActiveIndex = activeDotIndex;
            })
        })
    }
}

function setActiveDot(activeDotIndex){
    dots.forEach((elem) => {
        elem.classList.remove('active');
    });
    dots[activeDotIndex].classList.add('active');
};

function productSearcher() {
    for (var i = 0; i < product.length; i++) {
        if (activeTab.innerHTML.toString().toLowerCase() === product[i].type) {
            productToShow.push(product[i]);
        }                     
    };
}

function filler() {
    reset();
    productSearcher();
    productGenerator(productToShow);
    dotsSetter();
}

function reset() {
    numberVisElem = 0;
    slajdNumber = 0
    activeDotIndex = 0;
    deltaActiveIndex = 0;
    rowproducts.innerHTML = '';
    productToShow = [];
    dotsul.innerHTML = '';
    dotshtml = '';
}
function fadeAnimation(){
    rowproducts.classList.remove('afterfade');
        setTimeout( ()=>{
            rowproducts.classList.add('afterfade');
        },100);
};

document.addEventListener('DOMContentLoaded', () => {
  // Added Event for start content
  rowproducts.innerHTML = '';
  fadeAnimation();
  productFiller();
  productGenerator(productToShow);
});

tabs.forEach(elem => {
  // Added Event for every tab
  elem.addEventListener('click', event => {
    productToShow = [];
    rowproducts.innerHTML = '';
    fadeAnimation();

    if (event.target !== active) {
      // Remove .active class for every tab
      tabs.forEach(elem => {
        elem.classList.remove('active');
      });
      event.target.classList.add('active'); // Add .active class for focus tab
      active = document.querySelector('.section--products .col.menu ul a.active');
      productFiller();
      productGenerator(productToShow);
    }
  });
});

function productFiller () {
  for (let i = 0; i < product.length; i++) {
    if (active.innerHTML.toString().toLowerCase() === product[i].type) {
      productToShow.push(product[i]);
    }
  }
}
