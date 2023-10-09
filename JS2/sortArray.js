// Perform sorting of an array in descending order.

function merge(arr, left, middle, right) { 
	let sorted = [arr.length];
	
    let l1 = left; 
	let l2 = middle+1;
    let x = 0; 
	
	while (l1 <= middle && l2 <= right) { 
		if (arr[l1] > arr[l2]) { 
			sorted[x] = arr[l1]; 
			l1++; 
		} else { 
			sorted[x] = arr[l2]; 
			l2++; 
		} 
		x++; 
	} 
	 
	while (l1 <= middle) { 
		sorted[x] = arr[l1]; 
		l1++; 
		x++; 
	} 
	while (l2 <= right) { 
		sorted[x] = arr[l2]; 
		l2++; 
		x++; 
	} 
	
	let j=left
	for(let i=0; i<sorted.length; i++, j++){
	    arr[j] = sorted[i];
	}
} 
 
function mergeSort(arr, left, right) { 
	if (left >= right) { 
		return; 
	} 
	
	let middle = left + parseInt((right - left) / 2); 
	
	mergeSort(arr, left, middle); 
	mergeSort(arr, middle + 1, right); 
	
	merge(arr, left, middle, right); 
} 

const arr = [ 38, 27, 43, 10, 5, 41];
console.log("Original array: " + arr); 
mergeSort(arr, 0, arr.length - 1); 
console.log("After sorting: " + arr);
