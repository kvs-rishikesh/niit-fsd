let customerName = "Gary";
let customerPhone = 4123145678;
function customerDetails() {
    alert('Customer Details\n--------------------\nCustomer Name:',(customerName),'\nPhone Number',(customerPhone));
}
customerDetails();
let pizzaRegularPrice = 9.99;
let pizzaMediumPrice = 11.99;
let pizzaLargePrice = 13.99;
let garlicBreadPrice = 5.99;
let beveragesPrice = 1.99;

function menuDetails() {
    alert('Menu Items\n S.No    Item Category    Price\n------------------------------------\n   1        Pizza(Regular)',(pizzaRegularPrice),'\n2        Pizza(Medium)',(pizzaMediumPrice),'\n3        Pizza(Large)',(pizzaLargePrice),'\n4        Garlic Bread',(garlicBreadPrice),'\n5         Beverages',(beveragesPrice));
}
menuDetails();
let noOfPizza = parseFloat(prompt('Enter Number of Pizza'));
let size = parseInt(prompt('Enter Size of Pizza\n---------------------\n1-Regular\n2-Medium\n3-Large'));

function pizzaPriceBasedOnSize(size,noOfPizza) {
    if (size===1) {
        return pizzaRegularPrice*noOfPizza;
    }
    else if (size===2) {
        return pizzaMediumPrice*noOfPizza;
    }
    else if (size===3) {
        return pizzaLargePrice*noOfPizza;
    }
    else {
        return 0;
    }
}
let noOfGarlicBread = parseFloat(prompt('Enter Number of Garlic Bread'));
function garlicBreadPricemtd(noOfGarlicBread) {
    return noOfGarlicBread*garlicBreadPrice;
}

let noOfBeverages = parseFloat(prompt('Enter Number of Beverages'));
function beveragesPricemtd(noOfBeverages) {
    return beveragesPrice*noOfBeverages;
}

function subTotal() {
    alert('  SubTotal\n------------\n     Pizza',(pizzaPriceBasedOnSize(size,noOfPizza)),'\n     Garlic Bread',(garlicBreadPricemtd(noOfGarlicBread)),'\n    Beverages',(beveragesPricemtd(noOfBeverages)));
}
subTotal();

function totalBill() {
    return pizzaPriceBasedOnSize(size,noOfPizza) + garlicBreadPricemtd(noOfGarlicBread) + beveragesPricemtd(noOfBeverages);
}

function discount() {
    if (totalBill()>=50) {
        return totalBill() * 0.10;
    }
    else {
        return 0;
    }
}

function finalTotalBill() {
    return totalBill() - discount();
}

function billDetails() {
    alert('   Bill Details\n-----------------\n      Pizza',(pizzaPriceBasedOnSize(size,noOfPizza)),'\n    Garlic Bread',(garlicBreadPricemtd(noOfGarlicBread)),'\n     Beverages',(beveragesPricemtd(noOfBeverages)),'\n-----------------------------------\nTotal Bill Amount: ',(totalBill()),'\nDiscount Amount: ',(discount()),'\nFinal Bill Amount: ',(finalTotalBill()));
}
billDetails();