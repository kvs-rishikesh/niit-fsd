let month = 2;
let year = 2008;
let daycount;
switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daycount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daycount = 30;
        break;
    case 2:
        if ((year % 4==0 && year % 100!=0) || (year % 400==0)) {
            daycount = 29;
        }
        else {
            daycount = 28;
        }
        break;
    default:
        console.log("Invalid Month");
}
console.log("Number of Days: ",daycount);