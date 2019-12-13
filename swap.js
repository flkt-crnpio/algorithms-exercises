function swapArr(arr) {
  let swap = 0;
  for(let i=0; i<arr.length; i++) {

    if(arr[i] > arr[i+1]) {

      if((arr[i] - (i + 1)) > 2) {
        return 'no se puede';
      }
      let tmp = arr[i]-arr[i+1];
      swap += tmp;
    }
  }
  return swap;
}

// ordenar arr metodo burbuja // contar swaps


// const arr = [1,2,3,4,5,8,6,7];
const arr = [2,1,5,3,4];
// const arr = [2,5,1,3,4];
// const arr = [5,4,3,2,1];
resp = swapArr(arr);
console.log(resp);
