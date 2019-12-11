/*
 * Linear search algorithm is a simple and basic search algorithm
 * in which we traverse the array while looking for the number to be searched.
 */

function linearSearch(arr, intSearching) {
  for(let i = 0; i <= arr.length; i++){
    if(arr[i]== intSearching) {
      return i;
    }
  }
  return -1;
}

const arr = [2,4,7,9,12,23,34,45,56];
const intSearching = 23;
res = linearSearch(arr, intSearching);
console.log(res);
