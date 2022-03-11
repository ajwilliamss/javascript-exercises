let numArr = [];

// Get three values from the user
for (let i = 0; i < 3; i++) {
  let num = prompt(`Enter number ${i + 1}: `);
  numArr.push(num);
}

// console.log(numArr);

// Function that return the median
const median = (arr) => {
  let middle = Math.floor(arr.length / 2);
  // console.log(middle);
  let numbers = [...arr].sort((a, b) => a - b);
  // console.log(numbers);
  return arr.length % 2 !== 0
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

console.log(median(numArr));
