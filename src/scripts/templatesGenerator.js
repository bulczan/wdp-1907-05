const Mustache = require('mustache');
const post = require('./post_data.js');
console.log(post);

(function loadPost() {
    const postTemplate = document.getElementById('post-box-column-template').innerHTML;
    Mustache.parse(postTemplate);
    let rendered = '';
    for (let i = 0; i < post.length; i++) {
        rendered += Mustache.render(postTemplate, post[i]);
        
    }
    document
        .querySelector('.section--blog-posts .row-posts')
        .insertAdjacentHTML('beforeend', rendered);
})();

function loadProducts(productList) {

    const productTemplate = document.getElementById('product-box-column-template').innerHTML;
    Mustache.parse(productTemplate); 
    let rendered = '';
    for (let i = 0; i < productList.length; i++) {
        rendered += Mustache.render(productTemplate, productList[i]);
    }
    document
        .querySelector('.section--products .row-products')
        .insertAdjacentHTML('beforeend', rendered);
}
module.exports = loadProducts;
