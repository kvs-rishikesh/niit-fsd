/*
    Challenge 3 - Know Your Lucky Number
*/ 
let dateofBirth = "18072001";
let sum = 0;
for (let i=0;i<dateofBirth.length;i++) {
    let char = dateofBirth[i];
    if(!isNaN(char)) {
        sum = sum+parseInt(char);
    }
} 
    while (sum>9) {
        let newSum = 0;
        while(sum>0) {
            newSum+=sum%10;
            sum = Math.floor(sum/10);
        }
    
    sum = newSum;
}
console.log("Lucky Number is ", sum);