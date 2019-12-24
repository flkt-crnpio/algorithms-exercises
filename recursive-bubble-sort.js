function recursiveBubbleSort(arr, last) {
	if(arr.length === 1) {
		return arr;
	}

	for(let x=0; x<arr.length - last; x++) {
		if(arr[x] > arr[x+1]) {
			[ arr[x], arr[x+1] ] = [ arr[x+1], arr[x]];
			recursiveBubbleSort(arr, last++);
		}
	}
	return arr;
}

const arr = [2,5,8,1,4,9,3];
console.log(recursiveBubbleSort(arr, 1))
