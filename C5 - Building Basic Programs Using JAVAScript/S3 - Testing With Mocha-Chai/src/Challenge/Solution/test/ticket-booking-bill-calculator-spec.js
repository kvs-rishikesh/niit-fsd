// Write test code here
const expect=require('chai').expect;
const solution=require('../solution/ticket-booking-bill-calculator');

describe("solution",function(){
    it("should have function 'getPerComboPrice'",function(){
        expect(typeof(solution.getPerComboPrice)).to.equal('function');
    });
    it("should have function 'getPerTicketPriceBySeatType'",function(){
        expect(typeof(solution.getPerTicketPriceBySeatType)).to.equal('function');
    });
    it("should have function 'calculateTotalTicketAmount'",function(){
        expect(typeof(solution.calculateTotalTicketAmount)).to.equal('function');
    });
    it("should have function 'calculateTotalComboAmount'",function(){
        expect(typeof(solution.calculateTotalComboAmount)).to.equal('function');
    })
    it("should have function 'calculateTotalBillAmount'",function(){
        expect(typeof(solution.calculateTotalBillAmount)).to.equal('function');
    });
});

describe("getPerComboPrice",function(){
    it("should return price for Jr.Combo",function(){

        expect(solution.getPerComboPrice("Combo-1")).to.equal(2.5);
        expect(solution.getPerComboPrice("Combo-2")).to.equal(4.5);
        expect(solution.getPerComboPrice("Combo-3")).to.equal(8.5);
        
    });
    
    it("should return error message'Invalid Combo Type' for invalid combo type value",function(){
        expect(solution.getPerComboPrice("Combo-4")).to.equal("Invalid Combo Type");
    });
});

describe("getPerTicketPriceBySeatType",function(){
    it("should return per ticket price for Gold seat",function(){
        expect(solution.getPerTicketPriceBySeatType("Gold")).to.equal(6.0);
    });
    it("should return error message'Invalid Seat Type' for invalid seat type value",function(){
        expect(solution.getPerTicketPriceBySeatType()).to.equal("Invalid Seat Type");
        expect(solution.getPerTicketPriceBySeatType("Diamond")).to.equal("Invalid Seat Type");
    });
});

describe("calculateTotalTicketAmount",function(){
    it("should return total ticket amount for 2  Silver seats",function(){
        expect(solution.calculateTotalTicketAmount("Silver",2)).to.equal(10.0);
    });
    it("should return error message if ticket count is zero",function(){
        expect(solution.calculateTotalTicketAmount("Silver",0)).to.equal("Incorrect Input, TicketCount cannot be Zero or Negative !!");
        expect(solution.calculateTotalTicketAmount("Gold",0)).to.equal("Incorrect Input, TicketCount cannot be Zero or Negative !!");
        expect(solution.calculateTotalTicketAmount("Platinum",0)).to.equal("Incorrect Input, TicketCount cannot be Zero or Negative !!");
    });
    it("should return error message if seat type is invalid",function(){
        expect(solution.calculateTotalTicketAmount("diamond",1)).to.equal("Invalid Seat Type");
    });
});

describe("calculateTotalComboAmount",function(){
    it("should return total amount for 3 Sr.Combo",function(){
        expect(solution.calculateTotalComboAmount("Combo-3",3)).to.equal(25.5);
    });
    it("should return error message if combo count is zero",function(){
        expect(solution.calculateTotalComboAmount("Combo-1",0)).to.equal("Incorrect Input, ComboCount cannot be Zero or Negative !!");
    });
    it("should return error message if combo type is  invalid",function(){
        expect(solution.calculateTotalComboAmount("Combo-6",3)).to.equal("Invalid Combo Type");
    });
});


describe("calculateTotalBillAmount",function(){
    it("should return total booking amount for 2 platinum seats and 1 jumbo Combo",function(){
        expect(solution.calculateTotalBillAmount("Platinum",2,"Combo-2",1)).to.equal(20.5);
    });
    it("should return error message if ticket count is negative", function() {
        expect(solution.calculateTotalBillAmount("Silver", -1, "Combo-2", 1)).to.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    });
    it("should return error mesage if combo count is negative",function(){
        expect(solution.calculateTotalBillAmount("Platinum",2,"Combo-2",-3)).to.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    })
    
});