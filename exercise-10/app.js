let letters = 0;
let digits = 0;

let answer = prompt("Enter a string: ");
// Remove punctuation
answer = answer.replace(/[^\w\s]|_/g, "");

let characters = answer.split("");
// Remove spaces
characters = characters.filter((character) => {
  return /\S/.test(character);
});

// Check if letter or number
characters.forEach((character) => {
  if (/[a-zA-Z]/.test(character)) {
    letters += 1;
  } else if (/^\d+$/.test(character)) {
    digits += 1;
  }
});

console.log(`The string contains ${digits} digits`);
console.log(`The string contains ${letters} letters`);
