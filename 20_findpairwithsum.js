// Traditional Approach
function findPairWithSumTraditional(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) {
          return [array[i], array[j]];
        }
      }
    }
    return [];
  }
  
  // Optimized Approach
  function findPairWithSumOptimized(array, targetSum) {
    const numMap = {};
  
    for (let i = 0; i < array.length; i++) {
      const difference = targetSum - array[i];
      if (numMap[array[i]]) {
        return [difference, array[i]];
      }
      numMap[difference] = true;
    }
  
    return [];
  }
  
  // Another Approach
  function findPairWithSumAnother(array, targetSum) {
      const numMap = {};
  
      for (let num of array) {
          const difference = targetSum - num;
          if (numMap[difference]) {
              return [difference, num];
          }
          numMap[num] = true;
      }
  
      return [];
  }