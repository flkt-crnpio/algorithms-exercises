/*
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
 * Print the decimal value of each fraction on a new line.
 */

function plusMinus(arr) {
    let num = [0,0,0];
    for(const number of arr) {
        if(number === 0) {
            num[2] ++;
        }
        else if(number < 0) {
            num[1] ++;
        }
        else if(number > 0) {
            num[0] ++;
        }
    }
    num.map(n => {
      console.log( (n/arr.length).toFixed(6) );
    })
}

const arr = [2,5,-1,0,-3,-2];
plusMinus(arr);
