function calculateAverage(marks) {
    //const marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
    
    let sum = 0;

    for (let m of marks) {
        sum += m;
    }

    const averageMarks = sum / marks.length;

    return averageMarks;
}




// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateAverage
}