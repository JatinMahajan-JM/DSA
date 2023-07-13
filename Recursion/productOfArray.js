function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
}

console.log(productOfArray([1, 2, 3, 4, 5, 6]));

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(0, arr.length - 1));
