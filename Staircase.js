const prompt = require("prompt-sync")();

function staircase(n){
 for (let i = 1; i <= n; i++) {
  let spaces = ' '.repeat(n - i); 
  let sharp = '#'.repeat(i); 
  console.log(spaces + sharp);
}
}
function main() {
 const n = parseInt(prompt(""), 10);
 staircase(n);
}
main()