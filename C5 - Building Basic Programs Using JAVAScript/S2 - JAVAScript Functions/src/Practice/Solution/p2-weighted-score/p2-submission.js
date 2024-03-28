function calculateTotalWeightedScore(assignmentScore,projectScore,quizScore,midTermScore,finalExamScore) {
    let assignmentWeight = 10;
    let projectWeight = 35;
    let quizWeight = 10;
    let midTermWeight = 15;
    let finalExamWeight = 30;
    console.log('Assignment Type     Weighted Score');
    let assignmentWeightScore = (assignmentWeight/100)*assignmentScore;
    console.log('Assignment',        $(assignmentWeightScore));
    let projectWeightedScore = (projectWeight/100)*projectScore;
    console.log('Project',           $(projectWeightedScore));
    let quizWeightedScore = (quizWeight/100)*quizScore;
    console.log('Quizzes',           $(quizWeightedScore));
    let midTermWeightedScore = (midTermWeight/100)*midTermScore;
    console.log('Mid Term',          $(midTermWeightedScore));
    let finalExamWeightedScore = (finalExamWeight/100)*finalExamScore;
    console.log('Final Exam',        $(finalExamWeightedScore));

    let overallWeightedScore = assignmentWeightScore+projectWeightedScore+quizWeightedScore+midTermWeightedScore+finalExamWeightedScore;
    console.log('Total Weighted Score: ', $(overallWeightedScore));
}

calculateTotalWeightedScore(97,82,60,75,80);