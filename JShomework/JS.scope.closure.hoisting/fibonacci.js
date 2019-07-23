function fibonacci(n) {
  var a = 0;
  var b = 1;
  for (var i = 0; i < n; i++) {
    var x = b;
    b = a + b;
    a = x;
  }
  return a;
}
console.log(fibonacci(7));



/*in clasa
functie recursiva(nu uita conditia de stop)

function fibo(n) {
  if (n === 1 || n ===2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(9));
*/