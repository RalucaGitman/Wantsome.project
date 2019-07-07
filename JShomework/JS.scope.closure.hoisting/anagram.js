function anagram(word1, word2) {
  var word1Alph = alphabetize(word1);
  var word2Alph = alphabetize(word2);
  return word1Alph === word2Alph;
}

function alphabetize(word) {
  var arr = word.split("");
  arr.sort();
  return arr.join("");
}

console.log(anagram("read", "dear"));
