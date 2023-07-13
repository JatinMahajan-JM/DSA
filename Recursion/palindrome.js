function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  return str[0] === str[str.length - 1] && palindrome(str.slice(1, -1));
}

// anna -> ann

console.log("rotator".slice(1, 6));
console.log(palindrome("rotator"));
console.log(palindrome("hello"));
console.log(palindrome("a man a plan a canal Panama"));
console.log(palindrome("12321"));
