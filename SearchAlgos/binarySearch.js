function binarySearch(arr, target) {
  let i = 0,
    j = arr.length - 1;
  let middle = Math.floor((i + j) / 2);
  while (arr[middle] !== target && i <= j) {
    if (arr[middle] < target) i = middle + 1;
    else j = middle - 1;
    middle = Math.floor((i + j) / 2);
  }

  if (arr[middle] === target) return middle;
}

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;
const index = binarySearch(sortedArray, targetValue);
console.log(index);
