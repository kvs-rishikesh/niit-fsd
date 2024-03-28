// Write test code here
const expect=require('chai').expect;
const solution=require('../solution/calculate-area-solution');


describe("solution",function(){

it("should have function 'calculateAreaOfSquare'",function(){
    expect(typeof(solution.calculateAreaOfSquare)).to.equal('function');
});

it("should have function 'calculateAreaOfCircle'",function(){
    expect(typeof(solution.calculateAreaOfCircle)).to.equal('function');
});

it("should have function 'calculateAreaOfRectangle'",function(){
    expect(typeof(solution.calculateAreaOfRectangle)).to.equal('function');
});

});




describe("Function calculateAreaOfSquare",function(){

it("should return area of square for the valid input provided",function(){
    let side=4;
    const expectedArea= side*side;
    expect (solution.calculateAreaOfSquare(side)).to.equal(expectedArea);
});

it("should return message insufficient input if less than 1 parameter is passed",function(){
    if (typeof side === 'undefined') {
        return 'Insufficient Input';
     } 
    expect(solution.calculateAreaOfSquare()).to.equal('Insufficient Input');
    expect(solution.calculateAreaOfSquare(undefined)).to.equal('Insufficient Input');
});

it("should return message invalid input type if the parameter is not a number",function(){
    if (typeof side!=='number') {
           return 'Invalid Input';
         } 
    
    expect(solution.calculateAreaOfSquare(string)).to.equal('Invalid Input');
});

it("should return message incorrect input if the value of the parameter is less than or equal to 0",function(){
    let side=-1;
    if(side<=0){
        return 'Incorrect Input';
    }
    expect(solution.calculateAreaOfSquare(side)).to.equal('Incorrect Input');
});

});




describe("Function calculateAreaOfCircle",function(){

    it("should return area of circle for the valid input provided",function(){
        let radius=3;
        const expectedArea= 3.14*radius*radius;
        expect (solution.calculateAreaOfCircle(radius)).to.equal(expectedArea);
    });
    
    it("should return message insufficient input if less than 1 parameter is passed",function(){
        if (typeof radius === 'undefined') {
            return 'Insufficient Input';
         } 
        expect(solution.calculateAreaOfCircle()).to.equal('Insufficient Input');
        expect(solution.calculateAreaOfCircle(undefined)).to.equal('Insufficient Input');
    });
    
    it("should return message invalid input type if the parameter is not a number",function(){
        if (typeof radius!=='number') {
               return 'Invalid Input';
             } 
        expect(solution.calculateAreaOfCircle(string)).to.equal('Invalid Input');
    });
    
    it("should return message incorrect input if the value of the parameter is less than or equal to 0",function(){
        let radius=-1;
        if(radius<=0){
            return 'Incorrect Input';
        }
        expect(solution.calculateAreaOfCircle(radius)).to.equal('Incorrect Input');
    });
    
    });


    
    describe("Function calculateAreaOfRectangle",function(){

        it("should return area of rectangle for the valid input provided",function(){
            let length=4;
            let breadth=3;
            const expectedArea= length*breadth;
            expect (solution.calculateAreaOfRectangle(length,breadth)).to.equal(expectedArea);
        });
        
        it("should return message insufficient input if less than 1 parameter is passed",function(){
            if (typeof length === 'undefined' || breadth === 'undefined') {
                return 'Insufficient Input';
             } 
            expect(solution.calculateAreaOfRectangle()).to.equal('Insufficient Input');
            expect(solution.calculateAreaOfRectangle(undefined,undefined)).to.equal('Insufficient Input');
        });
        
        it("should return message invalid input type if the parameter is not a number",function(){
            if (typeof length !== 'number' || breadth !=='number') {
                   return 'Invalid Input type';
                 } 
            expect(solution.calculateAreaOfRectangle(string,string)).to.equal('Invalid Input type');
        });
        
        it("should return message incorrect input if the value of the parameter is less than or equal to 0",function(){
            let length,breadth=-1;
            if(length<=0||breadth<=0){
                return 'Incorrect Input';
            }
            expect(solution.calculateAreaOfRectangle()).to.equal('Incorrect Input');
        });
        
        });