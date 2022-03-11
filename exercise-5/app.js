let side1 = prompt("Input Length of triangle side 1: ");
let side2 = prompt("Input Length of triangle side 2: ");
let side3 = prompt("Input Length of triangle side 3: ");

// Convert from string to integer
side1 = parseInt(side1);
side2 = parseInt(side2);
side3 = parseInt(side3);

// All sides equal
if (side1 === side2 && side1 === side3) {
  console.log("The triangle is equilateral");
}
// Two sides equal
else if (side1 === side2 || side2 === side3 || side3 === side1) {
  console.log("The triangle is isosceles");
}
// No sides equal
else {
  console.log("The triangle is scalene");
}
