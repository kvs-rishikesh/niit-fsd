// Task 1 - Create JSON data
const deliveryData = require('./deliveryData.json');

const deliveries = deliveryData;

// Task 2 - Convert JSON to JavaScript Object

const deliveryObject = JSON.parse(JSON.stringify(deliveries));

// Task 3 - No. of orders delivered by a delivery person in a particular city

const countDeliveries =(deliver,deliveredBy,city) =>{
    return deliver.filter(del=>del.deliveredBy==deliveredBy && del.customerAddress.city==city).length;
}
// Task 4 - Total tip amount earned by a delivery person

function calculateTotalTipAmount(deliveries, deliveredBy) {
    return deliveries.filter(delivery => delivery.deliveredBy === deliveredBy).reduce((totalTip, delivery) => totalTip + delivery.tipAmount, 0);
}


// Task 5 - Delivery wise customer and outlet ratings for a delivery person

function getDeliveryWiseRatings(deliveries, deliveredBy) {
    return deliveries.filter(delivery => delivery.deliveredBy === deliveredBy).map(delivery => {
        return {
            orderNumber: delivery.orderNumber,
            customerName: delivery.customerName,
            customerRating: delivery.customerRating,
            outletRating: delivery.outletRating
        };
    });
}

// Task 6 - Based on Customer and outlet Rating, calculate average rating for each delivery person. 
//          Modify the JSON and include the average rating 

function calculateAverageRating(deliveries) {
    const result = deliveries.map(delivery => {
        const avgRating = (delivery.customerRating + delivery.outletRating) / 2;
        return {
            ...delivery,
            averageRating: avgRating
        };
    });

    return JSON.stringify(result); // Convert result to JSON string with indentation
}




// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    countDeliveries,
    calculateTotalTipAmount,
    getDeliveryWiseRatings,
    calculateAverageRating
}