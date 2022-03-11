let arr = [];

/* A JavaScript Set is a collection of unique values. 
Each value can only occur once in a Set.
In this function a new Set object is created. */
const hasDuplicates = (array) => {
  /* If duplicates exist, the size of the original 
  array will not match the size of the set */
  if (array.length !== new Set(array).size) {
    console.log("The array contains duplicate values");
  } else {
    console.log("The array does not contain duplicate values");
  }
};

// Get 10 values
for (let i = 0; i < 10; i++) {
  arr[i] = prompt(`Enter value ${i + 1}:`);
}

hasDuplicates(arr);
