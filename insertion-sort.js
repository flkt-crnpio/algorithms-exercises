const arr = [76,3,7,2,4,6,9,1,12,45,8,5];

// iife function
(function() {
  'use strict';

  console.log(arr);
  for(let i = 1; i <= arr.length; i++) {
    console.log(`i ${i}[${arr[i]}]`);
    let j = i - 1;
    while( j >= 0 && arr[j] > arr[j+1]) {
      console.log(`  j ${j}[${arr[j]}]`);
      console.log(`    swap i[${arr[j+1]}] j[${arr[j]}]`);
      [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      j--;
    }
  }
  console.log(arr);
}());
