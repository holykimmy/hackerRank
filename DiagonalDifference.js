function diagonalDifference(arr) {
  let ansRtoL = 0;
  let ansLtoR = 0;

  for (let i = 0, j = arr.length - 1 ; i < arr.length; i++ ,j--) {
    console.log("ii ", arr[i][i]);
    ansRtoL += arr[i][i];
    console.log("jj ",arr[i][j]);
    ansLtoR += arr[i][j];
  }

  console.log(ansRtoL, ansLtoR);
  return Math.abs(ansRtoL - ansLtoR);
}

function main() {
  const prompt = require("prompt-sync")();

  const n = parseInt(prompt(""), 10);

  let arr = [];
  for (let i = 0; i < n; i++) {
    let row = prompt("").split(" ").map(Number);
    arr.push(row);
  }

  const result = diagonalDifference(arr);
  console.log("Result:", result);
}

main();
