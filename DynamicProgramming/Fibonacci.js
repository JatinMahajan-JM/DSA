function Fibonacci(num, memo = []) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  const result = Fibonacci(num - 1, memo) + Fibonacci(num - 2, memo);
  memo[num] = result;
  return result;
}

console.log(Fibonacci(16));
