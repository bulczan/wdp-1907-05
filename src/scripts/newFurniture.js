var product = require('./product_data.js');

var productToShow = [];
var tabs = document.querySelectorAll('.section--products .col.menu ul a');
var active = document.querySelector('.section--products .col.menu ul a.active');
console.log(tabs);
console.log(active);

document.addEventListener('onclick', function(event){
    tabs.forEach(function(elem){
        elem.classList.remove('active');
    });
    event.target.classList.add('active');

    
});

for (var i = 0; i < product.length; i++) {
    if (active.innerHTML.toLowerCase() === product[i].type){
        productToShow =+ product[i];
    }
};
console.log(productToShow);
