/*creati o functie cu doi parametri: un array si o functie. Returnati un nou
array cu fiecare element modificat de functia pasata ca argument.
*/
function sortArray(ages,fn) {
  
    return ages.map(fn);
  }
  function agePlusOne(age) {return age + 1; }
 
  console.log(sortArray([1,2,3,4,5], agePlusOne));


 