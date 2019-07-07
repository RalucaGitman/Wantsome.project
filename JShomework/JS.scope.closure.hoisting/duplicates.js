function removeDuplicates(abcd) {
  var res = "".concat(abcd);
  var arr1 = res.split("");
  var arr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr2.push(arr1[i]);
    }
  }
  return arr2.join("");
}
console.log(removeDuplicates(125548999));
