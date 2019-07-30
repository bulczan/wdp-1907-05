(function(){
const Mustache = require('../vendor/Mustache.min.js');
const product = require('./product_data.js');
const post = require('./post_data.js');

function loadPost () {
var postTemplate = document.getElementById('post-box-column-template').innerHTML;
Mustache.parse(postTemplate); // optional, speeds up future uses
var rendered = '';
for (var i = 0; i < post.length; i++) {
    rendered += Mustache.render(postTemplate, post[i]);
}
document
    .querySelector('.section--blog-posts .row-posts')
    .insertAdjacentHTML('beforeend', rendered);
}

function loadProducts () {
var productTemplate = document.getElementById('product-box-column-template')
    .innerHTML;
Mustache.parse(productTemplate); // optional, speeds up future uses
var rendered = '';
for (var i = 0; i < product.length; i++) {
    rendered += Mustache.render(productTemplate, product[i]);
}
document
    .querySelector('.section--products .row-products')
    .insertAdjacentHTML('beforeend', rendered);
}

loadPost();
loadProducts();
})();
