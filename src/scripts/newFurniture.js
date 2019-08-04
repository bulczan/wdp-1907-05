const product = require('./product_data.js');
const productGenerator = require('./templatesGenerator.js')

let tabs = document.querySelectorAll('.section--products .col.menu ul a');
let active = document.querySelector('.section--products .col.menu ul a.active');
const rowproducts = document.querySelector('.section--products .row-products');
let dots = document.querySelectorAll('.section--products .dots ul li');
let dotsul = document.querySelector('.section--products .dots ul');

let productToShow = [];
const mq = window.matchMedia;
let numberVisElem;
let dotshtml = '';
let slajdNumber;

const queryTable = [
    mq('(min-width: 1200px)'),
    mq('(max-width: 1199.98px) and (min-width: 992px)'),
    mq('(max-width: 991.98px) and (min-width: 768px)'),
    mq('(max-width: 767.98px) and (min-width: 576px)'),
    mq('(max-width: 575.98px )')
]

// UX //
document.addEventListener('DOMContentLoaded', () => { // Event for start content Created product-box.
    fadeAnimation();
    dotsSetter();
    filler();
});


tabs.forEach((elem) => { // Added Event  which created content/product-box for every category tab
    elem.addEventListener('click', (event) => {
        if(event.target !== active){ // Remove .active class for every tab
            tabs.forEach( (elem) => {
                elem.classList.remove('active');
            });
            event.target.classList.add('active'); // Add .active class for focus tab
            active = document.querySelector('.section--products .col.menu ul a.active');
            fadeAnimation();
            filler();
        }
    });
});

function fadeAnimation(){
    let opa = 0.01;
     setInterval(() =>{
        if(opa >= 1){
        clearInterval();
        } else {
        opa += opa * 0.1;
        rowproducts.style.opacity = opa;
        }
    }, 10);
};

function productSearcher() {
    for (var i = 0; i < product.length; i++) {
        if (active.innerHTML.toString().toLowerCase() === product[i].type) {
            productToShow.push(product[i]);
        }                     
    };
}

function dotsCreator() {
    for (slajdNumber; slajdNumber > 0; slajdNumber--) {
        dotshtml += '<li><a href="#"></a></li>' ;
    }
    dotsul.innerHTML = dotshtml;
}


function dotsCreator(i){ 
    if(queryTable[i-1].matches){
        numberVisElem = 5 - i;
        slajdNumber = Math.ceil(productToShow.length/numberVisElem);
        for (slajdNumber; slajdNumber > 0; slajdNumber--) {
            dotshtml += '<li><a href="#"></a></li>' ;
        }
        dotsul.innerHTML = dotshtml;
    }
}

function dotsSetter() {
    for(let i = 5; i > 0; i--){ // Return inteneger of products witch will be visiable dependent devices' width.
        queryTable[i-1].addListener( () =>{
            dotshtml = "";
            dotsCreator(i);
        });
        dotsCreator(i);
    }
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
    rowproducts.innerHTML = "";
    productToShow = [];
    dotsul.innerHTML = "";
    dotshtml = "";
}