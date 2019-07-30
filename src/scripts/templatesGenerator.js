(function(){
    var Mustache = require('../vendor/Mustache.min.js');
    var product = require('./product_data.js');
    var post = require('./post_data.js');

    console.log(product[1]);
    console.log('hello');
    console.log(post[1]);

    function loadPost () {
        var postTemplate = document.getElementById('post-box-column-template').innerHTML;
        Mustache.parse(postTemplate);
        var rendered = '';
        for (var i = 0; i < post.length; i++) {
            rendered += Mustache.render(postTemplate, post[i]);
        }
        document
            .querySelector('.section--blog-posts .row-posts')
            .insertAdjacentHTML('beforeend', rendered);
    }

    function loadProducts () {
        var productTemplate = document.getElementById('product-box-column-template').innerHTML;
        Mustache.parse(productTemplate); 
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
