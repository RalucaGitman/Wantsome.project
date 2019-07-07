//using for
function getOlder(persons) {
  var eighteenPlus = [];
  for (var i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      eighteenPlus.push(persons[i]);
    }
  }
  return eighteenPlus;
}

var older = getOlder([
  { name: "Bob", age: 32 },
  { name: "Tom", age: 18 },
  { name: "Chris", age: 15 },
  { name: "Eva", age: 29 }
]);

console.log(older);

/*using filter
function getOlder2(persons){
    return persons.filter(function(person) {
     if(person.age >= 18) {
        return true;
     }
  });
}

console.log(getOlder2([
    { name: "Bob", age: 32 },
    { name: "Tom", age: 18 },
    { name: "Chris", age: 15 },
    { name: "Eva", age: 29 }
  ]));
  */
