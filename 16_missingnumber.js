// Traditional Approach

function missingNumberHashSet(arr) {
    let n = arr.length;
    let hashSet = new Set();

    // Add all elements of the array to the hashset
    for (let i = 0; i < n; i++) {
        hashSet.add(arr[i]);
    }

    // Check each integer from 1 to n
    for (let i = 1; i <= n; i++) {
        // If the integer is not in the hashset, it is the missing integer
        if (!hashSet.has(i)) {
            return i;
        }
    }

    // If no integer is missing, return n+1
    return 0;
}

// Optimized Approach

function missingNumberOptimized(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}

// XOR Approach

function missingNumberXOR(arr) {
    let n = arr.length;
    let xorSum = 0;

    // XOR all numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        xorSum ^= i;
    }

    // XOR all elements in the array
    for (let num of arr) {
        xorSum ^= num;
    }

    return xorSum;
}