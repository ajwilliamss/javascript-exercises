let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

// Convert from string to integer
age = parseInt(age);

// If older than 18
if (age >= 18) {
  console.log(`Hi ${name}. You qualify to apply for a car driver license.`);
}
// If 17
else if (age === 17) {
  console.log(`Hi ${name}. You qualify to apply for a car learner license.`);
}
// Younger than 17
else {
  console.log(
    `Hi ${name}. You can't apply for a learner or driver license yet.`
  );
}
