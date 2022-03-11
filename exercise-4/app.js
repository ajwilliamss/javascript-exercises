let humanAge = prompt("Enter the dog's age (in human years): ");

// For the first two years, each dog year is equal to 10.5 human years
if (humanAge <= 2) {
  console.log(`The dog's age in dog years is ${humanAge * 10.5}`);
}
// After that, each dog year equals 4 human years
else {
  console.log(`The dog's age in dog years is ${21 + (humanAge - 2) * 4}`);
}
