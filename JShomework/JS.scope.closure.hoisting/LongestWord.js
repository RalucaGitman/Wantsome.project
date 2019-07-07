function splitFunction(str) {
  var arr = str.split(" ");

  var longestWord = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  console.log(longestWord);
}
splitFunction("Find the longest word");
