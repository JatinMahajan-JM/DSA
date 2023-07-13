function recFibonacci(a) {
  if (a == 1 || a === 2) return 1;
  return recFibonacci(a - 2) + recFibonacci(a - 1);
}

console.log(recFibonacci(10));
