function calculateSum(num) {
  if (num === 1) return 1;
  return num + calculateSum(num - 1);
}

console.log(calculateSum(5));
