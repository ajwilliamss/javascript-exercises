// Get input
let numItems = parseInt(prompt("Enter number of items purchased: "));

// Calculate shipping charge
const calcOrder = (items) => {
  let total = new Number();
  // Iterate over input
  for (let i = 0; i < items; i++) {
    // If first item
    if (i === 0) {
      total += 10.95;
    } else {
      total += 2.95;
    }
  }
  return Math.round(total * 100) / 100;
  3;
};

// Output
console.log(`Shipping charge: R${calcOrder(numItems)}`);
