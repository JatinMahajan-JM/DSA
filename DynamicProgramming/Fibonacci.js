function Fibonacci(num, memo = []) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  const result = Fibonacci(num - 1, memo) + Fibonacci(num - 2, memo);
  memo[num] = result;
  return result;
}

console.log(Fibonacci(16));

//bottom up
function fibonacci_tabulation(n) {
  if (n <= 2) return 1;
  let fibonacci = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[n];
}
