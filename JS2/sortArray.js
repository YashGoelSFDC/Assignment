// Perform sorting of an array in descending order.

let array = [45, 73, 9, 6, 18, 89, 2, -4, -65, 25];

function sortArray(arr)
{
    console.log("Unsorted Array:"+ arr);
    arr.sort((a,b) => b-a);
    console.log("Sorted Array:" + arr);
}

sortArray(array);