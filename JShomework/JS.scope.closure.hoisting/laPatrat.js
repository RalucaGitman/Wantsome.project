function Square(n){
  var str = "".concat(n);
  var arr = str.split("");
  for(i = 0 ; i < arr.length ; i++) {
      var num = Number(arr[i]);
      arr[i] = num*num;
  }
   return Number(arr.join(""));
}
console.log(Square(934))