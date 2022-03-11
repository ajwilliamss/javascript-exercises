let amount = prompt("How many numbers must be entered: ");
let even = 0;
let odd = 0;
let numbers = [];

numbers[amount];
for (let i = 0; i < amount; i++) {
  let val = prompt("Enter value " + (i + 1));
  numbers.push(val);
}

for (let i = 0; i < amount; i++) {
  if (numbers[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("The number of odd numbers in the series = " + odd);
console.log("The number of even numbers in the series = " + even);
