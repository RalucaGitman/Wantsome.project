// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
document.body.style.fontFamily = "Arial, sans-serif"; 

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
const arr = document.querySelectorAll("li");
arr[0].innerText += " Raluca";
arr[1].innerText += " coffee";
arr[2].innerText += " Botosani";

console.log(arr);
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
const list = document.querySelectorAll("li");
list.forEach(li => {
    li.classList.add("listitem");
})

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra
const img = document.createElement("img");
document.body.appendChild(img);
img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlffZDFmoRyBmtrnXF4Yac0rJfC1zUG4RJoA7N9GAZTTtOMHcN");

