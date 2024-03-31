

//filter premium products from the products passed as parameter using arrow functions
const filterProducts = (products)=> {
    return products.filter(products => products.price>300);
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    filterProducts
}