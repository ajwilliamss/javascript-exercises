let side1, side2, side3;

alert("Input lengths of shorter triangle sides: ");

// Get input
side1 = prompt("Side 1:");
side2 = prompt("Side 2:");

// Convert to float
side1 = parseFloat(side1);
side2 = parseFloat(side2);

// Calculation

const calc = () => {
  side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
  console.log(
    `The length of the hypotenuse is ${Math.round(side3 * 100) / 100}`
  );
};

calc();
