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
