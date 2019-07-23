function star() {
  for (var row = 1; row <= 5; row++) {
    var starsPerLine = "";
    for (var column = 0; column < row; column++) {
      starsPerLine = starsPerLine + "*";
    }
    console.log(starsPerLine);
  }
}

star();


/* function prettyPrint(n = 5) {
  let steluta = "*";
  for (let i = o; i <n ; i++) {
    console.log(steluta);
    steluta+= "*";
  }
}
prettyPrint(10);
*/
