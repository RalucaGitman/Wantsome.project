
/*creati o functie cu doi parametri: un array si o functie. 
Filtrati elementele array-ului pentru care functia returneaza false.*/

function sortArray (arr, fn) {

    // stochezi array-ul initial
    var initialArray = arr;
  
    // filtrezi pe baza functiei primita
    arr = arr.filter(fn);
  
    /* trebuie sa returnezi elementele pentru care functia returneaza false, 
    dar nu se poate face asta cu metoda .filter
    asa ca filtram mai intai dupa functie iar elementele gasite le scoatem
    din Array-ul initial*/
    return initialArray.filter(function(x) {
      return arr.indexOf(x) < 0;
    });
  }
  
  // functia care se aplica pentru fiecare element din Array
  function checkAdult(age) {
    return age >= 18;
  }
  
  /*afisam rezultatul functiei de filtrare care primeste ca parametri un array
  si o functie*/
  console.log(sortArray([1, 23, 15, 18], checkAdult));