/*var age = 20

if (age<15) {
    alert("reducere 25%")
}

else if (age>15 && age<25) {
    alert("reducere 10%")
}

else {
    alert ("nici o reducere")
}
*/

/*
var age = 20;

switch (age) {
  case 15:
    alert("25% reducere");
    break;
  case 16:
    alert("20% reducere");
    break;
  case 17:
    alert("15% reducere");
    break;
  case 18:
    alert("10% reducere");
    break;
  default:
    alert("nici o reducere");
}   
*/
/*
var age = 20

if (age==15) {
    alert("reducere 25%");
}
else if (age==16) {
    alert("reducere 20%");
}
else if (age==17) {
    alert ("reducere 15%");
}
else if (age==18)  {
    alert ("reducere 10%");
}
else {
    alert ("nici o reducere");
}
*/

// for (var i = 0; i < 100; i++) {
//   console.log(i);
// }
/*
for (var i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/
/*
for (var i = 2; i < 100; i+=2) {
      console.log(i);
  }
*/

/*
var i=0;
while (i < 100) {
    console.log(i);
    i++;
}
*/
/*
var i=2;
while (i < 100) {
    console.log(i);
    i+=2;
}
*/

/* suma
var sum=0;
for (var i = 0; i < 5; i++) {
    sum = sum + i;
}
*/

/*
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 100);
*/

/*
var x;
var array = [2, 3, 4, 0, 5];

for ()



function sum(a, c) {
  const sum = a + c;
  console.log(sum)
}*/

/*
function makeDiff(d) {
  function inner(s){
    return d-s;
  }
}
const diff10 = makeDiff((10));
console.log(diff10(3));




const arr = []

for (var i = 0; i < 2; i++) {
  function iteration() {
    return i;
  }
  arr.push(iteration);
}

for (var i = 0; i < arr.length; i++) {

} */




function bankAccount(n, b) {
  var name = n;
  var balance = b;

  function depositt(amount) {
    balance = balance + amount;
  }
 
  function widtrawal(amount) {
    balance = balance - amount;
  }

  function showName (name) {
    return name;
  }
  function showBalance (balance) {
    return balance;
}

var Account1 = createAcc(John,100)
var Account2 = createAcc(Eva,300)

function transfer(amount, account){
  balance -= amount,
  account.depositt(amount);
  }
}
/*
/*
console.log (Hello ${name} , your balance is ${balance} )
*/



/*
var balance = [{amount, operation, date}]

widtrawal(amount) {
  balance.push({amount, //:amount; operation})
}


Tema: function showHistory(transactions){}
array de obiecte (amount, operations, date)

calcul ultimul balance + ...
*/