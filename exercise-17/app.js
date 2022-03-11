// Get input and convert to integer
let userNum = prompt("Enter integer: ");
userNum = parseInt(userNum);

const isPrime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    // i will always be less than the parameter
    for (let i = 2; i < num; i++) {
      // If parameter is divisible by i, it's not a prime number so return false
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

// Output
if (isPrime(userNum)) {
  console.log(`${userNum} is a prime number`);
} else {
  console.log(`${userNum} is not a prime number`);
}
