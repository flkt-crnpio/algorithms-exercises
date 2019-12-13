function selectionSort(arr) {
  for(let [i,v] of arr.entries()) {
    let min = i;
    for(let j = i+1; j<arr.length; j++) {
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    [ arr[i], arr[min] ] = [ arr[min], arr[i] ];
  }
  return arr;
}

const arr = [7,3,5,1,9,5,6];
let resp = selectionSort(arr);
console.log(resp);
