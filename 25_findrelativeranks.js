// Worst Case

function worstfindRelativeRanks(score) {
    const rankMap = {};
    const result = [];

    // Create a copy of the scores array and sort it in descending order.
    const sortedScores = score.slice().sort((a, b) => b - a);

    for (let i = 0; i < score.length; i++) {
        if (i === 0) {
            rankMap[sortedScores[i]] = "Gold Medal";
        } else if (i === 1) {
            rankMap[sortedScores[i]] = "Silver Medal";
        } else if (i === 2) {
            rankMap[sortedScores[i]] = "Bronze Medal";
        } else {
            rankMap[sortedScores[i]] = (i + 1).toString();
        }
    }

    for (let s of score) {
        result.push(rankMap[s]);
    }

    return result;
}

// Best Case

function bestfindRelativeRanks(score) {
 const sortedIndices = score.map((_, idx) => idx).sort((a, b) => score[b] - score[a]);
    const result = new Array(score.length);
    
    for (let i = 0; i < sortedIndices.length; i++) {
        if (i === 0) {
            result[sortedIndices[i]] = "Gold Medal";
        } else if (i === 1) {
            result[sortedIndices[i]] = "Silver Medal";
        } else if (i === 2) {
            result[sortedIndices[i]] = "Bronze Medal";
        } else {
            result[sortedIndices[i]] = (i + 1).toString();
        }
    }
    
    return result;

}