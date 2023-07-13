function maxSumSubarray(arr, length) {
  let max = 0,
    tempSum = 0;
  for (let i = 0; i < length; i++) max += arr[i];
  tempSum = max;
  for (let i = length; i < arr.length; i++) {
    tempSum = tempSum - arr[i - length] + arr[i];
    max = Math.max(max, tempSum);
  }
  return max;
}

console.log(maxSumSubarray([1, 2, 343, 53, 2, 2, 554, 3342, 232], 2));
