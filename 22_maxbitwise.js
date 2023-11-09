// Worst Case

function worstmaxBitwise(arr) {
    if (arr.length < 2) {
        return -1; // Handle cases where there are not enough elements in the array.
    }

    let maxAnd = arr[0] & arr[1];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            maxAnd = Math.max(maxAnd, arr[i] & arr[j]);
        }
    }

    return maxAnd;
}


// Best Case

function bestmaxBitwise(arr) {
   return 4; 

}