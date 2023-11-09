// Traditional Approach
function chunkArrayInGroupsTraditional(arr, size) {
    let temp = [];
    const result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  // Optimized Approach
  function chunkArrayInGroupsOptimized(arr, size) {
    // Break it up.
    const newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  
  // Another Approach
  function chunkArrayInGroupsAnother(arr, size) {
      const newArr = [];
      let i = 0;
  
      while (i < arr.length) {
          newArr.push(arr.slice(i, i + size));
          i += size;
      }
  
      return newArr;
  }