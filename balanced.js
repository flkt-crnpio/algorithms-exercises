function balanced(arr) {
  let open = 0;
  let closed = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === '(' || arr[i] === '{' || arr[i] === '[')
      open++;
    if(arr[i] === ')' || arr[i] === '}' || arr[i] === ']')
      closed++;
  }
  if(closed === open)
    return true;
  else {
    return false;
  }
}

const arr = ['(','(','(',']',']',']'];
res = balanced(arr);
console.log(res);
