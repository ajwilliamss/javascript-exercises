let letter = prompt("Enter a letter: ");

// regex to match vowel or consonant
const vowel = letter.match(/[aeiou]/gi);
const consonant = letter.match(/[^aeiou]/gi);

// If vowel
if (vowel) {
  console.log(`${letter} is a vowel`);
}

// If consonant
if (consonant) {
  console.log(`${letter} is a consonant`);
}
