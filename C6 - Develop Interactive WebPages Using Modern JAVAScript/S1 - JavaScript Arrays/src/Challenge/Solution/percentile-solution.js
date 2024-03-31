//function to sort the array of marks passed as parameter
function sortArray(marks) {
    const n = marks.length;
    for (let i=0; i<n-1; i++) {
        for (let j= i+1; j<n; j++) {
            if (marks[i]>marks[j]) {
                const temp = marks[i];
                marks[i] = marks[j];
                marks[j] = temp;
            }
        }
    }
    return marks;
}

//function to compute and return the percentile array
function calculatePercentileArray(marksArray) {
    const sortedMarks = sortArray(marksArray);
    const percentile=[];
    for (let i=0; i<sortedMarks.length; i++) {
        let count=0;
        for (let j=0; j<sortedMarks.length; j++) {
            if (sortedMarks[j]<sortedMarks[i]) {
                count++;
            }
        }
        percentile[i] = Math.round(((count/sortedMarks.length)*100*100)/100);
    }
    return percentile;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
sortArray,
calculatePercentileArray
}