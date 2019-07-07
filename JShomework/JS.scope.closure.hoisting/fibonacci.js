function fibonacci(n) {
 var a = 0;
 var b = 1;
 for(var i = 0; i < n; i++){
     var x = b;
     b = a + b;
     a = x;
 }
 return a;
}
console.log(fibonacci(7))