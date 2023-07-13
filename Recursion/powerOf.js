function powerOf(n1, n2) {
  if (n2 === 0) return 1;
  return n1 * powerOf(n1, n2 - 1);
}

console.log(powerOf(3, 3));
