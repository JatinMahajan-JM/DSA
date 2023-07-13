const arr1 = [1, 2, 3, 4, 5, 10];
const arr2 = [4, 9, 25, 1, 16];

//check if second array contains squared values of array1
const checkSquared = (arr1, arr2) => {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let item of arr1) {
    frequencyCounter1[item] = frequencyCounter1[item] ?? 0 + 1;
  }

  for (let item of arr2) {
    frequencyCounter2[item] = frequencyCounter2[item] ?? 0 + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);

  for (let item in frequencyCounter1) {
    if (!(item ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[item ** 2] !== frequencyCounter1[item]) return false;
  }

  return true;
};

console.log(checkSquared(arr1, arr2));
