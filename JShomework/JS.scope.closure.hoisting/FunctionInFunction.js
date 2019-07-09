function makeAdder(n){
    return function(m){
      return n + m;
    }
  }
  
  const add3 = makeAdder(3);
  const add5 = makeAdder(5);
  
  console.log(add3(10));
  console.log(add3(5));
  console.log(add5(10));