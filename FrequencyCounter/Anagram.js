//checks if two strings are anagram

function checkAnagram(str1, str2) {
  const obj1 = {};
  for (let item of str1) {
    obj1[item] = (obj1[item] ?? 0) + 1;
  }

  console.log(obj1)

  for (let item of str2) {
    if (!obj1[item]) return false;
    else obj1[item] -= 1;
  }

  return true;
}

function checkAnagram2(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(checkAnagram("iceman", "cinema"));
console.log(checkAnagram("hhhhu", "hhhuh"));
console.log(checkAnagram2("hhhhu", "hhhuh"));

