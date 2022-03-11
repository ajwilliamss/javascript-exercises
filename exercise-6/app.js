let month = prompt("Input the month (e.g. January, February, etc.): ");
let day = prompt("Input the day of the month: ");
let season = "";

if (
  (month === "December" && day >= 21) ||
  month === "January" ||
  month === "February" ||
  (month === "March" && day <= 20)
) {
  season = "summer";
} else if (
  (month === "March" && day >= 21) ||
  month === "April" ||
  month === "May" ||
  (month === "June" && day <= 20)
) {
  season = "autumn";
} else if (
  (month === "June" && day >= 21) ||
  month === "April" ||
  month === "May" ||
  (month === "September" && day <= 20)
) {
  season = "winter";
} else if (
  (month === "September" && day >= 21) ||
  month === "April" ||
  month === "May" ||
  (month === "December" && day <= 20)
) {
  season = "spring";
}

console.log(`The season is ${season}`);
