

//Find the discounted price for non-premium products using arrow functions
//Pass the products as parameter to the function
const calculateDiscountedPrice = (products) => {
    const nonPremiumProducts = products.filter(product => product.price <= 300);

    const discountedNonPremiumProducts = nonPremiumProducts.map(product => ({

       
        productName:product.productName,
        price:product.price*0.9
    
    }));

    return discountedNonPremiumProducts;
};
// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateDiscountedPrice
}
