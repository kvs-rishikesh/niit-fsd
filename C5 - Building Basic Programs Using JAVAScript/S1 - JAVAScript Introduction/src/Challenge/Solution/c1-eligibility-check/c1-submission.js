let contestants = [
 
    { age: 23, gender: "Female", isNotCitizen: true, state: "New York" },
  
  
    { age: 29, gender: "Female", isNotCitizen: true, state: "New Jersey" },
  
   
    { age: 18, gender: "Female", isNotCitizen: false, state: "Maryland" },
  
    
    { age: 15, gender: "Male", isNotCitizen: true, state: "Virginia" },
  
   
    { age: 20, gender: "Female", isNotCitizen: true, state: "" }];
  
  function checkEligibility(contestant) {
    let { age, gender, isNotCitizen, state } = contestant;
    if (isNotCitizen) { 
      return "Not Eligible";
    }
  
      else if (gender === "Female" && age >= 18 && age <= 28  ) {
             if (state === "") {
                   return "State missing";
               }
           return "Eligible";
         }       
          else {
          return "Not Eligible";
          }
  }
  contestants.forEach((contestant, index) => {
    let eligibility = checkEligibility(contestant);
    console.log(`Contestant ${index + 1} from ${contestant.state} is ${eligibility}`);
  });
  