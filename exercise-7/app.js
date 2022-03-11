let numbers = [];
for (let i = 0; i < 7; i++) {
  if (i === 3 || i === 6) {
    continue;
  }
  numbers.push(i);
}
console.log(numbers.join(" "));
