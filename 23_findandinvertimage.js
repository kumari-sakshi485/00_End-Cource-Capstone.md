// Worst Case

function worstflipAndInvertImage(image) {
    const n = image.length;
       const result = new Array(n);
   
       for (let i = 0; i < n; i++) {
           const reversedRow = image[i].reverse();
           const invertedRow = reversedRow.map((bit) => (bit === 0 ? 1 : 0));
           result[i] = invertedRow;
       }
   
       return result;
   
   }
   
   // Best Case
   
   function bestflipAndInvertImage(image) {
       return image;
   
   
   }