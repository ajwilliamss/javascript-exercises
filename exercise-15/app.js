let arr = [];
let avg = 0;
let sum = 0;
let elAbove = 0;
let elBelow = 0;

// Get values
for (let i = 0; i < 10; i++) {
  arr[i] = prompt(`Enter value ${i + 1}:`);
}

// Convert elements from string to integer
arr = arr.map(Number);

// Get the sum
sum = arr.reduce((total, element) => {
  return total + element;
});
console.log(sum);

// Calculate average
avg = sum / arr.length;

// Number of elements above or below avg
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > avg) {
    elAbove++;
  } else if (arr[i] < avg) {
    elBelow++;
  }
}

// Output
console.log(`The average value of the array is: ${avg}`);
console.log(`The number of elements above average: ${elAbove}`);
console.log(`The number of elements below average: ${elBelow}`);
