
//Sort the marks from an array of marks passed as parameter
function sortMarks(marks){
    //const marks = [85, 92, 78, 65, 88, 75, 90, 70, 82, 95];
    const n = marks.length;
    for (let i=0; i<n-1; i++) {
        for (let j=i+1; j<n; j++) {
            if (marks[i]>marks[j]) {
                const temp = marks[i];
                marks[i] = marks[j];
                marks[j] =  temp;
            }
        }
    }
    return marks;

}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    sortMarks
}
