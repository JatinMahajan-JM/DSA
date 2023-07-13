function bubbleSort(arr) {
  let sorted;
  for (let i = 0; i < arr.length; i++) {
    sorted = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (sorted) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 43, 22, 334, 2, 322]));
