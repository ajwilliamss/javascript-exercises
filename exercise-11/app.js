let line = "";

for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    line += i;
  }
  line += "\n";
}

console.log(line);
