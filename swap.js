/*
 * con un arreglo que deberia estar ordenado en orden ascendente
 * si cada numero puede moverse solo dos espacios hacia abajo
 * determinar si se puede llegar a el arreglo dato
 * regresar cuandos movimientos se hicieron para llegar a las posiciones del arreglo
 */

function swapArr(arr) {
  let swap = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > arr[i+1]) {
      if((arr[i] - (i + 1)) > 2) {
        return 'no se puede';
      }
      swap += arr[i]-arr[i+1];
    }
  }
  return swap;
}

// prop ordenar arr metodo burbuja y contar swaps

// const arr = [1,2,3,4,5,8,6,7];
const arr = [2,1,5,3,4];
// const arr = [2,5,1,3,4];
// const arr = [5,4,3,2,1];
resp = swapArr(arr);
console.log(resp);
