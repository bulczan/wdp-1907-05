let product = require('./product_data.js');
const promotedProduct = [];

for (let i = 0; i < product.length; i++) {
  if (product[i].old_price === '') {
  } else {
    promotedProduct.push(product[i]);
  }
}

module.exports = promotedProduct;
