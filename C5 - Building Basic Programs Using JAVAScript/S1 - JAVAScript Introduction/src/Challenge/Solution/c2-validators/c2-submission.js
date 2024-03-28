/*
    Challenge 2 - Validate Values
*/

let data = {firstName : "James", lastName : "Smith", age : 34, isMarried : true, city : "San Jose", state : "California", postalCode : "CA"};

function performValidation(data) {
    let{firstName,lastName,age,isMarried,city,state,postalcode} = data;
    if(!firstName) {
        return "First Name should not be undefined";
    }
    else if(typeof firstName!=="String") {
        return "First Name Type should be String Type";
    }
    if (lastName && typeof lastName!=="String") {
        return "Last Name Type should be String Type"
    }
    if (age===undefined) {
        return "Age should not be undefined";
    }
    else if (typeof age!=="Number") {
        return "Age Value should be type of Number";
    }
    else if (age<18 || age>60) {
        return "Age should be between 18 and 60";
    }
    if (typeof isMarried!=="Boolean") {
        return "IsMarried should be of Boolean Type";
    }
    if (!city) {
        return "City Value should not be undefined";
    }
    else if (typeof city!=="String") {
        return "City Type should be String Type";
    }
    if (!state) {
        return "State Value should not be undefined";
    }
    else if (city!=="String") {
        return "City Value should be String Type";
    }
    if (!postalcode) {
        return "Postal Code Value should not be undefined";
    }
    else if (postalcode!=="String") {
        return "Postal Code Value should be String Type";
    }
    else {
        return "Data is Valid";
    }
}
let validationMessage = performValidation(data);
console.log(validationMessage);

