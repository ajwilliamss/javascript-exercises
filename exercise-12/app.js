const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.map((book) => {
  // Object destructuring
  const { author, title, readingStatus } = book;

  // Output
  let output;

  // Check reading status
  if (readingStatus) {
    output = `Already read '${title}' by ${author}.`;
  } else {
    output = `You still need to read '${title}' by ${author}.`;
  }

  console.log(output);
});
