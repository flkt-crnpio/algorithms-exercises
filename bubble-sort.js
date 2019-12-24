function bubbleSort(arr) {
	for(let x=0; x<arr.length; x++) {
		for(let y=0; y<arr.length-x-1; y++) {
			if(arr[y] > arr[y+1]) {
				[ arr[y], arr[y+1] ] = [ arr[y+1], arr[y] ];
			}
		}
	}
	return arr;
}

const arr = [5,1,4,2,8];
console.log(bubbleSort(arr));
