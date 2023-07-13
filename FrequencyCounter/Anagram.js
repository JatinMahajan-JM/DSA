//checks if two strings are anagram

function checkAnagram(str1, str2) {
  const obj1 = {};
  for (let item of str1) {
    obj1[item] = obj1[item] ?? 0 + 1;
  }

  for (let item of str2) {
    if (!obj1[item]) return false;
    else obj1[item] -= 1;
  }

  return true;
}

console.log(checkAnagram("iceman", "cinema"));
