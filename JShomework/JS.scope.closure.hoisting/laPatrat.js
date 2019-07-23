/*function Square(n) {
  var str = "".concat(n);
  var arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    var num = Number(arr[i]);
    arr[i] = num * num;
  }
  return Number(arr.join(""));
}
console.log(Square(934));
*/

/*function squareDigits(num) {
  const result
  const digits = String(num)
  .split("")
  .map(Number); // -> ["1", "2", "3"]

  digits.forEach(function(digit) {
    result.push(digit * digit)
  })
  return Number(result.join(""));

}// folosind IIFE : var i = 0.....(function(i){})

console.log(squareDigits(123));


//MakeAdder Function

function makeAdder(firstOperand) {
  return function add(secondOperand) {
    return firstOperand + secondOperand
  }
}*/

//BuildFun
function buildFun(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    // folosind IIFE : var i = 0.....(function(i){})
    //(function(i) {
      result.push(function() {
        console.log(i);
      });
   // })(i);
  }
  return result;
} 
var funArr = buildFun(5);

for(var i=0;i<funArr.length;i++){
  funArr[i]();
}
//const functions = buildFun(5);

/*functions.forEach(function(el) {
  console.log(functions)
}*/
