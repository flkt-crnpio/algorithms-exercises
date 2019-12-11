/*
 */

function binarySearch(arr, search, left, right) {
  if(left <= right) {
    let mid = parseInt((left+right)/2)
    if(arr[mid] == search) {
      console.log('found');
      return mid;
    } else if(arr[mid] < search) {
      console.log('up');
      return binarySearch(arr, search, mid + 1, right);
    } else {
      console.log('down');
      return binarySearch(arr, search, left, right - 1);
    }
  }
}

const arr = [2,4,7,9,12,23,34,45,56];
const search = 23;

res = binarySearch(arr, search, 0, arr.length);
console.log(res);
