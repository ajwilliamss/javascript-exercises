let num1, num2, num3, maxVal, minVal;

// Ask the user to enter 3 integer numbers
num1 = prompt(`Enter integer value 1: `);
num2 = prompt(`Enter integer value 2: `);
num3 = prompt(`Enter integer value 3: `);

// Convert to integer
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

// Maximum value
maxVal = Math.max(num1, Math.max(num2, num3));

// Minimum value5
minVal = Math.min(num1, Math.min(num2, num3));

console.log(`The maximum value is ${maxVal}`);
console.log(`The minimum value is ${minVal}`);
