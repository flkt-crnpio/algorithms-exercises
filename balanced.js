/*
 * Given an array of parentheses check if opening and closing elements are same quantity
 */

const open = '[{(';
const closed = ')}]';

function balanced(arr) {
  let balance = 0;
  for(let i=0; i<arr.length; i++) {
    if(open.includes(arr[i]))
      balance ++;
    if(closed.includes(arr[i]))
      balance --;
  }
  if(balance === 0)
    return true;
  else
    return false;
}
// function balanced(arr) {
//   let open = 0;
//   let closed = 0;
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] === '(' || arr[i] === '{' || arr[i] === '[')
//       open++;
//     if(arr[i] === ')' || arr[i] === '}' || arr[i] === ']')
//       closed++;
//   }
//   if(closed === open)
//     return true;
//   else
//     return false;
// }

const arr = ['(','}','(',']',']',']','{','('];
res = balanced(arr);
console.log(res);
