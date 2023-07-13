function pivotHelper(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivotHelper([10, 2, 42, 32, 24, 2]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

console.log(quickSort([1, 32, 4, 23, 2, 32, 2]));
