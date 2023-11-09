// Traditional Approach
function enchantedArrayShufflingTraditional(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      if (left === right) {
        shuffledArray.push(sortedArray[left]);
      } else {
        shuffledArray.push(sortedArray[left]);
        shuffledArray.push(sortedArray[right]);
      }
  
      left++;
      right--;
    }
  
    return shuffledArray;
  }
  
  // Optimized Approach
  function enchantedArrayShufflingOptimized(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      shuffledArray.push(sortedArray[left++]);
      shuffledArray.push(sortedArray[right--]);
    }
  
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    }
  
    return shuffledArray;
  }
  
  // Another Approach
  function enchantedArrayShufflingAnother(originalArray) {
      const sortedArray = [...originalArray].sort((a, b) => a - b);
      const shuffledArray = [];
  
      let left = 0;
      let right = sortedArray.length - 1;
  
      while (left < right) {
          shuffledArray.push(sortedArray[left++]);
          shuffledArray.push(sortedArray[right--]);
      }
  
      if (left === right) {
          shuffledArray.push(sortedArray[left]);
      }
  
      return shuffledArray;
  }