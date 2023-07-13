function revArray(arr) {
  if (arr.length === 1) return arr;
  return [arr[arr.length - 1], ...revArray(arr.slice(0, arr.length - 1))];
}

// 1234 4321
console.log(revArray([1, 2, 3, 4]));
