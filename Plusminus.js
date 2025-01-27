const prompt = require("prompt-sync")();

function plusminus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length ; i++) {
   
   if (arr[i] > 0) {
      positive++
    } else if(arr[i] < 0) {
      negative++
    } else if(arr[i] === 0){
     zero++
    }
  }
  console.log(positive, negative, zero);
  positive = (positive / arr.length).toFixed(6);
  negative = (negative / arr.length).toFixed(6);
  zero = (zero / arr.length).toFixed(6);
  console.log(positive);
  console.log(negative);
  console.log(zero);
  // return 

}

function main() {
  const n = parseInt(prompt(""), 10);

  const input = prompt("");

  const arr = input.split(" ").map(Number);

  if (arr.length !== n) {
    console.log(`กรุณาป้อนจำนวนตัวเลขให้ตรงกับ ${n} ตัว`);
  } else {
    console.log(arr);
  }

  plusminus(arr);
}
main();
