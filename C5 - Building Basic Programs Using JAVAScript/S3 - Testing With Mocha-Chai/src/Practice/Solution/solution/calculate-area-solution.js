// copy the solution code from `Practice 1 - Calculate Area` 
// from the sprint `Implement Modular Programming using Functions`
function calculateAreaOfSquare(side) {
   return side*side;
}
function calculateAreaOfCircle(radius) {
   return 3.14*radius*radius;
}
function calculateAreaOfRectangle(length,breadth) {
   return length*breadth;
}
console.log('Area of the Square:', (calculateAreaOfSquare(4)));
console.log('Area of Circle:', (calculateAreaOfCircle(3)));
console.log('Area of Rectangle:', (calculateAreaOfRectangle(3,4)));






// do not delete the below code, it is written to export the functions to be tested
module.exports = {
   calculateAreaOfCircle,
   calculateAreaOfRectangle,
   calculateAreaOfSquare
}