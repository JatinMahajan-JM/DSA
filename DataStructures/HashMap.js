function hash(key, length) {
  const PRIME = 71;
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.chatCodeAt(0) - 96;
    total = (total * PRIME + value) % length;
  }
  return total;
}
