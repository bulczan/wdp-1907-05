const product = require('./product_data.js');
const productGenerator = require('./templatesGenerator.js');

const tabs = document.querySelectorAll('.section--products .col.menu ul a');
let active = document.querySelector('.section--products .col.menu ul a.active');
const rowproducts = document.querySelector('.section--products .row-products');

let productToShow = [];

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

function fadeAnimation () {
  rowproducts.classList.remove('afterfade');
  setTimeout(() => {
    rowproducts.classList.add('afterfade');
  }, 100);
}
