let num1 = 0;
let num2 = 1;
let nextNum = 0;
let numbers = [num1, num2];

let size = prompt("How many numbers from the Fibonacci series must be shown? ");

console.log("The first 10 numbers in the series: ");

for (let i = 2; i < size; i++) {
  nextNum = num1 + num2;
  numbers.push(nextNum);
  num1 = num2;
  num2 = nextNum;
}

console.log(numbers.join(" "));
