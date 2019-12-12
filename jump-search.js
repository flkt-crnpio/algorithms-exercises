/*
 */

function jumpSearch(arr, search, steap, init) {
  if(arr[init]) {
    if(arr[init] === search) {
      console.log('found');
      return init;
    } else if(arr[init] < search) {
      console.log('jump');
      return jumpSearch(arr, search, steap, init + steap);
    } else {
      console.log('back');
      for(let i = init-steap; i<=init; i++){
        if(arr[i] === search) {
          console.log('found');
          return i;
        }
      }
    }
  }
  return -1;
}

const arr = [2,4,7,9,12,23,34,45,56];
const search = 2;
const steap = 4;

res = jumpSearch(arr, search, steap, steap);
console.log(res);
